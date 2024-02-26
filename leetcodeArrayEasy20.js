"use strict";

// 12
// 2942. Find Words Containing Character
// https://leetcode.com/problems/find-words-containing-character/description/

// let words1 = ["leet","code"];
// let words2 = ["abc","bcd","aaaa","cbc"];
// let words3 = ["abc","bcd","aaaa","cbc"];

// var findWordsContaining = function(words, x) {
//     let answ = [];
//     for (let i = 0; i < words.length; i++){
//         if (words[i].includes(x)){
//             answ.push(i);
//         }
//     }
//     return answ;
// };

// console.log(findWordsContaining(words1, "e"));
// console.log(findWordsContaining(words2, "a"));
// console.log(findWordsContaining(words3, "z"));

// 13
// 1637. Widest Vertical Area Between Two Points Containing No Points

// let points1 = [[8,7],[9,9],[7,4],[9,7]];
// let points2 = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]];

// var maxWidthOfVerticalArea = function(points) {
//     let diff = 0;
//     let arr = [];
//     for (let i = 0; i < points.length; i++){
//         arr.push(points[i][0]);
//     }
//     arr.sort((a,b) => a - b);
//     for (let j = 0; j < arr.length-1; j++){
//         if ((arr[j+1] - arr[j]) > diff){
//             diff = (arr[j+1] - arr[j]);
//         }
//     }
//     return diff;
// // };

// console.log(maxWidthOfVerticalArea(points1));
// console.log(maxWidthOfVerticalArea(points2));

// 14
// 1672. Richest Customer Wealth

// let accounts1 = [[1,2,3],[3,2,1]];
// let accounts2 = [[1,5],[7,3],[3,5]];
// var maximumWealth = function(accounts) {
//     let max = 0;
//     for (let i = 0; i < accounts.length; i++){
//         let cur = accounts[i].reduce((sum, current) => sum + current, 0)
//         if (cur > max) max = cur;
//     }
//     return max;
// };

// console.log(maximumWealth(accounts1));
// console.log(maximumWealth(accounts2));

// let myObj = {
//     name : "Marko",
//     surname : "Polo",
//     toString() {
//         return this.name;
//       }
// }
// Object.defineProperty(myObj, "name", {writable: false});
// Object.defineProperty(myObj, "toString", {enumerable: false});

// let descriptor = Object.getOwnPropertyDescriptor(myObj, "toString");

// console.log(descriptor);
// console.log(myObj.toString());
// for (let key in myObj) console.log(key);

// let myObj = {
//     name: "Marco",
//     surname: "Polo",

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     set fullName(value) {
//         [this.name, this.surname] = value.split(' ');
//     }
//   };

// let descriptor = Object.getOwnPropertyDescriptor(myObj, 'fullName');
// myObj.fullName = "Georgio Armani";
// console.log(myObj.fullName);
// console.log(myObj.name);
// console.log(descriptor);

// 15
// 2798. Number of Employees Who Met the Target

// let hours = [0,1,2,3,4], target = 2;

// var numberOfEmployeesWhoMetTarget = function(hours, target) {
//     let answ = 0;
//     for (let empl of hours) {
//         empl >= target ? answ++ : false;
//     }
//     return answ;
// };

// console.log(numberOfEmployeesWhoMetTarget(hours, target));

// 16
// 1431. Kids With the Greatest Number of Candies

// let candies = [4,2,1,1,2], extraCandies = 1;

// var kidsWithCandies = function(candies, extraCandies) {
//     let max = 0;
//     let answArray = [];
//     for (let kidHaveCandy of candies) {
//         if (kidHaveCandy > max) max = kidHaveCandy;
//     };
//     for (let kidHaveCandy of candies) {
//         if (kidHaveCandy + extraCandies >= max){
//             answArray.push(true);
//         } else answArray.push(false);
//     }
//     return answArray;
// };

// console.log(kidsWithCandies(candies, extraCandies));

// 17
// 2824. Count Pairs Whose Sum is Less than Target

// let nums = [-1,1,2,3,1], target = 2;

// var countPairs = function(nums, target) {
//     let numOfPairs = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if (i < j && nums[i] + nums[j] < target) {
//                 numOfPairs++;
//             };
//         };
//     };
//     return numOfPairs;
// };

// console.log(countPairs(nums, target));

// 18
// 2859. Sum of Values at Indices With K Set Bits

// let nums = [5, 10, 1, 5, 2];
// let k = 1;

// var sumIndicesWithKSetBits = function (nums, k) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const countOfBinary = (i.toString(2).match(/1/g) || []).length;
//     if (countOfBinary === k) {
//       count += nums[i];
//     }
//   }
//   return count;
// };

// console.log(sumIndicesWithKSetBits(nums, k));

// 19
// 1480. Running Sum of 1d Array

// let nums = [1,2,3,4];
// let answer = [];

// var runningSum = function(nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//         answer.push(sum);
//     };
//     return answer;
// };

// console.log(runningSum(nums));

// 20
// 2114. Maximum Number of Words Found in Sentences

let sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];

var mostWordsFound = function (sentences) {
  let maxNumOfWord = 0;
  for (let sentence of sentences) {
    let len = sentence.split(" ").length;
    if (len > maxNumOfWord) maxNumOfWord = len;
  }
  return maxNumOfWord;
};

console.log(mostWordsFound(sentences));
