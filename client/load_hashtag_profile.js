// TODO: factorizar esta classe
// só é ligeiramente diferente de um profile 

const REDO_PATH = "../../"
var profile_template =
	'<div class="profile-user-settings">' +
	'<h1 class="profile-user-name">{0}</h1>' + //usr_username
	'<button id="follow-btn" class="btn btn-secondary" style="background:rgb(0, 149, 246)"; onclick="follow()" >Follow</button>' +
	'<button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>' +
	'</div>';

var gallery_item_template =
	'<div class="gallery-item" tabindex="0">' +
	'<figure class="{0}" id="filter-figure-id">' + //pst_filter
	'<img src="{1}" class="gallery-image" >' + //pst_content_path
	'</figure>' +
	'<div class="gallery-item-info">' +
	'</div>' +
	'</div>';

var hashtag_with_hash, hashtag, following;

function load_hashtag_info(hashtag) {
	$("#prfl").append(profile_template.format(
		hashtag
	));
}

function load_profile_posts(posts) {
	var gallery = $("#gllry");
	for (i = 0; i < posts.length; i++) {
		var post = posts[i][0];
		gallery.append(gallery_item_template.format(
			post.post_filter,
			REDO_PATH + post.post_content_path
		));
	}
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
	// confirmação 
	var str1 = "follow" // lucky guess?
	var str2 = "Followed."
	if (following) {
		str1 = "unfollow"
		str2 = "Unfollowed."
	}
	if (!confirm("Are you sure you want to " + str1 + " " + hashtag_with_hash + " ?"))
		return;

	load_follow((following = follow_unfollow_hashtag(hashtag)));
	alert(str2);
}

window.onload = function () {
	var profile = this.get_hashtag_profile(hashtag = ((hashtag_with_hash = localStorage.getItem(TMP_PROFILE)).slice(1)));
	this.load_hashtag_info(hashtag_with_hash);
	this.load_follow((following = this.is_following_hashtag(hashtag)));
	this.load_profile_posts(profile[1]);
}