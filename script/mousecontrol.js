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
