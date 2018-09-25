/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


//Creates Tweet Element and appends HTML strings into it.
function createTweetElement(tweetData) {
    const $tweet = $('<article>').addClass('article-tweet')
    const time = new Date(tweetData.created_at).toLocaleTimeString();
    const header = `<header class="article-tweet-header">
                  <img class="profile-pic" src="${escape(tweetData.user.avatars.small)}">
                  <h2 class="article-header-text">${escape(tweetData.user.name)}</h2>
                  <span class="user-handle">${tweetData.user.handle}</span>
                  </header>`
    const body = `<p class="article-content-text">${escape(tweetData.content.text)}</p>`
    const footer = `<footer>
                    <p class="article-tweet-footer">${escape(time)}</p>
                    <p class="icons">
                    <i class="fas fa-flag"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="fas fa-heart"></i>
                    </p>
                 </footer>`;
    $tweet.append(header);
    $tweet.append(body);
    $tweet.append(footer);
    return $tweet;
}

//Loops through tweet Array and prepends each tweet elements to tweets container element.
function renderTweets(tweetArray) {
    tweetArray.forEach(function(tweet) {
        $("#tweets-container").prepend(createTweetElement(tweet));
    });
}

//Determines whether input text for new tweets are valid inputs, if they are valid,
//makes post request.
function tweetSubmit() {
    $error = $('.error-box');
    $("form").on("submit", function(event) {
        event.preventDefault();
        let $messagelength = $(this).find("textarea").val().length
        if (!$messagelength) {
            $error.text("Text input can't be empty.")
            $error.show();
        } else if ($messagelength > 140) {
            $error.text("Text input can't be longer then 140 characters.")
            $error.show();
        } else {
            $.ajax('/tweets', {
                data: $(this).serialize(),
                method: 'POST'
            })
            loadTweets();
            $error.hide();
        };
    })
};

//Loads all postest tweets in the database.
function loadTweets() {
    $(".posted-tweets").empty()
    $.ajax('/tweets', { method: 'GET' }).then(function(data) {
        console.log("retrieved data from Tweets", data);
        renderTweets(data);
    })
};

//For the Slide-Toggle function for compose button.
function newToggleCompose() {
    $(".compose-button").click(function() {
        $(".new-tweet").slideToggle();
        $(".txt").focus();
    });
}

//This function ensures HTML security by casting strings with escape() function.
function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

//loads each functions when the page is done loading.
$(document).ready(function() {
    tweetSubmit();
    loadTweets();
    newToggleCompose();
});