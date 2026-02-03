/*
----------------------------------
DAY 26 PROBLEM: LONGEST SAME-NUMBER STREAK
----------------------------------

Given an array of numbers:

*/

const nums = [2, 2, 2, 1, 1, 3, 3, 3, 3, 2, 2];

/*
TASK:
1. Find the length of the LONGEST contiguous streak of the SAME number
2. The streak must be continuous (no skipping)
3. Store the result in a variable called `maxStreak`
4. Log the result

RULES:
1. Do NOT use built-in helpers (map, filter, reduce, Math.max)
2. Use only loops and conditions
3. Handle resets correctly

Expected Output:
4

Explanation:
The longest streak is:
[3, 3, 3, 3] → length = 4
*/

// 👇 Write your solution below 👇

let maxStreak = 1;
let currentStreak = 1;

for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
        currentStreak++;

    } else {
        
        if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
        }

        currentStreak = 1;
    }
}

console.log(maxStreak);