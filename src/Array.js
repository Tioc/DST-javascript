/* 创建数组 */
let arr = [];
let arr = [1, "xxx", true, null];
let arr = new Array();
let arr = new Array(10);
let arr = new Array(1, 2, 3, 4, 5);

/* 判断对象是否是数组 */
Array.isArray(arr);

/* 读写数组 */
arr[5] = "新增";
//console.log(arr[5]);

/* 由字符串生成数组 */
let sentence = "the quick brown fox jumped over the lazy dog";
let words = sentence.split(" ");
//console.log(words);

/* 查找元素  */
words.indexOf("fox");
//console.log(words.indexOf("aaa"));

/* 数组的字符串表示 */
let names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
let namestr = names.join();
//console.log(namestr);

/* 由已有数组创建新数组 */
let arr1 = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
let arr2 = ["Raymond", "Cynthia", "Bryan"];
let arr3 = arr1.concat(arr2);
//console.log(arr3);

let arr4 = arr3.splice(3, 3);
//console.log(arr4);

/* 为数组添加元素  */
let nums = [1, 2, 3, 4, 5];
nums.push(6);
nums.push(7, 8, 9);
nums.unshift(0);
nums.unshift(3, 2, 1);
//console.log(nums);

/* 从数组中删除元素  */
let nums = [1, 2, 3, 4, 5, 9];
let a = nums.pop();
let b = nums.shift();
//console.log(nums, a, b);

/* 从数组中间位置添加和删除元素 */
let nums = [1, 2, 3, 7, 8, 9];
let newElements = [4, 5, 6];
nums.splice(3, 0, newElements);
nums.splice(3, 0, 4, 5, 6);
//console.log(nums);

let nums = [1, 2, 3, 100, 200, 300, 400, 4, 5];
nums.splice(3, 4);
//console.log(nums);

/* 为数组排序 */
let nums = [1, 2, 3, 4, 5];
nums.reverse();
//console.log(nums);

let names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"];
names.sort();

//console.log(names);

function compare(num1, num2) {
    return num1 - num2;
}

let nums = [3, 1, 2, 100, 4, 200];
nums.sort(compare);
//console.log(nums);

/* 不生成新数组的迭代器方法 */
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.forEach(function (num) {
    //console.log(num*num);
});


function isEven(num) {
    return num % 2 == 0;
}

function isOdd(num) {
    return num % 2 != 0;
}

let nums = [2, 4, 6, 8, 10];
let even = nums.every(isEven);
if (even) {
    //console.log("all numbers are even");
} else {
    //console.log("not all numbers are even");
}

let nums = [1, 3, 5, 7, 9];
let someEven = nums.some(isEven);
if (someEven) {
    //console.log("some numbers are even");
} else {
    //console.log("no numbers are even");
}


function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = nums.reduce(add);

//console.log(sum);


function concat(accumulatedString, item) {
    return accumulatedString + item;
}

let words = ["the ", "quick ", "brown ", "fox "];
let sentence = words.reduce(concat);
//console.log(sentence);
let sentence = words.reduceRight(concat);
//console.log(sentence);

/* 生成新数组的迭代器方法 */
function curve(grade) {
    return grade += 5;
}

let grades = [77, 65, 81, 92, 83];
let newgrades = grades.map(curve);

//console.log(newgrades);

function first(word) {
    return word[0];
}

let words = ["for", "your", "information"];
let acronym = words.map(first);
//console.log(acronym);


let nums = [];
for (let i = 0; i < 20; ++i) {
    nums[i] = i + 1;
}
let evens = nums.filter(isEven);
//console.log(`evens: ${evens}`);
let odds = nums.filter(isOdd);
//console.log(`odds: ${odds}`);

/* 二维和多维数组 */
Array.matrix = function (numrows, numcols, initial) {
    let arr = [];
    for (let i = 0; i < numrows; ++i) {
        let columns = [];
        for (let j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}