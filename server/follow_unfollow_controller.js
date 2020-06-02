

// devia receber argumento do user que estamos
// logados e respectiva autenticação numa situação real
function is_following(user) {
	// "autenticação"
	var loggedin_user = get_loggedin_user();
	console.assert(loggedin_user != null);

	var res = (loggedin_user.user_following.indexOf(user.user_id) >= 0);
	console.assert((user.user_followers.indexOf(loggedin_user.user_id) >= 0) == res); // verifica conscistência
	return res;
}

// devia receber argumento do user que estamos
// logados e respectiva autenticação numa situação real
function is_followed(user) {
	// "autenticação"
	var loggedin_user = get_loggedin_user();
	console.assert(loggedin_user != null);

	var res = (loggedin_user.user_followers.indexOf(user.user_id) >= 0);
	console.assert((user.user_following.indexOf(loggedin_user.user_id) >= 0) == res); // verifica conscistência
	return res;
}

// devia receber argumento do user que estamos
// logados e respectiva autenticação numa situação real
function follow_unfollow(user) {
	// "autenticação"
	var loggedin_user = get_loggedin_user();
	console.assert(loggedin_user != null);

	if ((is_fllwng = !is_following(user))) { // follow
		loggedin_user.user_following.push(user.user_id);
		user.user_followers.push(loggedin_user.user_id);
	} else { // unfollow
		loggedin_user.user_following.splice(loggedin_user.user_following.indexOf(user.user_id), 1);
		user.user_followers.splice(user.user_followers.indexOf(loggedin_user.user_id), 1);
	}
	// guarda na "users db"
	add_user(loggedin_user);
	add_user(user);
	return is_fllwng;
}
