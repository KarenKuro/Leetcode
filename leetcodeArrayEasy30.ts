// 21
// 1720. Decode XORed Array

// let encoded = [1, 2, 3];
// let first1 = 1;

// function decode(encoded: number[], first: number): number[] {
//   const n: number = encoded.length;
//   const ans: number[] = [first];
//   for (let i = 0; i < n; i++) {
//     ans.push(encoded[i] ^ ans[i]);
//   }

//   return ans;
// }
// console.log(decode(encoded, first1));

// 22
// 2574. Left and Right Sum Differences

// let nums: number[] = [10, 4, 8, 3];

// function leftRightDifference(nums: number[]): number[] {
//   let leftSum: number[] = [];
//   let rightSum: number[] = [];
//   let answer: number[] = [];
//   let accum: number = 0;
//   for (let i: number = 0; i < nums.length; i++) {
//     leftSum.push(accum);
//     accum += nums[i];
//   }
//   accum = 0;
//   for (let j: number = nums.length - 1; j >= 0; j--) {
//     rightSum.push(accum);
//     accum += nums[j];
//   }
//   rightSum.reverse();
//   for (let k: number = 0; k < leftSum.length; k++) {
//     answer.push(Math.abs(leftSum[k] - rightSum[k]));
//   }
//   return answer;
// }
// console.log(leftRightDifference(nums));

// 23
// 1389. Create Target Array in the Given Order

// let nums: number[] = [0, 1, 2, 3, 4];
// let index: number[] = [0, 1, 2, 2, 1];

// function createTargetArray(nums: number[], index: number[]): number[] {
//   let target: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     target.splice(index[i], 0, nums[i]);
//   }

//   return target;
// }
// console.log(createTargetArray(nums, index));

// 24
// 2974. Minimum Number Game

// let nums: number[] = [5, 4, 2, 3];
// function numberGame(nums: number[]): number[] {
//   let arr: number[] = [];
//   nums.sort(function (a, b) {
//     return a - b;
//   });
//   for (let i = 1; i < nums.length; i = i + 2) {
//     arr.push(nums[i]);
//     arr.push(nums[i - 1]);
//   }
//   return arr;
// }
// console.log(numberGame(nums));

// 25
// 9. Palindrome Number

// let x = 0;
// function isPalindrome(x: number): boolean {
//   let y;
//   if (x < 0) {
//     return false;
//   } else {
//     y = x.toString().split("").reverse().join("");
//   }
//   if (x === +y) {
//     return true;
//   }
//   return false;
// }

// console.log(isPalindrome(x));

// function isPalindrome(x: number): boolean {
//   let answer: boolean = false;
//   if (x < 0) {
//     return answer;
//   }
//   let str: string = x.toString();
//   let len: number = str.length;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return answer;
//     }
//   }
//   answer = true;
//   return answer;
// }
// console.log(isPalindrome(x));

// 26
// 1313. Decompress Run-Length Encoded List

// let nums: number[] = [1, 2, 3, 4];

// function decompressRLElist(nums: number[]): number[] {
//   let answer: number[] = [];
//   for (let i = 0; i < nums.length; i += 2) {
//     for (let j = 0; j < nums[i]; j++) {
//       answer.push(nums[i + 1]);
//     }
//   }
//   return answer;
// }

// console.log(decompressRLElist(nums));

// 27
// 1662. Check If Two String Arrays are Equivalent

// let word1: string[] = ["ab", "c"],
//   word2: string[] = ["a", "bc"];
// function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
//   let wordMod1: string = word1.join("");
//   let wordMod2: string = word2.join("");
//   if (wordMod1.length !== wordMod2.length) {
//     return false;
//   }
//   for (let i = 0; i < wordMod1.length; i++) {
//     if (wordMod1[i] !== wordMod2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(arrayStringsAreEqual(word1, word2));

// 28
// 1773. Count Items Matching a Rule
// let items: string[][] = [
//     ["phone", "blue", "pixel"],
//     ["computer", "silver", "lenovo"],
//     ["phone", "gold", "iphone"],
//   ],
//   ruleKey: string = "color",
//   ruleValue: string = "silver";

// function countMatches(
//   items: string[][],
//   ruleKey: string,
//   ruleValue: string
// ): number {
//   let itemtypes: string[] = ["type", "color", "name"];
//   let count: number = 0;
//   for (let i = 0; i < items.length; i++) {
//     let ruleKeyIndex: number = itemtypes.indexOf(ruleKey);
//     if (ruleValue == items[i][ruleKeyIndex]) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(countMatches(items, ruleKey, ruleValue));

// 29
// 1528. Shuffle String
// let s = "codeleet",
//   indices = [4, 5, 6, 7, 0, 2, 1, 3];
// function restoreString(s: string, indices: number[]): string {
//   let answer: string[] = Array(indices.length).fill("a");
//   for (let i = 0; i < indices.length; i++) {
//     answer[indices[i]] = s[i];
//   }
//   let fanswer: string = answer.join("");
//   return fanswer;
// }
// console.log(restoreString(s, indices));

// 30
// 1816. Truncate Sentence
let s: string = "Hello how are you Contestant",
  k: number = 4;
function truncateSentence(s: string, k: number): string {
  let answ: string = "";
  let count: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      count += 1;
    }
    if (count == k - 1) {
      answ = s.slice(0, i + 1);
    }
  }
  return answ;
}

console.log(truncateSentence(s, k));
