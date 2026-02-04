/*
----------------------------------
DAY 27 PROBLEM: COUNT STABLE PAIRS
----------------------------------

Given an array of numbers:

*/

const nums = [4, 4, 2, 2, 2, 5, 5, 1, 1, 1, 1];

/*
TASK:
1. A "stable pair" means TWO CONSECUTIVE equal numbers
2. Count how many stable pairs exist in the array
3. Each pair can be used only once
4. Store the count in a variable called `pairCount`
5. Log the result

RULES:
1. Do NOT use built-in helpers (map, filter, reduce)
2. Use only loops and conditions
3. Handle index movement carefully (avoid double counting)

Expected Output: 5

Explanation:
Pairs are:
[4,4], [2,2], [5,5], [1,1], [1,1]
*/

// 👇 Write your solution below 👇

let pairCount = 0;

for (let i = 0; i < nums.length - 1; i++) {
  if (nums[i] === nums[i + 1]) {
    pairCount++;
    i++;
  }
}

console.log(pairCount);