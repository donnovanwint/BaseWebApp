// Weather API
function getWeather(searchQuery) {
  let url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchQuery + "&units=imperial&APPID=" + apiKey;

  $.ajax(url, {
    success: function (data) {
      $('.city').text(data.name);
      $('.temp').text(data.main.temp + ' degrees');
    },
    error: function (error) {
      $('.error-message').text('An error occured...');
    }
  })
}

function searchWeather() {
  let searchQuery = $('.search').val();
  $('.city').text('');
  $('.temp').text('');
  $('.error-message').text('');
  getWeather(searchQuery);
}


// Puppy Function
function showPicture() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  $("p").html("High five! You're building your first web app!");

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more

}