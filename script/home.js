"use strict";

window.addEventListener("load", prepare);

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

let preformatted;

let timer;

let counter;
let count = 5;
let p;

let span;
let note = `Ctrl + left mouse click to stop/start`;

function prepare(event) {
    preformatted = document.querySelectorAll('pre');
    p = document.querySelector('p');
    span = document.querySelector('span');

    p.innerText = count;
    span.innerText = note;

    counter = window.setInterval(countdown, 1000);

    timer = window.setInterval(loopcolors, 5000);

    preformatted[0].classList.toggle('black-background');
    preformatted[1].classList.toggle('black-background');

    console.log('prepared');
}

function countdown() {
    // return;
    count--;
    p.innerText = count;
    if (count == 0) {
        // counter = window.clearInterval(counter);
        // p.style.display = 'none';
        p.classList.add('minimize');

        count = 5;
    }
}

function loopcolors() {

    // console.log('.');

    let randomhue = getRandomIntInclusive(0, 360);
    // full saturation ,best lighting with 50%
    let color1 = `hsl(${randomhue} ,100% ,50%)`;

    // mid saturation ,best lighting
    let color2 = `hsl(${randomhue} ,50%  ,50%)`;

    // full saturation ,with more light ,simply lighter color ,pastel colors
    let color3 = `hsl(${randomhue} ,100% ,87.5%)`;

    // mid saturation ,with more light
    let color4 = `hsl(${randomhue} ,50%  ,87.5%)`;

    // console.log(`random colors are : ${color1} ,${color2}`)
    preformatted[0].style.backgroundColor = color1;
    preformatted[1].style.backgroundColor = color2;

    preformatted[2].style.backgroundColor = color3;
    preformatted[3].style.backgroundColor = color4;

    let text = `pure color\nclosest to ${findClosestBoundaryInSet(randomhue, colorBoundaries)}\nfull saturation (100%)\nbest lighting (50%)\n${color1}`;
    preformatted[0].innerText = text;

    text = `\n\nmid saturation (50%)\nbest lighting (50%)\n${color2}`;
    preformatted[1].innerText = text;

    text = `\n\nfull saturation (100%)\nmore lighting (87.5%)\n${color3}`;
    preformatted[2].innerText = text;

    text = `\n\nmid saturation (50%)\nmore lighting (87.5%)\n${color4}`;
    preformatted[3].innerText = text;



}

function toggleTimer() {

    if (timer) {
        timer = window.clearInterval(timer);
        span.innerText = note + ' : stopped';

        counter = window.clearInterval(counter);

        // console.log('timer cleared');
    } else {
        timer = window.setInterval(loopcolors, 5000);
        span.innerText = note + ' : started';

        count = 5;
        counter = window.setInterval(countdown ,1000);
        // console.log('timer resumed');
    }
}

document.addEventListener('click', function (event) {
    if (event.ctrlKey) {
        // console.log('Mouse clicked with Ctrl key down!');
        // Your code here to handle the Ctrl-click event
        toggleTimer();
    } else {
        // console.log('Mouse clicked without Ctrl key.');
    }
});


console.log("started");


// window.addEventListener("keypress", write);

// function write(event) {
//     console.log(event);
//     console.log(event.key);

//     let key;
//     if (event.key === 'Enter') {
//         key = '\n';
//     } else {
//         key = event.key;
//     }
//     preformatted[0].innerText += key;
// }

// example for the boundaries (color degrees)
// مثال على مجموعة الحدود التي ذكرتها (درجات الألوان)
const colorBoundaries = [0     ,60       ,120      ,180     ,240     ,300        ,360]; // أضفنا 360 لأنها تكافئ 0 في عجلة الألوان
const colorNames      = ['Red' ,'Yellow' ,'Green'  ,'Cyan'  ,'Blue'  ,'Magenta'  ,'Red'];

function findClosestBoundaryInSet(value, boundaries) {
  // make sure the boundaries are not empty
  // التحقق من أن مجموعة الحدود ليست فارغة
  if (!Array.isArray(boundaries) || boundaries.length === 0) {
    throw new Error("The 'boundaries' parameter must be a non-empty array of numbers.");
  }

  // assume the first is closest
  let closestBoundary = boundaries[0]; // نبدأ بافتراض أن أول حد هو الأقرب
  // calculate the difference
  let minDifference = Math.abs(value - boundaries[0]); // ونحسب الفرق المطلق الأولي

  // go through each boundary and calculate the difference
  // نمر على كل حد في المجموعة لمقارنته بالقيمة
  for (let i = 1; i < boundaries.length; i++) {
    const currentBoundary = boundaries[i];
    const currentDifference = Math.abs(value - currentBoundary);

    // if a closer/lesser difference is found, update minimum difference  and closest boundary
    // إذا وجدنا فرقاً أصغر، نحدّث أقرب حد وأصغر فرق
    if (currentDifference < minDifference) {
      minDifference = currentDifference;
      closestBoundary = currentBoundary;
      
      // in case two boundaries are equal in difference choose the lower one, the first one
      // إذا أردنا أن يكون الأقرب هو الأقل دائماً في حالة التساوي
    } else if (currentDifference === minDifference && currentBoundary < closestBoundary) {
      closestBoundary = currentBoundary;
    }
  }

  return colorNames[colorBoundaries.indexOf(closestBoundary)] + ` (${closestBoundary})`;
}