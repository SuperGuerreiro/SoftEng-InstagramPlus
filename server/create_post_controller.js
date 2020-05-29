
const HASHTAG_REGEX = /#(\w+)/g; //big brain?

// !IMPORTANTE: hashtags devem seguir o formato 
// json de array quando for adicionado
var post_info_template = '{\
    "post_id":"{0}",\
    "post_creation_ts":"{1}",\
    "post_description":"{2}",\
    "post_filter":"{3}",\
    "post_location":"{4}",\
    "post_hashtags":[{5}],\
    "post_content_path":"{6}",\
    "author_username":"{7}",\
    "author_avatar_path":"{8}"\
    }';

function create_post(description, filter, location, content_path) {
    var user = get_loggedin_user();
    var post_id = create_post_id();
    var post_info = post_info_template.format(
        post_id,
        new Date().getTime(),
        description,
        filter,
        location,
        arr_to_json_arr(parse_hashtags(description)),
        content_path,
        user.user_id,
        user.user_avatar_path,
    );

    add_post(JSON.parse(post_info));
    user.user_posts.push(post_id);
    add_user(user);

    window.location.replace("../../index.html"); 
}

function create_post_id() {
    return (new Date().getTime()); // shhh, por agora serve
}

function parse_hashtags(description) {
    var matches = [];
    var match;
    // procura hashtags, como? RTFM
    while ((match = HASHTAG_REGEX.exec(description)))
        matches.push(match[1]);
    return matches;
}