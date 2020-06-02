const PROFILE_URL = "./Components/Profile/profile.html";
const STRANGE_PROFILE_URL = "./Components/strange_profile/strange_profile.html";
const HASHTAG_PROFILE_URL = "./Components/hashtag_profile/hashtag_profile.html";
const FILTERED_FEED_URL = "./Components/filtered_feed/filtered_feed.html";
const PATH = "../../";

// o html de cada post, irá ser carregado dinamicamente
var post_template =
    '<article class="post">' +
    '<div class="post-user">' +
    '<div class="post-user-avatar">' +
    '<img src="{0}"/>' + //usr_avatar_path
    '</div>' +
    '<div class="post-user-nickname">' +
    '<a class="profile-url" id="prfl" href="{1}">' +
    '<span>{2}</span>' + //usr_username
    '</a>' +
    '<span><strong>{9}</strong></span>' + // from hashtag?
    '</div>' +
    '</div>' +
    '<div class="post-content">' +
    '<div class="post-content-bg">' +
    '<figure class="{3}">' + // pst_filter
    '<img src="{4}"/>' + // pst_content_path
    '</figure>' +
    '</div>' +
    '</div>' +
    '<div class="post-caption">' +
    '<strong>{5}</strong>' + // usr_username,
    ' {6}' + // pst_description
    '<p></p>' +
    '<small>{7}{8}</small>' + //pst_creation_ts
    '</div>' +
    '</article>';

var hashtag_ref_template =
    '<a class=hashtag-profile-url id="hstg" href="{0}">' +
    '{1}' + //hashtag
    '</a>';

var ffeed_name_template =
    '<label for="filteredFeed" class="filtered-feed">' +
    '<article class="filter-box" ref="post">' +
    '<div class="filter-details">' +
    '<div class="filter-name">' +
    '<span>{0}</span>' +
    '</div>' +
    '</div>' +
    '</article>' +
    '</label>';

var no_feed_template =
    '<div class="no-feed">' +
    "<center>This is so sad :'( , there are no posts in this feed.</center>" +
    '</div>';

function build_description(description, hashtags) {
    for (var i = 0; i < hashtags.length; i++) {
        description = description.replace('#' + hashtags[i],
            hashtag_ref_template.format(
                HASHTAG_PROFILE_URL,
                '#' + hashtags[i]
            ));
    }
    return description;
}

function load_feed_name(fl_name) {
    $("#fls").append(ffeed_name_template.format(
        fl_name,
    ));
}

function load_feed(posts) {
    var feed = $("#psts");

    if (posts.length <= 0)
		feed.append(no_feed_template);


    for (i = 0; i < posts.length; i++) {

        hashtag = "";
        if ((post = posts[i]).length > 1) {
            hashtag = " <big>#" + post[1] + "</big>";
            post = post[0];
        }

        var profile_href = STRANGE_PROFILE_URL; // lucky guess 2.0?
        if (post.author_username == get_loggedin_user_id())
            profile_href = PROFILE_URL;

        var location = "";
        if (post.post_location != "")
            location = post.post_location + ", "
        feed.append(post_template.format(
            PATH + post.author_avatar_path,
            PATH + profile_href,
            post.author_username,
            post.post_filter,
            PATH + post.post_content_path,
            post.author_username,
            build_description(post.post_description, post.post_hashtags),
            location,
            relative_time(post.post_creation_ts),
            hashtag
        ));
    }
}

window.onload = function () {
    this.set_loggedin_user(LOGGEDIN_USER) // isto pode ser feito de maneira mais inteligente
    this.load_feed(this.get_filtered_feed(fl_id = this.localStorage.getItem(TMP_FFEED)));
    this.load_feed_name(this.get_fl_name(fl_id) + " Feed");

    $('a').click(
        function () {
            localStorage.setItem(TMP_PROFILE, $(this).text());
        }
    );
}
