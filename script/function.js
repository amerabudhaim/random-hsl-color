"use strict";

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

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

  return closestBoundary;
}

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
