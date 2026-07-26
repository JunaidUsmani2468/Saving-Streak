/*
----------------------------------
DAY 23 PROBLEM: LONGEST INCREASING STREAK
----------------------------------

Given an array of numbers:

*/
const nums = [2, 3, 5, 1, 4, 6, 7, 0, 2, 5, 4];

/*
TASK:
1. Find the length of the LONGEST CONTIGUOUS increasing subarray
2. Increasing means: nums[i] > nums[i - 1]
3. The streak breaks as soon as the order fails
4. Store the result in a variable called `maxStreak`
5. Log the result

RULES:
1. Do NOT use built-in helpers (map, filter, reduce, Math.max)
2. Use only loops and conditions
3. Handle resets correctly

Expected Output:
4

Explanation:
Longest increasing streak is:
[1, 4, 6, 7] → length = 4

Write your solution below 👇
*/

/*----------------------------/
Solution: Without Built-ins  /
---------------------------*/

let maxStreak = 1;
let currentStreak = 1;

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > nums[i - 1]) {
    currentStreak++;
  } else {
    currentStreak = 1;
  }

  if (currentStreak > maxStreak) {
    maxStreak = currentStreak;
  }
}

console.log(maxStreak);

/*----------------------------/
Solution: With Built-ins  $  /
---------------------------*/

const maxStreak$ = nums.reduce(
  (state, num, idx) => {
    if (idx > 0 && num > nums[idx - 1]) {
      state.currentStreak++;
    } else {
      state.currentStreak = 1;
    }

    if (state.currentStreak > state.maxStreak) {
      state.maxStreak = state.currentStreak;
    }

    return state;
  },
  { currentStreak: 1, maxStreak: 1 },
).maxStreak;
console.log(maxStreak$);
