const hoursBox = document.querySelector(".hours");
const minBox = document.querySelector(".min");
const secBox = document.querySelector(".sec");
const dayBox = document.querySelector("#day");
const fullDate = document.querySelector("#fullDate");

        setInterval(async () => {
                const date = new Date();
                let hours = date.getHours();
                let min = date.getMinutes();
                let sec = date.getSeconds();
                let day = date.getDay();
                let year = date.getFullYear();
                let month = date.getMonth();
                let todayDate = date.getDate();
                let daysList = [
                        'Sunday',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday'
                      ];
                let monthsList = [
                        "Jan",
                        "Feb", 
                        "Mar", 
                        "Apr", 
                        "May", 
                        "Jun", 
                        "Jul",
                        "Aug",
                        "Sep", 
                        "Oct", 
                        "Nov", 
                        "Dec"
                    ];
                
        
        
        
                if(todayDate < 10){
                        todayDate = `0${todayDate}`
                }
                if(hours < 10){
                        hours = `0${hours}`
                }
                if(min < 10){
                        min = `0${min}`
                }
                if(sec < 10){
                        sec = `0${sec}`;
                }
        
                hoursBox.innerHTML = hours;
                minBox.innerHTML = min;
                secBox.innerHTML = sec;
                dayBox.innerHTML = daysList[day];
                fullDate.innerHTML = `${todayDate} ${monthsList[month]} ${year}`; 
        }, 1000);

