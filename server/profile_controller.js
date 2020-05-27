

function get_profile(user_id){
    var current_user_id = get_current_user_id();
    if(current_user_id == null){
        console.log("not logged in")
        return;
    }

    var user = get_users([user_id])[0], posts = [];
    if(user.user_profile_visibility > 0 || // público
        user.user_followers.indexOf(current_user_id) >= 0 || // seguido pelo user
         current_user_id == user_id ) // próprio user
             posts = get_posts(user.user_posts);

    return [user, posts];
}



