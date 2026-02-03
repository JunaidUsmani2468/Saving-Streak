/*
----------------------------------
DAY 24 PROBLEM: COUNT SUBARRAY SUM = TARGET
----------------------------------

Given an array of integers:

*/

const nums = [1, 2, 3, 1, 1, 1, 2, 3];
const target = 3;

/*
TASK:
1. Find how many CONTIGUOUS subarrays have a sum equal to `target`
2. Subarray length can be >= 1
3. Store the count in a variable called `count`
4. Log the result

RULES:
1. Do NOT use built-in helpers (map, filter, reduce)
2. Use only loops and conditions
3. Subarrays must be contiguous
4. Handle overlapping subarrays correctly

Expected Output:
4

Explanation:
Subarrays with sum = 3 are:
[1,2], [3], [1,1,1], [3]

*/

// 👇 Write your solution below 👇

let count = 0;

for (let i = 0; i < nums.length; i++) {

    if (nums[i] === target) {
        count++;
    } else if (nums[i] + nums[i + 1] === target) {
        count++;
        i += 1;
    } else if (nums[i] + nums[i + 1] + nums[i + 2] === target) {
        count++
        i += 2;
    }
}

console.log(count);