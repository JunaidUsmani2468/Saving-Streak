/*
----------------------------------
DAY 29 PROBLEM: COUNT PEAK ELEMENTS
----------------------------------

Given an array of numbers:
*/

const nums = [1, 3, 2, 4, 1, 5, 3, 2];

/*
TASK:
1. A "peak element" is a number that is GREATER than its immediate neighbors
2. Do NOT consider the first and last elements as peaks
3. Count how many peak elements exist in the array
4. Store the count in a variable called `peakCount`
5. Log the result

RULES:
1. Do NOT use built-in helpers (map, filter, reduce)
2. Use only loops and conditions
3. Compare only immediate neighbors

Expected Output:
3

Explanation:
Peaks are:
3 (index 1), 4 (index 3), 5 (index 5)
*/

// 👉 Write your solution below 👇

let peakCount = 0;

for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
        peakCount++;
    }
}

console.log(peakCount);