
// devia receber argumento do user que estamos
// logados e respectiva autenticação numa situação real
function get_profile(user_id) {
	// "autenticação"
	var loggedin_user_id = get_loggedin_user_id();
	console.assert(loggedin_user_id != null)

	var user = get_users([user_id])[0], posts = [];
	if (user.user_profile_visibility > 0 || // público
		user.user_followers.indexOf(loggedin_user_id) >= 0 || // seguido pelo user
		loggedin_user_id == user_id) // próprio user
		posts = get_posts(user.user_posts);

	return [user, posts.sort((x, y) => y.post_creation_ts - x.post_creation_ts)];
}
