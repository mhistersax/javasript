function displaytime(){
    var digitalTime = new Date();
    var hours = digitalTime.getHours();
    var min = digitalTime.getMinutes();
    var sec = digitalTime.getSeconds();
    var session = document.getElementById("session");
    var day1 = digitalTime.getDay();
    var month = digitalTime.getMonth();
    var year = digitalTime.getFullYear();
    var greating;
    
     if (hours > 12) {
        greating = 'Good evening';
        session.innerHTML = 'PM';
     }
     else{
        greating = 'Good morning';
        session.innerHTML = 'AM';
     }
     if (hours > 12) {
        hours = hours - 12;
     }
     
     document.getElementById("Greaatings").innerHTML = greating;
     document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Minutes").innerHTML = min;
    document.getElementById("secounds").innerHTML = sec;
}
setInterval(displaytime, 10);

