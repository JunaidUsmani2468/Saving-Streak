/*
----------------------------------
DAY 33 PROBLEM: STRING + OBJECT
----------------------------------

Given a string and an object:

*/

const text = "success starts with small steps";
const limits = {
  s: 5,
  t: 3,
  a: 1
};

/*
TASK:
1. Count how many characters in the string:
   - Exist as keys in the `limits` object
   - Do NOT exceed their allowed frequency
2. Ignore spaces
3. Traverse the string only ONCE
4. Store the result in a variable called `count`
5. Log the result

RULES:
- Do NOT use built-in helpers (split, map, filter, reduce, Object.keys)
- Use only loops and conditions
- Use an object to track counts

Expected Output: 9

Explanation:
Valid characters counted (within limits):
s, s, s, s, s   → 5 times
t, t, t         → 3 times
a               → 1 time
Total = 9
*/

// 👉 Write your solution below 👇

let count = 0;
let used = {};

for (let char of text) {
    if (!limits[char]) continue;

    if (!used[char]) {
        used[char] = 0;
    }
    
    if (used[char] < limits[char]) {
        used[char]++;
        count++;
    }
}

console.log(count);