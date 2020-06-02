fls_info_static = '{"filter_lists":['
    + //superguerreiro666
    '{\
"fl_id":"cute0",\
"fl_description":"I love it! lmao 😂",\
"fl_name":"Funny Cute",\
"fl_owner_id":"superguerreiro666",\
"fl_hashtags":["funny","cute"],\
"fl_users_id":[]\
},'
    + //superguerreiro666
    '{\
"fl_id":"closefriends0",\
"fl_description":"My best buddies only, very exclusive.",\
"fl_name":"Buddies",\
"fl_owner_id":"superguerreiro666",\
"fl_hashtags":[],\
"fl_users_id":["rsantos"]\
},'
    +
    //superguerreiro666
    '{\
    "fl_id":"empty0",\
    "fl_description":"Sadness filter, only sad #s.",\
    "fl_name":"Empty Sadness",\
    "fl_owner_id":"superguerreiro666",\
    "fl_hashtags":["#sad"],\
    "fl_users_id":[]\
    }'
    +
    ']}';

function create_fl_key(post_id) {
    return FL_KEY_PREFIX + post_id;
}

function is_fl_key(key) {
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
        var fl = localStorage.getItem(create_fl_key(fls_id[i]));
        if (fl != null)
            fls.push(JSON.parse(fl));
    }

    return fls;
}