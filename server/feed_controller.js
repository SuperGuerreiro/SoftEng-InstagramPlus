// devia receber argumento do user que estamos
// logados e respectiva autenticação numa situação real
function get_feed() {
	// "autenticação"
	var loggedin_user = get_loggedin_user();
	console.assert(loggedin_user != null);

	var feed_posts = [];
	feed_posts.push(...get_posts(loggedin_user.user_posts)); // próprios posts

	var following_users = get_users(loggedin_user.user_following); // posts de quem segue
	for (var i = 0; i < following_users.length; i++)
		feed_posts.push(...get_posts(following_users[i].user_posts));

	// hashtags posts
	var posts = get_hashtags_posts(loggedin_user.user_following_hashtags);
	for (var i = 0; i < posts.length; i++) // posts de pessoas que não são seguidas apenas
		if (loggedin_user.user_following.indexOf(posts[i][0].author_username) < 0 &&
			posts[i][0].author_username != loggedin_user.user_id)
			feed_posts.push(posts[i])

	return feed_posts.sort(function (x, y) {
		if (x.length > 1)
			x = x[0]
		if (y.length > 1)
			y = y[0]
		return y.post_creation_ts - x.post_creation_ts;
	}); //kel krazy sort
};

