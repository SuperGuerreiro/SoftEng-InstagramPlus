// devia receber argumento do user que estamos
// logados e respectiva autenticação numa situação real
function get_filtered_feed(fl_id) {
	// "autenticação"
	var loggedin_user = get_loggedin_user();
	console.assert(loggedin_user != null);

	// get filtered_list
	var fl = get_fls([fl_id])[0]; // falta uma confirmação

	// posts de quem segue (e está presente no filtro)
	var following_users = get_users(fl.fl_users_id), feed_posts = [];
	for (var i = 0; i < following_users.length; i++)
		feed_posts.push(...get_posts(following_users[i].user_posts));

	// posts dos hashtags que segue (e estão presentes no filtro)
	var posts = get_hashtags_posts(fl.fl_hashtags);
	for (var i = 0; i < posts.length; i++)
		if (fl.fl_users_id.indexOf(posts[i][0].author_username) < 0)
			feed_posts.push(posts[i])

	return feed_posts.sort(function (x, y) {
		if (x.length > 1)
			x = x[0]
		if (y.length > 1)
			y = y[0]
		return y.post_creation_ts - x.post_creation_ts;
	}); //kel krazy sort
};

