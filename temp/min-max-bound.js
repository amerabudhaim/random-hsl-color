function findClosestBound(value, minBound, maxBound) {
  // التحقق من صحة المدخلات: تأكد أن minBound أصغر من maxBound
  if (minBound >= maxBound) {
    throw new Error("minBound must be less than maxBound.");
  }

  // حساب نقطة المنتصف بين الحدين
  const midpoint = (minBound + maxBound) / 2;

  // المقارنة لتحديد الأقرب
  if (value <= midpoint) {
    return minBound; // أقرب للحد الأدنى
  } else {
    return maxBound; // أقرب للحد الأعلى
  }
}

// أمثلة:

// الحالة 1: القيمة أقرب للحد الأدنى
let value1 = 5;
let minBound1 = 0;
let maxBound1 = 10;
// نقطة المنتصف = (0 + 10) / 2 = 5
// 5 <= 5 (صحيح) => أقرب للحد الأدنى (0)
console.log(`Value ${value1} is closest to: ${findClosestBound(value1, minBound1, maxBound1)} (expected: ${minBound1})`); // 0

// الحالة 2: القيمة أقرب للحد الأعلى
let value2 = 7;
let minBound2 = 0;
let maxBound2 = 10;
// نقطة المنتصف = (0 + 10) / 2 = 5
// 7 <= 5 (خطأ) => أقرب للحد الأعلى (10)
console.log(`Value ${value2} is closest to: ${findClosestBound(value2, minBound2, maxBound2)} (expected: ${maxBound2})`); // 10

// الحالة 3: القيمة أقل من الحد الأدنى (ستظل أقرب للحد الأدنى بناءً على المنطق)
let value3 = -2;
let minBound3 = 0;
let maxBound3 = 10;
// نقطة المنتصف = (0 + 10) / 2 = 5
// -2 <= 5 (صحيح) => أقرب للحد الأدنى (0)
console.log(`Value ${value3} is closest to: ${findClosestBound(value3, minBound3, maxBound3)} (expected: ${minBound3})`); // 0

// الحالة 4: القيمة أكبر من الحد الأعلى (ستظل أقرب للحد الأعلى بناءً على المنطق)
let value4 = 12;
let minBound4 = 0;
let maxBound4 = 10;
// نقطة المنتصف = (0 + 10) / 2 = 5
// 12 <= 5 (خطأ) => أقرب للحد الأعلى (10)
console.log(`Value ${value4} is closest to: ${findClosestBound(value4, minBound4, maxBound4)} (expected: ${maxBound4})`); // 10

// مثال بقيم عشرية
let value5 = 3.2;
let minBound5 = 1.0;
let maxBound5 = 5.0;
// نقطة المنتصف = (1.0 + 5.0) / 2 = 3.0
// 3.2 <= 3.0 (خطأ) => أقرب للحد الأعلى (5.0)
console.log(`Value ${value5} is closest to: ${findClosestBound(value5, minBound5, maxBound5)} (expected: ${maxBound5})`); // 5.0

// مثال بقيم عشرية أخرى
let value6 = 2.8;
let minBound6 = 1.0;
let maxBound6 = 5.0;
// نقطة المنتصف = (1.0 + 5.0) / 2 = 3.0
// 2.8 <= 3.0 (صحيح) => أقرب للحد الأدنى (1.0)
console.log(`Value ${value6} is closest to: ${findClosestBound(value6, minBound6, maxBound6)} (expected: ${minBound6})`); // 1.0