"use strict";

let colortabs;
let counter;
let message;

let count = 5;
let note  = `Ctrl + Left Mouse Click to stop/start`; 

let timercounter;
let timercolors;

// color degrees
// مثال على مجموعة الحدود التي ذكرتها (درجات الألوان)
const colorBoundaries = [0     ,60       ,120      ,180     ,240     ,300        ,360]; // أضفنا 360 لأنها تكافئ 0 في عجلة الألوان
const colorNames      = ['Red' ,'Yellow' ,'Green'  ,'Cyan'  ,'Blue'  ,'Magenta'  ,'Red'];
