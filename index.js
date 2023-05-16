const coundownTimer = document.querySelector("#countdown")

function countdown(endDate) {
    let timer, days, hours, minutes, seconds;

    endDate = new Date(endDate)

    endDate = endDate.getTime()

    if (isNaN(endDate)) return;


    timer = setInterval(calculate, 1000);

    function calculate() {
        let startDate = new Date()
        startDate = new Date(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate(), startDate.getUTCHours(), startDate.getUTCMinutes(), startDate.getUTCSeconds());
        let remainingTime = parseInt((endDate - startDate.getTime()) / 1000)

        if (remainingTime >= 0) {
            days = parseInt(remainingTime / 86400);
            remainingTime = (remainingTime % 86400);
            hours = parseInt(remainingTime / 3600);
            remainingTime = (remainingTime % 3600);
            minutes = parseInt(remainingTime / 60);
            remainingTime = (remainingTime % 60);
            seconds = parseInt(remainingTime);

            document.getElementById("days").innerHTML = parseInt(days, 10);
            document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
            document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        } else return;
    }
}
countdown('05/17/2023 10:00:00 PM');
