// retorna a informação sobre o feed
function get_feed() {
	var loggedin_user = get_loggedin_user();
	if (loggedin_user == null) {
		console.log("not logged in")
		return;
	}

	var feed_posts = [];
	feed_posts.push(...get_posts(loggedin_user.user_posts)); // próprios posts

	var following_users = get_users(loggedin_user.user_following); // posts de quem segue
	for (var i = 0; i < following_users.length; i++)
		feed_posts.push(...get_posts(following_users[i].user_posts));

	return feed_posts.sort((x,y) => y.post_creation_ts - x.post_creation_ts); //kel krazy sort
};

