
// guardado aqui para garantir concistência, são coisas utilizadas pelo sistema
const POSTS_LOADED = "posts_loaded";
const USERS_LOADED = "users_loaded";
const FLS_LOADED = "fls_loaded";
const TMP_PROFILE = "tmp_profile";
const TMP_FILE_LOCATION = "tmp_file_location";
const TMP_FILE_FORMAT = "tmp_file_format";
const CURRENT_USER_LABEL = "current_user";
const POST_KEY_PREFIX = "pst_";
const USER_KEY_PREFIX = "usr_";
const FL_KEY_PREFIX = "fl_";

// vê se DB com label já está carregada
function is_loaded(db_label) {
    return (localStorage.getItem(db_label) != null);
}