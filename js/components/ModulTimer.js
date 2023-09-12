let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function ModulTimer(hoursCount, minutesCount, secondsCount) {
    const timerInterval = setInterval(function() {
        secondsCount--;

        if (secondsCount < 0) {
            secondsCount = 59;
            minutesCount--;
            if (minutesCount < 0) {
                minutesCount = 59;
                hoursCount--;
            }
        }

        if (hoursCount == 0 && minutesCount == 0 && secondsCount == 0) {
            clearInterval(timerInterval)
        }

        if (minutesCount > 60) {
            console.error("TimerError: Проверьте атрибуты функции !");
            minutes.childNodes[1].innerText
            clearInterval(timerInterval);
        }


        hours.childNodes[1].innerText = `${hoursCount}`;
        minutes.childNodes[1].innerText = `${minutesCount}`;
        seconds.childNodes[1].innerText = `${secondsCount}`;
    }, 1000);
}

export {ModulTimer}