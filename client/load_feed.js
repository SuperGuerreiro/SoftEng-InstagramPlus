const PROFILE_URL = "./Components/Profile/profile.html";
const STRANGE_PROFILE_URL = "./Components/strange_profile/strange_profile.html";

// o html de cada post, irá ser carregado dinamicamente
var post_template =
	'<article class="post">' +
	'<div class="post-user">' +
	'<div class="post-user-avatar">' +
	'<img src="{0}"/>' + //usr_avatar_path
	'</div>' +
	'<div class="post-user-nickname">' +
	'<a class=profile-url href="{1}"' +
	'<span>{2}</span>' + //usr_username
	'</a>' +
	'</div>' +
	'</div>' +
	'<div class="post-content">' +
	'<div class="post-content-bg">' +
	'<figure class="{3}">' + // pst_filter
	'<img src="{4}"/>' + // pst_content_path
	'</figure>' +
	'</div>' +
	'</div>' +
	'<div class="post-caption">' +
	'<strong>{5}</strong> {6}' + //usr_username, pst_description
	'</div>' +
	'</article>'

function load_feed(posts) {
	var feed = $("#psts");
	for (i = 0; i < posts.length; i++) {
		var post = posts[i];

		var profile_href = STRANGE_PROFILE_URL;
		if (post.author_username == get_loggedin_user_id())
			profile_href = PROFILE_URL;

		feed.append(post_template.format(
			post.author_avatar_path,
			profile_href,
			post.author_username,
			post.post_filter,
			post.post_content_path,
			post.author_username,
			post.post_description
		));
	}
}

window.onload = function () {
	this.set_loggedin_user(LOGGEDIN_USER) // isto pode ser feito de maneira mais inteligente

	// faz request ao "servidor" (feed_controller) para obter os posts
	// carrega os posts no feed
	this.load_feed(this.get_feed());

	//"event listener" em todos os links
	$('a').click(
		function () {
			localStorage.setItem(TMP_PROFILE, $(this).text());
		}
	);
}
