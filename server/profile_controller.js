function get_profile(user_id){
    current_user_id = get_current_user_id();
    if(current_user_id == null){
        console.log("not logged in")
        return;
    }
    var user = get_users([user_id])[0], posts = [];

    if(user.user_profile_visibility > 0 || // current user can view profile
        user.user_followers.indexOf(current_user_id) >= 0 || current_user_id == user_id )
             posts = get_posts(user.user_posts);
    
    return [user, posts];
}

