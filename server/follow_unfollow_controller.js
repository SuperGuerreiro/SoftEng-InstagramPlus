
function is_following(user1, user2) {
	var res = (user1.user_following.indexOf(user2.user_id) >= 0);
	console.assert((user2.user_followers.indexOf(user1.user_id) >= 0) == res); // verifica conscistência
	return res;
}

function is_followed(user1, user2) {
	var res = (user1.user_followers.indexOf(user2.user_id) >= 0);
	console.assert((user2.user_following.indexOf(user1.user_id) >= 0) == res); // verifica conscistência
	return res;
}

/**
 * @param {*} user1 utilizador que vai seguir/parar de seguir
 * @param {*} user2  utilizador que vai ser seguido/parar de ser seguido
 */
function follow_unfollow(user1, user2) {
	if ((is_fllwng = !is_following(user1,user2))) { // follow
		user1.user_following.push(user2.user_id);
		user2.user_followers.push(user1.user_id);
	} else { // unfollow
		user1.user_following.splice(user1.user_following.indexOf(user2.user_id),1);
		user2.user_followers.splice(user2.user_followers.indexOf(user1.user_id),1);
	}
	// guarda na "users db"
	add_user(user1);
	add_user(user2);

	return is_fllwng;
}
