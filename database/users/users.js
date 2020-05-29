// users estáticos
users_info_static = '{"users":[\
{\
"user_id":"superguerreiro666",\
"user_name":"Renato João",\
"user_bio":"Eu vivo no futuro porque me perdi no passado... 😭",\
"user_avatar_path":"database/users/content/superguerreiro666.jpg",\
"user_profile_visibility":"1",\
"user_followers":[\
"barack_obama_official"\
],\
"user_following":[\
"rms3q",\
"barack_obama_official"\
],\
"user_posts":[\
"static0",\
"static1"\
]\
},\
{\
"user_id":"rms3q",\
"user_name":"Rafael José",\
"user_bio":"it\'s lit",\
"user_avatar_path":"database/users/content/rms3q.jpg",\
"user_profile_visibility":"1",\
"user_followers":[\
"superguerreiro666",\
"barack_obama_official"\
],\
"user_following":[\
"barack_obama_official"\
],\
"user_posts":[\
]\
},\
{\
"user_id":"barack_obama_official",\
"user_name":"Barack Obama",\
"user_bio":"Hello dear friends...",\
"user_avatar_path":"database/users/content/barack_obama_official.jpg",\
"user_profile_visibility":"1",\
"user_followers":[\
"rms3q",\
"superguerreiro666"\
],\
"user_following":[\
"rms3q",\
"barack_obama_official"\
],\
"user_posts":[\
]\
}\
]}';

function create_user_key(user_id) {
	return USER_KEY_PREFIX + user_id;
}

function is_user_key(key) {
	return key.startsWith(POST_KEY_PREFIX);
}

function load_static_users() {
	console.log('Initializing users db...');
	var users = JSON.parse(users_info_static).users;
	for (var i = 0; i < users.length; i++)
		localStorage.setItem(
			create_user_key(users[i].user_id),
			JSON.stringify(users[i]));

	localStorage.setItem(USERS_LOADED, "1");
}

// mesmo não sendo utilizado, pode ser interessante para debugging
function get_all_users() {
	if (!is_loaded(USERS_LOADED)) // lazy approach
		this.load_static_users();

	var users = [], keys = Object.keys(localStorage);
	for (var i = 0; i < keys.length; i++)
		if (is_user_key(keys[i]))
			users.push(JSON.parse(localStorage.getItem(keys[i])));

	return users;
}

function get_users(users_id) {
	if (!is_loaded(USERS_LOADED)) // lazy approach
		this.load_static_users();

	users = [];
	for (var i = 0; i < users_id.length; i++) {
		var user = localStorage.getItem(create_user_key(users_id[i]));
		if (user != null)
			users.push(JSON.parse(user));
	}

	return users;
}

function add_user(user) {
    if (!is_loaded(USERS_LOADED)) // lazy approach
        this.load_static_users();

    localStorage.setItem(
        create_user_key(user.user_id),
        JSON.stringify(user));
}

/**
 * login
 * 
 * está aqui pq dá jeito e já tinha depêndencias
 * não tem nada a ver com a arquitetura tbh
 * 
 */

LOGGEDIN_USER = "superguerreiro666"

// define um utilizador como logado
function set_loggedin_user(user_id) {
	if (get_users([user_id]).length <= 0)
		return;
	localStorage.setItem(CURRENT_USER_LABEL, user_id);
}

// devolve o utilizador logado
function get_loggedin_user() {
	return get_users([get_loggedin_user_id()])[0];
}

// devolve o id do utilizador logado
function get_loggedin_user_id() {
	return localStorage.getItem(CURRENT_USER_LABEL);
}


