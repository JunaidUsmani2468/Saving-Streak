/*
----------------------------------
DAY 20 PROBLEM: COUNT PEAK ELEMENTS
----------------------------------

Given an array of numbers:
*/

const nums = [3, 7, 1, 9, 5, 8, 2];

/*
TASK:
1. A number is called a PEAK if it is GREATER than its immediate neighbors
2. The first and last elements CANNOT be peaks
3. Count how many peak elements are in the array
4. Store the count in a variable called `peakCount`
5. Log the result

RULES:
1. Do NOT use built-in array helpers (map, filter, reduce)
2. Use only loops and conditions
3. Handle the boundaries correctly

Expected Output: 3

Explanation:
Peaks are 7 (greater than 3 and 1), 9 (greater than 1 and 5) and 8 (greater than 5 and 2)

Write your solution below 👇
*/

/*----------------------------/
Solution: Without Built-ins  /
---------------------------*/

let peakCount = 0;

for (let i = 1; i < nums.length - 1; i++) {
    peakCount += nums[i - 1] < nums[i] && nums[i] > nums[i + 1];
}

console.log(peakCount);

/*----------------------------/
Solution: With Built-ins  $  /
---------------------------*/

// With Filter:
const peakCount$ = nums.filter(
    (num, idx, arr) => num > arr[idx - 1] && num > arr[idx + 1]
).length;

console.log(peakCount$);

// With Reduce:
const peakCount$$ = nums.reduce(
    (count, num, idx, arr) =>
        count + (num > arr[idx - 1] && num > arr[idx + 1]),
    0
);

console.log(peakCount$$);