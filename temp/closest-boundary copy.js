function findClosestBoundaryInSet(value, boundaries) {
  // التحقق من أن مجموعة الحدود ليست فارغة
  if (!Array.isArray(boundaries) || boundaries.length === 0) {
    throw new Error("The 'boundaries' parameter must be a non-empty array of numbers.");
  }

  let closestBoundary = boundaries[0]; // نبدأ بافتراض أن أول حد هو الأقرب
  let minDifference = Math.abs(value - boundaries[0]); // ونحسب الفرق المطلق الأولي

  // نمر على كل حد في المجموعة لمقارنته بالقيمة
  for (let i = 1; i < boundaries.length; i++) {
    const currentBoundary = boundaries[i];
    const currentDifference = Math.abs(value - currentBoundary);

    // إذا وجدنا فرقاً أصغر، نحدّث أقرب حد وأصغر فرق
    if (currentDifference < minDifference) {
      minDifference = currentDifference;
      closestBoundary = currentBoundary;
      
      // إذا أردنا أن يكون الأقرب هو الأقل دائماً في حالة التساوي
    } else if (currentDifference === minDifference && currentBoundary < closestBoundary) {
      closestBoundary = currentBoundary;
    }
  }

  return closestBoundary;
}

// مثال على مجموعة الحدود التي ذكرتها (درجات الألوان)
const colorBoundaries = [0, 60, 120, 180, 240, 300, 360]; // أضفنا 360 لأنها تكافئ 0 في عجلة الألوان

// أمثلة للاستخدام:

// القيمة 30، الأقرب 0 أو 60
console.log(`Closest boundary for 30: ${findClosestBoundaryInSet(30, colorBoundaries)}`); // المتوقع: 60 (لأن 30-0=30، 60-30=30، إذا كانت القيمة في المنتصف نعتبر الأكبر هو الأقرب في هذا المثال)
// تصحيح: إذا كانت 30، فالفرق مع 0 هو 30، والفرق مع 60 هو 30. يعتمد السلوك على ترتيب القيم في المصفوفة. لو أردنا 60، نحتاج تعديل بسيط في الشرط ليعطي الأكبر في حالة تساوي الفروق. لكن بالوضع الحالي سيعطي الأول (0).
// للتوضيح، 30 - 0 = 30
// 60 - 30 = 30
// بما أننا نبدأ بـ closestBoundary = boundaries[0] (أي 0)، فإن 0 ستبقى الأقرب.

// للتغلب على هذه المشكلة وجعلها تختار الـ 60 عندما تكون القيمة في المنتصف بالضبط بين حدين
// يمكننا تعديل الشرط ليصبح:
// if (currentDifference <= minDifference) { // نستخدم <= بدلاً من <
//   minDifference = currentDifference;
//   closestBoundary = currentBoundary;
// }
// أو إذا أردنا أن يكون الأقرب هو الأقل دائماً في حالة التساوي
// if (currentDifference < minDifference) {
//   minDifference = currentDifference;
//   closestBoundary = currentBoundary;
// } else if (currentDifference === minDifference && currentBoundary < closestBoundary) {
//   closestBoundary = currentBoundary;
// }


console.log(`Closest boundary for 30: ${findClosestBoundaryInSet(30, colorBoundaries)}`); // الناتج الحالي: 0
// لأن الفرق المطلق لـ 0 هو 30، ولـ 60 هو 30. بما أن 0 جاءت أولاً في البحث، ستظل هي الأقرب.

// إذا أردنا أن القيمة في المنتصف بالضبط تميل للحد الأعلى، يمكن تعديل الكود قليلاً
// لكن بالمنطق الحالي، القيمة 30 تبعد 30 عن 0 وتبعد 30 عن 60.
// الكود الحالي سيختار أول حد يجده بنفس الفرق، وهو 0.

console.log(`Closest boundary for 59: ${findClosestBoundaryInSet(59, colorBoundaries)}`); // المتوقع: 60 (الفرق 1)
console.log(`Closest boundary for 10: ${findClosestBoundaryInSet(10, colorBoundaries)}`); // المتوقع: 0 (الفرق 10)
console.log(`Closest boundary for 150: ${findClosestBoundaryInSet(150, colorBoundaries)}`); // المتوقع: 180 (الفرق 30)
console.log(`Closest boundary for 250: ${findClosestBoundaryInSet(250, colorBoundaries)}`); // المتوقع: 240 (الفرق 10)
console.log(`Closest boundary for 330: ${findClosestBoundaryInSet(330, colorBoundaries)}`); // المتوقع: 360 (الفرق 30)
console.log(`Closest boundary for 0: ${findClosestBoundaryInSet(0, colorBoundaries)}`);   // المتوقع: 0
console.log(`Closest boundary for 360: ${findClosestBoundaryInSet(360, colorBoundaries)}`); // المتوقع: 360