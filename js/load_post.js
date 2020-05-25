// não pode ser uma constante, fofos
var post_template =
    '<article class="post">' +
    '<div class="post-user">' +
    '<div class="post-user-avatar">' +
    '<img src="{0}"/>' + //usr_avatar_path
    '</div>' +
    '<div class="post-user-nickname">' +
    '<span>{1}</span>' + //usr_username
    '</div>' +
    '</div>' +
    '<div class="post-content">' +
    '<div class="post-content-bg">' +
    '<figure class="filter-inkwell">'+
    '<img src="{2}"/>' + // pst_content_path
    '</figure>'+
    '</div>' +
    '</div>' +
    '<div class="post-caption">' +
    '<strong>{3}</strong> {4}' + //usr_username, pst_description
    '</div>' +
    '</article>'

function load_posts(posts) { 

    var feed = $("#psts");
    for(i = 0; i < posts.length; i++){
        var post = posts[i];
        feed.append(post_template.format(
        post.author_avatar_path, 
        post.author_username,
        post.post_content_path,
        post.author_username,
        post.post_description
    ));  
  }
}



// main, xisdê
window.onload = function () {
    // é utilizado um pequeno grande hack, é carregado um json
    // disfarçado de js pelo html, depois é transformado em json
    // risos loucos
    this.load_posts(JSON.parse(posts_info).posts);
}
