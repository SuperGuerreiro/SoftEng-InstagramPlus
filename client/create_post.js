// html para cada opção de filtro
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

function load_filter_options(posts) { 
    var filters = document.getElementById('filters_id');
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


var text = FileHelper.readStringFromFileAtPath ("../lib/instagram.css/filters.txt" );

function FileHelper()

{
    FileHelper.readStringFromFileAtPath = function(pathOfFileToReadFrom)
    {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }
}



window.onload = function () {
    // faz request ao "servidor" (feed_controller) para obter os posts
    // carrega os posts no feed
    this.load_feed(this.get_feed());
}
