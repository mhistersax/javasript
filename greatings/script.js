var today = new Date();
var hourNow = today.getHours();
var greating;
 if (hourNow > 18) {
    greating = 'Good afternoon';
 }
 else if(hourNow > 12){
      greating = 'Good evening';
 }
 else if(hourNow > 0){
    greating = 'Good Morning';
 }
 else{
    greating = 'Welcome'
 }
 console.log(greating);