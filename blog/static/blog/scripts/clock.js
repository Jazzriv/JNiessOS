function updateClock ( ){
    var currentTime = new Date ( );
    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );

  	// Pad the minutes and seconds with leading zeros, if required
    currentMinutes = ( currentMinutes  12 ) ? currentHours - 12 : currentHours;

  	// Convert an hours component of "0" to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  	// Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  	
  	
    $("#clock").html(currentTimeString);
   	  	
}

$(document).ready(function()
{
    setInterval('updateClock()', 1000);
});

/*

$(document).ready(function() {

// Create a newDate() object
var newDate = new Date();
// Extract the current date from Date object
newDate.setDate(newDate.getDate());
// Output the day, date, month and year   

setInterval( function() {
  // Create a newDate() object and extract the seconds of the current time on the visitor's
    var seconds = new Date().getSeconds();
  // Add a leading zero to seconds value
    $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
},1000);
  
setInterval( function() {
  // Create a newDate() object and extract the minutes of the current time on the visitor's
    var minutes = new Date().getMinutes();
  // Add a leading zero to the minutes value
    $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
},1000);
  
setInterval( function() {
  // Create a newDate() object and extract the hours of the current time on the visitor's
    var hours = new Date().getHours();
  // Add a leading zero to the hours value
    $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
}, 1000); 
});*/