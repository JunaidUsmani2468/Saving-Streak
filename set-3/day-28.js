/*
----------------------------------
DAY 28 PROBLEM: COUNT STRICTLY DECREASING STREAK
----------------------------------

Given an array of numbers:
*/

const nums = [9, 7, 5, 5, 4, 3, 2, 8, 6, 4];

/*
TASK:
1. Find the length of the LONGEST contiguous strictly decreasing subarray
2. Strictly decreasing means: nums[i] < nums[i - 1]
3. The streak breaks immediately when the condition fails
4. Store the result in a variable called `maxStreak`
5. Log the result

RULES:
1. Do NOT use built-in helpers (map, filter, reduce, Math.max)
2. Use only loops and conditions
3. Handle resets correctly

Expected Output: 4

Explanation:
Longest decreasing streak is:
[5, 4, 3, 2] → length = 4
(equal values like 5,5 break the streak)
*/

// 👉 Write your solution below 👇

let maxStreak = 1;
let currentStreak = 1;

for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
        currentStreak++;
    } else {
        currentStreak = 1;
    }

    if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
    }
}

console.log(maxStreak);