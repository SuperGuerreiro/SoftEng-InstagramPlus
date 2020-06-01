const REDO_PATH = "../../"

var isFollowing = false;

var profile_template =
	'<div class="profile-image">' +
	'<img src="{0}">' + //usr_avatar_path
	'</div>' +
	'<div class="profile-user-settings">' +
	'<h1 class="profile-user-name">{1}</h1>' + //usr_username
	'<button id="follow-btn" class="btn btn-secondary" style="background:rgb(0, 149, 246)"; onclick="follow()" >Follow</button>' +
	'<button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>' +
	'</div>' +
	'<div class="profile-stats">' +
	'<ul>' +
	'<li><span class="profile-stat-count">{2}</span> posts</li>' + //usr_posts
	'<li><span class="profile-stat-count">{3}</span> followers</li>' + //usr_followers
	'<li><span class="profile-stat-count">{4}</span> following</li>' + //usr_following
	'</ul>' +
	'</div>' +
	'<div class="profile-bio">' +
	'<p><span class="profile-real-name">{5}</span> {6}</p>' + //usr_name, usr_bio
	'</div>';

var gallery_item_template =
	'<div class="gallery-item" tabindex="0">' +
	'<figure class="{0}" id="filter-figure-id">' + //pst_filter
	'<img src="{1}" class="gallery-image" >' + //pst_content_path
	'</figure>' +
	'<div class="gallery-item-info">' +
	'</div>' +
	'</div>';

function load_profile(profile) {
	load_profile_info(profile[0]);
	load_profile_posts(profile[1]);
}

function load_profile_info(user) {
	$("#prfl").append(profile_template.format(
		REDO_PATH + user.user_avatar_path,
		user.user_id,
		user.user_posts.length,
		user.user_followers.length,
		user.user_following.length,
		user.user_name,
		user.user_bio
	));
}

function load_profile_posts(posts) {
	var gallery = $("#gllry");
	for (i = 0; i < posts.length; i++) {
		var post = posts[i];
		gallery.append(gallery_item_template.format(
			post.post_filter,
			REDO_PATH + post.post_content_path
		));
	}
}

function follow(){
    if(!isFollowing){
        document.getElementById("follow-btn").style.background='#b5b5b5';
        document.getElementById("follow-btn").innerHTML="Following";
        
    } else{
        document.getElementById("follow-btn").style.background='#0095f6';
        document.getElementById("follow-btn").innerHTML="Follow";
    }
    
    isFollowing = !isFollowing;
    
}

window.onload = function () {
	this.set_loggedin_user(LOGGEDIN_USER) // isto pode ser feito de maneira mais inteligente
	this.load_profile(this.get_profile(this.get_loggedin_user_id()));
}