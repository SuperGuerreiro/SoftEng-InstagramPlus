// posts estáticos
posts_info_static = '{"posts":['
+ //superguerreiro666
'{\
"post_id":"puppy0",\
"post_creation_ts":"1590748820100",\
"post_description":"Que fofura... #cute #puppy",\
"post_filter":"//TODO",\
"post_location":"//TODO",\
"post_hashtags":["cute","puppy"],\
"post_content_path":"database/posts/content/puppy0.jpeg",\
"author_username":"superguerreiro666",\
"author_avatar_path":"database/users/content/superguerreiro666.jpg"\
},'
+ //rsantos
'{\
"post_id":"cat0",\
"post_creation_ts":"1590749174500",\
"post_description":"Um #cute #cat que me deixa feliz! 🐱",\
"post_filter":"//TODO",\
"post_location":"//TODO",\
"post_hashtags":["cute","cat"],\
"post_content_path":"database/posts/content/cat0.jpeg",\
"author_username":"rsantos",\
"author_avatar_path":"database/users/content/rsantos.jpg"\
},'
+ //rsantos
'{\
"post_id":"puppy1",\
"post_creation_ts":"-1",\
"post_description":"Olhem para isto, que #funny #puppy 🤣🤣🤣",\
"post_filter":"//TODO",\
"post_location":"//TODO",\
"post_hashtags":["funny","puppy"],\
"post_content_path":"database/posts/content/puppy1.jpeg",\
"author_username":"rsantos",\
"author_avatar_path":"database/users/content/rsantos.jpg"\
},'
+ //superguerreiro666
'{\
"post_id":"puppy2",\
"post_creation_ts":"1590748820100",\
"post_description":"#funny #puppy",\
"post_filter":"//TODO",\
"post_location":"//TODO",\
"post_hashtags":["funny","puppy"],\
"post_content_path":"database/posts/content/puppy2.jpeg",\
"author_username":"superguerreiro666",\
"author_avatar_path":"database/users/content/superguerreiro666.jpg"\
},'
+ //superguerreiro666
'{\
"post_id":"hamster0",\
"post_creation_ts":"1590748820100",\
"post_description":"Estou a pensar comprar um ratinho malta! #funny #hamster",\
"post_filter":"//TODO",\
"post_location":"//TODO",\
"post_hashtags":["funny","hamster"],\
"post_content_path":"database/posts/content/hamster0.jpeg",\
"author_username":"superguerreiro666",\
"author_avatar_path":"database/users/content/superguerreiro666.jpg"\
},'
+ //rsantos
'{\
"post_id":"pig0",\
"post_creation_ts":"-1",\
"post_description":"🐷🐽 #cute #funny #pig",\
"post_filter":"//TODO",\
"post_location":"//TODO",\
"post_hashtags":["cute","funny","pig"],\
"post_content_path":"database/posts/content/pig0.jpeg",\
"author_username":"rsantos",\
"author_avatar_path":"database/users/content/rsantos.jpg"\
}'
+
']}';

function create_post_key(post_id) {
	return POST_KEY_PREFIX + post_id;
}

function is_post_key(key) {
	return key.startsWith(POST_KEY_PREFIX);
}

function load_static_posts() {
	console.log('Initializing posts db...');
	var posts = JSON.parse(posts_info_static).posts;
	for (var i = 0; i < posts.length; i++)
		localStorage.setItem(
			create_post_key(posts[i].post_id),
			JSON.stringify(posts[i]));

	localStorage.setItem(POSTS_LOADED, "1");
}

// mesmo não sendo utilizado, pode ser interessante para debugging
function get_all_posts() {
	if (!is_loaded(POSTS_LOADED)) // lazy approach
		this.load_static_posts();

	var posts = [], keys = Object.keys(localStorage);
	for (var i = 0; i < keys.length; i++)
		if (is_post_key(keys[i]))
			posts.push(JSON.parse(localStorage.getItem(keys[i])));

	return posts;
}

function get_posts(posts_id) {
	if (!is_loaded(POSTS_LOADED)) // lazy approach
		this.load_static_posts();

	posts = [];
	for (var i = 0; i < posts_id.length; i++) {
		var post = localStorage.getItem(create_post_key(posts_id[i]));
		if (post != null)
			posts.push(JSON.parse(post));
	}
	return posts;
}

function add_post(post) {
	if (!is_loaded(POSTS_LOADED)) // lazy approach
		this.load_static_posts();

	localStorage.setItem(
		create_post_key(post.post_id),
		JSON.stringify(post));
}
