$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup =
    "<h1>Chicago Forecast</h1>" +

    "<h3>Current Weather Conditions</h3>" +
      "<li>It is currently " + data.currently.summary + " and " + data.currently.icon + "." +
      "<li> The current temperature is " + data.currently.temperature + " degrees but it feels like " + data.currently.apparentTemperature + " degrees. " +
      "<li> Today's forecast is for " + data.daily.data[0].icon + " with " + data.daily.data[0].summary +

    "<h3>3 Day Forecast</h3>" +
      "<li> Tomorrow's forecast is " + data.daily.data[1].summary + " The low is " + data.daily.data[1].apparentTemperatureMin + " degrees and the high is " + data.daily.data[1].apparentTemperatureMax + " degrees. " +
      "<li> The day after tommorow's forecast is for " + data.daily.data[2].summary + " The low is " + data.daily.data[2].apparentTemperatureMin + " degrees and the high is " + data.daily.data[2].apparentTemperatureMax + " degrees. " +
      "<li> In 3 days from today, the forecast is  " + data.daily.data[3].summary + " The low is " + data.daily.data[3].apparentTemperatureMin + " degrees and the high is " + data.daily.data[3].apparentTemperatureMax + " degrees. " +


    "<h3> The Week Ahead</h3>" +
      "<li> The summary for the next 7 days is: " + data.daily.summary


    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
