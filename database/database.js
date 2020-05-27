
// guardado aqui para garantir concistência, são coisas utilizadas pelo sistema
const POSTS_LOADED = "posts_loaded";
const USERS_LOADED = "users_loaded";
const POST_KEY_PREFIX = "pst_";
const USER_KEY_PREFIX = "usr_";
const reserved_labels = [POSTS_LOADED,USERS_LOADED];

// vê se DB com label já está carregada
function is_loaded(db_label){
    return (localStorage.getItem(db_label) != null);
}

// vê se a label é reservada
function is_reserved(label){
    return (reserved_labels.indexOf(label) > -1);
}