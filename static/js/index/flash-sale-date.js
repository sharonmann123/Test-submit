var currentDate = new Date();
// Get the current day and month with leading zeroes
var day = ("0" + currentDate.getDate()).slice(-2);
var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
// Replace the text in the HTML
var todaySpan = document.getElementById("flash-sale-today");
todaySpan.textContent = "Đang diễn ra ngày " + day + "/" + month;
// Get the next day date
var nextDay = new Date();
nextDay.setDate(currentDate.getDate() + 1);
var nextDayFormatted = ("0" + nextDay.getDate()).slice(-2) + "/" + ("0" + (nextDay.getMonth() + 1)).slice(-2);
// Replace the text in the HTML
var nextDaySpan = document.getElementById("flash-sale-nextday");
nextDaySpan.textContent = "Sắp diễn ra ngày " + nextDayFormatted;

// Set the end date of the countdown
var endDate = new Date('2023-10-10T23:59:59');
setInterval(function() {
    // Get the current date and time
    var currentDate = new Date();
    // Calculate the remaining time
    var remainingTime = endDate - currentDate;
    // Calculate the days, hours, minutes and seconds
    // var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    // Update the countdown elements
    // document.getElementById("countdown-days").textContent = days;
    if (hours<10) {
        document.getElementById("countdown-hours").textContent = "0" + hours;
    } else {
        document.getElementById("countdown-hours").textContent = hours;
    }
    if (minutes<10) {
        document.getElementById("countdown-minutes").textContent = "0" + minutes;
    } else {
        document.getElementById("countdown-minutes").textContent = minutes;
    }
    if (seconds<10) {
        document.getElementById("countdown-seconds").textContent = "0" + seconds;
    } else {
        document.getElementById("countdown-seconds").textContent = seconds;
    }
}, 1000);