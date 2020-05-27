// retorna a informação sobre o feed
function get_feed() {
    var current_user = get_current_user();
    if (current_user == null) {
        console.log("not logged in")
        return;
    }

    var following_users = get_users(current_user.user_following), feed_posts = [];
    for (var i = 0; i < following_users.user_following; i++)
        feed_posts.concat(get_posts(following_users[i].user_posts));
        
    return feed_posts;
};