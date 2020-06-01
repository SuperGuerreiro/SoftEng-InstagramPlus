
// devia receber argumento do user que estamos 
// logados e respectiva autenticação numa situação real
function remove_post(post_id) {
	// "autenticação"
	var loggedin_user = get_loggedin_user();
	console.assert(loggedin_user != null)

	loggedin_user.user_posts.splice(loggedin_user.user_posts.indexOf(post_id), 1);
	add_user(loggedin_user);

	//  não há necessidade de remover o post da db, tal como irl
	// 	nada é realmente removido, apenas desindexado
}