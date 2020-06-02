// TODO: factorizar esta classe
// só é ligeiramente diferente de um profile 

const REDO_PATH = "../../"
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
	'<li><span class="profile-stat-count" id="fllwrs">{3}</span> followers</li>' + //usr_followers
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
var user, posts, posts_loaded = false;

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
	if(posts_loaded)
		return;

	var gallery = $("#gllry");
	for (i = 0; i < posts.length; i++) {
		var post = posts[i];
		gallery.append(gallery_item_template.format(
			post.post_filter,
			REDO_PATH + post.post_content_path
		));
	}

	posts_loaded = true;
}

function unload_profile_posts() {
	if(!posts_loaded)
		return;

	$('.gallery-item').remove();

	posts_loaded = false;
}

function update_followers(new_val){
	$("#fllwrs").text(new_val)
}

function load_follow(is_following) {
	if (is_following) {
		document.getElementById("follow-btn").style.background = '#b5b5b5';
		document.getElementById("follow-btn").innerHTML = "Following";
	} else {
		document.getElementById("follow-btn").style.background = '#0095f6';
		document.getElementById("follow-btn").innerHTML = "Follow";
	}
}

function follow() {
	load_follow(follow_unfollow(user));
	var profile = get_profile(user.user_id);
	user = profile[0];
	posts = profile[1];
	
	// update aos posts
	if (posts != null)
		load_profile_posts(posts)
	else
		unload_profile_posts();

	// update ao nr de followers, de forma simples
	update_followers(user.user_followers.length);
}

window.onload = function () {
	profile = this.get_profile(localStorage.getItem(TMP_PROFILE));
	user = profile[0]; posts = profile[1];

	this.load_profile_info(user);
	this.load_follow(this.is_following(user));

	if (posts != null) // tem permissão
		this.load_profile_posts(posts);
}