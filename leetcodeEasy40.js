"use strict";
// 1. Two Sum (1)
// let nums: Array<number> = [2, 7, 11, 15],
//   target: number = 9;
// function twoSum(nums: number[], target: number): number[] {
//   let answer: number[] = [];
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         answer.push(i, j);
//       }
//     }
//   }
//   return answer;
// }
// console.log(twoSum(nums, target));
// 20. Valid Parentheses (2)
// let str: string = "()[]{}";
// function isValid(str: string): boolean {
//   let stack: string[] = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
//       stack.push(str[i]);
//     } else {
//       const top = stack.pop();
//       if (
//         (str[i] === ")" && top !== "(") ||
//         (str[i] === "}" && top !== "{") ||
//         (str[i] === "]" && top !== "[")
//       ) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }
// console.log(isValid(str));
// 27. Remove Element (3)
// let nums: number[] = [0, 1, 2, 2, 3, 0, 4, 2],
//   val: number = 2;
// function removeElement(nums: number[], val: number) {
//   let index: number = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[index] = nums[i];
//       index++;
//     }
//   }
//   return index;
// }
// console.log(removeElement(nums, val));
// 28. Find the Index of the First Occurrence in a String (4)
// let haystack: string = "sadbutsad",
//   needle: string = "sad";
// function strStr(haystack: string, needle: string): number {
//     let index: number = -1;
//     let matchLoc = 0;
//     for (let i = 0; i < haystack.length; i++) {
//       if (haystack[i] == needle[matchLoc]) {
//         matchLoc++;
//         if (matchLoc == needle.length) {
//           index = i - matchLoc + 1;
//           break;
//         }
//       } else {
//         i -= matchLoc;
//         matchLoc = 0;
//       }
//     }
//     return index;
// }
// console.log(strStr(haystack, needle));
// 58. Length of Last Word (5);
// const str: string = "luffy is still joyboy";
// function lengthOfLastWord(s: string): number {
//   s = s.trim();
//   let list: string[] = s.split(" ");
//   let answer: string = list[list.length - 1];
//   return answer.length;
// }
// console.log(lengthOfLastWord(str));
// 67. Add Binary (6);
// let a = "1010",
//   b = "1011";
// function addBinary(a: string, b: string) {
//   let result = parseInt(a, 2) + parseInt(b, 2);
//   return result.toString(2);
// }
// console.log(addBinary(a, b));
// 69. Sqrt(x) (7)
// const x: number = 8;
// function mySqrt(x: number): number {
//   let low = 0;
//   let high = x;
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     const square = mid * mid;
//     if (square <= x) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return high;
// }
// console.log(mySqrt(x));
// const n = 3;
// let answ = 0;
// function climbStairs(n: number): number {
//   if (n == 2) {
//     return n;
//   }
//   while (n >= 2) {
//     climbStairs(n - 1);
//     answ++;
//     return answ;
//   }
//   return answ;
// }
// console.log(climbStairs(n));
// 202. Happy Number (8)
// const n: number = 31;
// function isHappy(n: number): boolean {
//   if (n == 1) return true;
//   while (n > 6) {
//     let myArr: number[] = [];
//     for (let num of n.toString()) {
//       myArr.push(+num);
//     }
//     n = myArr.reduce((sum, current) => sum + current ** 2, 0);
//     if (n == 1) {
//       return true;
//     } else if (n > 1 && n < 6) {
//       return false;
//     }
//   }
//   return false;
// }
// console.log(isHappy(n));
// 191. Number of 1 Bits (9)
// const n: number = 11;
// function hammingWeight(n: number): number {
//   let count: number = 0;
//   const binN = n.toString(2);
//   for (let num of binN) {
//     if (+num === 1) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(hammingWeight(n));
// 168. Excel Sheet Column Title
const columnNumber = 722;
function convertToTitle(columnNumber) {
    let res = "";
    let rest;
    while (columnNumber > 0) {
        rest = columnNumber % 26 || 26;
        res = String.fromCharCode(rest + 64) + res;
        columnNumber = (columnNumber - rest) / 26;
    }
    return res;
}
console.log(convertToTitle(columnNumber));
