// users estáticos
users_info_static = '{"users":['
	+
	'{\
	"user_id":"superguerreiro666",\
	"user_name":"Renato",\
	"user_bio":"Eu vivo no futuro porque me perdi no passado... 😭",\
	"user_avatar_path":"database/users/content/superguerreiro666.jpg",\
	"user_profile_visibility":"1",\
	"user_followers":["rsantos"],\
	"user_following":["rsantos"],\
	"user_following_hashtags":["cute"],\
	"user_posts":["puppy0","puppy2","hamster0"],\
	"user_fls":["cute0","closefriends0"]\
	},'
	+
	'{\
	"user_id":"rmseq",\
	"user_name":"Rafael",\
	"user_bio":"Odeio computadores! 🤜💻",\
	"user_avatar_path":"database/users/content/rmseq.jpg",\
	"user_profile_visibility":"0",\
	"user_followers":[""],\
	"user_following":["superguerreiro666"],\
	"user_following_hashtags":[],\
	"user_posts":[],\
	"user_fls":[]\
	},'
	+
	'{\
	"user_id":"rsantos",\
	"user_name":"Ruizinho",\
	"user_bio":"😂😂😂",\
	"user_avatar_path":"database/users/content/rsantos.jpg",\
	"user_profile_visibility":"0",\
	"user_followers":["superguerreiro666"],\
	"user_following":["superguerreiro666"],\
	"user_following_hashtags":[],\
	"user_posts":["cat0","puppy1","pig0"],\
	"user_fls":[]\
	}'
	+
	']}';

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


