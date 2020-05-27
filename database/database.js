
// guardado aqui para garantir concistência, são coisas utilizadas pelo sistema
const POSTS_LOADED = "posts_loaded";
const USERS_LOADED = "users_loaded";
const CURRENT_USER_LABEL = "current_user";
const POST_KEY_PREFIX = "pst_";
const USER_KEY_PREFIX = "usr_";

// vê se DB com label já está carregada
function is_loaded(db_label) {
    return (localStorage.getItem(db_label) != null);
}