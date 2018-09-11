/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


function createTweetElement(tweetData){
  const $tweet = $('<article>').addClass('article-tweet')
  const header = `<header class="article-tweet-header">
                  <img class="profile-pic" src="https://vignette.wikia.nocookie.net/bungostraydogs/images/1/1e/Profile-icon-9.png/revision/latest?cb=20171030104015">
                  <h2 class="article-header-text">${tweetData.user.name}</h2>
                </header>`
  const body = ` <p class="article-content-text">${tweetData.content}</p>`
  const footer =`   <footer>
                      <p class="article-tweet-footer">9 days ago</p>
                      <p class="icons">
                      <i class="fas fa-flag"></i>
                      <i class="fas fa-retweet"></i>
                      <i class="fas fa-heart"></i>
                      </p>
                    </footer>`

    $tweet.append(header);
    $tweet.append(body);
    $tweet.append(footer);

    return $tweet;
}

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

var $tweet = createTweetElement(tweetData);
renderTweets(data);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.