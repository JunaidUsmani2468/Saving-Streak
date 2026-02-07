/*
----------------------------------
DAY 30 PROBLEM: COUNT FREQUENCIES USING OBJECT
----------------------------------

Given an array of numbers:
*/

const nums = [1, 2, 2, 3, 1, 4, 2, 3, 1];

/*
TASK:
1. Count how many times each number appears
2. Store the result in an object called `freq`
3. Use the number as the key and count as the value
4. Log the final object

RULES:
1. Do NOT use built-in helpers (map, reduce, filter)
2. Use only loops and conditions
3. Use an object to store counts

Expected Output:
{
  1: 3,
  2: 3,
  3: 2,
  4: 1
}
*/

// 👇 Write your solution below 👇

let freq = {};

for (let num of nums) {

    if (freq[num]) {
        freq[num] += 1;
    } else {
        freq[num] = 1;
    }

}

console.log(freq);