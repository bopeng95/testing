//Bo Peng

/* INSTAGRAM ACCESS TOKEN
 --------------------------------------------------------------*/
var token = ' hidden from github ';
var username = 'bopeng123'; //for "q: username" in data.
var num = 9;

//$(document).ready(function() {

//  $( "#insta-btn" ).click(function() {
    $.ajax({
      url: 'https://api.instagram.com/v1/users/self/media/recent',
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: token, count: num},
      success: function(data) {
        console.log(data);
        for (x in data.data) {

          var comments = data.data[x].comments.count;
          var likes = data.data[x].likes.count;
          var thumbnail = data.data[x].images.thumbnail.url.replace('s150x150/', 's640x640/');
          var link = data.data[x].link;

          $('.instagram').append('<div class = "insta-content beta-font animated fadeIn"><a href="'+link+'" target="_blank"><img class="scaling shadow" src="'+ thumbnail +'"></a><div class = "heart" style="padding:7px 0 15px 0;"><i class="fa fa-heart-o" aria-hidden="true"></i> ' + likes + ' &nbsp &nbsp &nbsp <i class="fa fa-comment-o" aria-hidden="true"></i> '+comments+'</div></div>');
        }
      },
      error: function(data) {
        console.log(data);
      }
    });
    //$("#insta-btn").toggle();
//  });
//});
/*-------------------------------------------------------------*/