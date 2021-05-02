function showDate() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var date = new Date();
    var dayWeek = days[date.getDay()];
    var month = months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();

    var date = dayWeek + "," + month + "," + day + "," + year;
    document.getElementById("shock-clock").innerText = today;

}
setInterval(showDate, 1000);
showDate();
