"use strict";

window.addEventListener("load", prepare);

function prepare(event) {

    colortabs = document.querySelectorAll('#palette>pre');
    counter   = document.querySelector('#counter');
    message   = document.querySelector('#message');

    counter.innerText = 5;

    message.innerText = note;

    timercounter = window.setInterval(countdown  ,1000);

    timercolors  = window.setInterval(loopcolors ,5000);

    console.log('prepared');
}

function countdown() {
    // console.log('countdown');

    count--;

    counter.innerText = count;

    if (count == 0) {

        counter.classList.add('minimize');

        count = 5;
    }
}

function loopcolors() {
    // console.log('loopcolors');

    let randomhue = getRandomIntInclusive(0, 360);

    // full saturation ,best lighting with 50%
    let color1 = `hsl(${randomhue} ,100% ,50%)`;

    // mid saturation ,best lighting
    let color2 = `hsl(${randomhue} ,50%  ,50%)`;

    // full saturation ,with more light ,simply lighter color ,pastel colors
    let color3 = `hsl(${randomhue} ,100% ,87.5%)`;

    // mid saturation ,with more light
    let color4 = `hsl(${randomhue} ,50%  ,87.5%)`;

    colortabs[0].style.backgroundColor = color1;
    colortabs[1].style.backgroundColor = color2;
    colortabs[2].style.backgroundColor = color3;
    colortabs[3].style.backgroundColor = color4;

    
    let text;
    text  = `pure ${randomhue} color\n`;

    //if not one of the basic 6 colors (7 color degrees)
    if (!colors.get(randomhue)) {

        let closestcolor = findClosestDegree(randomhue, colordegrees);

        let texttmp = colors.get(closestcolor) + ` (h:${closestcolor})`;

        text  += `closer to ${texttmp}`;
    }
    text += `\n\nfull saturation (100%)\nbest lighting (50%)\n${color1}`;
    colortabs[0].innerText = text;

    text = `\n\n\nmid saturation (50%)\nbest lighting (50%)\n${color2}`;
    colortabs[1].innerText = text;

    text = `\n\n\nfull saturation (100%)\nmore lighting (87.5%)\n${color3}`;
    colortabs[2].innerText = text;

    text = `\n\n\nmid saturation (50%)\nmore lighting (87.5%)\n${color4}`;
    colortabs[3].innerText = text;

}

console.log('started');