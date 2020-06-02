fls_info_static = '{"filter_lists":['
    + //superguerreiro666, 5
    '{\
"fl_id":"cute0",\
"fl_description":"1590507192000",\
"fl_name":"Que fofura... #cute #puppy",\
"fl_owner_id":"//TODO",\
"fl_hashtags":["cute"],\
"fl_users_id":["rsantos"],\
}'
    +
    ']}';

function create_fl_key(post_id) {
    return FL_KEY_PREFIX + post_id;
}

function is_post_key(key) {
    return key.startsWith(FL_KEY_PREFIX);
}

function load_static_fls() {
    console.log('Initializing fls db...');
    var fls = JSON.parse(fls_info_static).filter_lists;
    for (var i = 0; i < fls.length; i++)
        localStorage.setItem(
            create_fl_key(fls[i].fl_id),
            JSON.stringify(fls[i]));

    localStorage.setItem(FLS_LOADED, "1");
}

function get_fls(fls_id) {
    if (!is_loaded(FLS_LOADED)) // lazy approach
        this.load_static_fls();

    fls = [];
    for (var i = 0; i < fls_id.length; i++) {
        var fl = localStorage.getItem(create_post_key(fls_id[i]));
        if (fl != null)
            fls.push(JSON.parse(fl));
    }
    return fls;
}