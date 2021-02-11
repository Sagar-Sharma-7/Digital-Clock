Time();
function Time() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    var $$time = setTimeout(Time, 1000);
    document.getElementById("container-1").innerHTML = hour + " : " + min + " : " + sec;


    
    var day = date.getDate();
    var month = ["January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December"];
    var year = date.getFullYear();
    day = updateTime(day);
    month = updateTime(month);
    year = updateTime(year);
    
    document.getElementById("container-2").innerHTML = day + " - " + month[date.getMonth()] + " - " +  year ;
}


function updateTime(t) {
    if (t < 10) {
        return "0" + t;
    } else {
        return t;
    }
}


/*date();
function date(){
    var date = new Date();
    var day = date.getDate();
    var month = ["January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December"];
    var year = date.getFullYear();
    
    document.getElementById("container-2").innerHTML = day + " - " + month[date.getMonth()] + " - " +  year;
}*/