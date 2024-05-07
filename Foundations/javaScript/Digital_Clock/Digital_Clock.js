setInterval(Clock,5);
function Clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ele = document.getElementsByTagName('div');
    let am_pm = "AM";
    if(hours >= 12){
        if(hours>12){
            hours = hours - 12;
        }
        am_pm = "PM";
    }
    else if(hours == 0){
        hours = 0;
    }
    ele[0].innerHTML = hours + ":"+minutes+":"+seconds+" "+am_pm;
}
