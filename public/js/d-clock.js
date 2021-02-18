Time();
function Time() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let $$time = setTimeout(Time, 1000);
    $("#container-1").val(`${hour} : ${min} : ${sec}`)
    let day = date.getDate();
    let month = ["January",
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
    let year = date.getFullYear();
    day = updateTime(day);
    month = updateTime(month);
    year = updateTime(year);
    
   $("#container-2").val(`${day} - ${month[date.getMonth()]} - ${year}`);
}


function updateTime(t) {
    if (t < 10) return "0" + t;
    else return t;
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
