const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runTheClock()
{
    var date = new Date();
    console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour:" + hr + " Minute: " + min + " Second: " + sec);
    
    let hrPosition = hr*360/12 + (min*(360/60)/12); //in order to correctly position the hour hand, we need to multiply by the minutes degree divided by how many minutes in 12 hours
    let minPosition = (min*360/60) + (sec*(360/60)/60); //in order to get the clock to increment by 1 each minute, we need to calculate the degree.
    let secPosition = sec*360/60; //60 seconds in a minute, 360deg covered in a minute
    
    
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);
