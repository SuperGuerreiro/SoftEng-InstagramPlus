const REDO_PATH = "../../"

var profile_template =
	'<div class="profile-image">' +
	'<img src="{0}">' + //usr_avatar_path
	'</div>' +
	'<div class="profile-user-settings">' +
	'<h1 class="profile-user-name">{1}</h1>' + //usr_username
	'<button class="btn btn-outline-secondary">Edit Profile</button>' +
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
	'<div class="gallery-item" id="{0}" tabindex="0">' + //pst_id
	'<figure class="{1}" id="filter-figure-id">' + //pst_filter
	'<img src="{2}" class="gallery-image" >' + //pst_content_path
	'</figure>' +
	'<div class="gallery-item-info">' +
	'<button class="btn-delete" id="{0}" onclick="delete_post(this)">' + //pst_id
	'<div class="img"></div>' +
	'</button>' +
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
			post.post_id,
			post.post_filter,
			REDO_PATH + post.post_content_path
		));
	}
}

function delete_post(caller) {
	if (!confirm("Are you sure you want to delete this post?"))
		return; 

	remove_post(caller.id);
	$('#' + caller.id).remove(); // actualiza o perfil (remove post de display)
	alert("Post deleted.");
}

window.onload = function () {
	this.set_loggedin_user(LOGGEDIN_USER) // isto pode ser feito de maneira mais inteligente
	this.load_profile(this.get_profile(this.get_loggedin_user_id()));
}