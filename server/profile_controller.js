
function get_profile(user_id) {
	var user = get_users([user_id])[0];
	console.assert(user != null);

	return [user, get_profile_posts(user)];
}

// devia receber argumento do user que estamos
// logados e respectiva autenticação numa situação real
function get_profile_posts(user) {
	// "autenticação"
	var loggedin_user = get_loggedin_user();
	console.assert(loggedin_user != null);

	// não pode ver posts
	if (!(user.user_profile_visibility > 0 || // público
		is_following(user) || // seguido pelo user
		loggedin_user.user_id == user.user_id)) // próprio user
		return null;

	return get_posts(user.user_posts).sort((x, y) => y.post_creation_ts - x.post_creation_ts);
}

function get_hashtag_profile(hashtag) {
	return [hashtag, get_hashtags_posts([hashtag])];
}