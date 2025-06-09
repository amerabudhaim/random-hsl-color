"use strict";

document.addEventListener('click', function (event) {
    if (event.ctrlKey) {
        // console.log('Mouse clicked with Ctrl key down!');
        // Your code here to handle the Ctrl-click event
        toggleTimer();
    } else {
        // console.log('Mouse clicked without Ctrl key.');
    }
});

function toggleTimer() {

    if (timercolors) {
        timercolors = window.clearInterval(timercolors);
        message.innerText = note + ' : stopped';

        timercounter = window.clearInterval(timercounter);

        // console.log('timer cleared');
    } else {
        timercolors = window.setInterval(loopcolors, 5000);
        message.innerText = note + ' : started';

        count = 5;
        timercounter = window.setInterval(countdown ,1000);
        // console.log('timer resumed');
    }
}
