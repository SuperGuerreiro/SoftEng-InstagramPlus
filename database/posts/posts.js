const IS_LOADED_ID = "is_loaded";

// posts estáticos
posts_info_static ='{"posts":[{\
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

function load_posts_to_storage() {
    console.log('Initializing posts db...');
    var posts = JSON.parse(posts_info_static).posts;
    for(var i = 0; i < posts.length; i++)
        localStorage.setItem(posts[i].post_id, JSON.stringify(posts[i]));
    
    localStorage.setItem(IS_LOADED_ID, "1");
}

function is_loaded(){
    return (localStorage.getItem(IS_LOADED_ID) != null);
}

function is_post_key(key){
    return key != IS_LOADED_ID;
}

function get_all_posts() {
    if(!this.is_loaded()) // lazy approach
        this.load_posts_to_storage();

    var posts = [], keys = Object.keys(localStorage);
    for(var i = 0; i < keys.length; i++)
        if(is_post_key(keys[i]))
            posts.push(JSON.parse(localStorage.getItem(keys[i])));
    
    return posts;
}
