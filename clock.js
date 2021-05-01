function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session = "AM";

    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }
    hour = (hour < 10) ? "O" + hour : hour;
    min = (min < 10) ? "O" + min : min;
    sec = (sec < 10) ? "O" + sec : sec;
    var time = hour + ":" + min + ":" + sec + " " + session;

    setTimeout(showTime, 1000);
    showTime();
}

