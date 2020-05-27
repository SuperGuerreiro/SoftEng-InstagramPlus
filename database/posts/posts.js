// posts estáticos
posts_info_static = '{"posts":[{\
"post_id":"static0",\
"post_creation_ts":"-1",\
"post_description":"Hello Friends,...",\
"post_hashtags":[\
"whitehouse",\
"usa"\
],\
"post_content_path":"database/posts/content/static0.jpeg",\
"author_username":"obama",\
"author_avatar_path":"database/posts/content/static0.jpeg"\
},\
{\
"post_id":"static1",\
"post_creation_ts":"-1",\
"post_description":"Hello Friends,...",\
"post_hashtags":[\
"whitehouse"\
],\
"post_content_path":"database/posts/content/static1.jpeg",\
"author_username":"obama.president",\
"author_avatar_path":"database/posts/content/static1.jpeg"\
},\
{\
"post_id":"static2",\
"post_creation_ts":"-1",\
"post_description":"Hello Friends,...",\
"post_hashtags":[\
"hello",\
"fridayswithobama"\
],\
"post_content_path":"database/posts/content/static2.jpeg",\
"author_username":"obama",\
"author_avatar_path":"database/posts/content/static0.jpeg"\
},\
{\
"post_id":"static3",\
"post_creation_ts":"-1",\
"post_description":"Hello Friends,...",\
"post_hashtags":[\
],\
"post_content_path":"database/posts/content/static3.jpeg",\
"author_username":"obama_whitehouse",\
"author_avatar_path":"database/posts/content/static3.jpeg"\
}]}';

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

