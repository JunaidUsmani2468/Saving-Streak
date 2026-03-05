/*
----------------------------------------
DAY 56 PROBLEM: Nearest Same Word Distance
----------------------------------------

You are given an array of words.

Your task is to find the smallest distance between
two identical words in the array.

Distance means the difference between their indices.

If no word repeats, return -1.
*/

const words = [
  "code",
  "practice",
  "learn",
  "code",
  "debug",
  "learn",
  "repeat"
];

/*
TASK:
1. Traverse the array only ONCE.
2. Track the last index where each word appeared.
3. When you see the same word again, calculate the distance.
4. Keep updating the minimum distance found.
5. Store the result in a variable called `result`.
6. Log the result.

RULES:
- Do NOT use built-in helpers (map, filter, reduce, Object.keys, etc.)
- Use loops, objects, and conditions only.

Expected Output:
3

Explanation:
"code" appears at index 0 and 3 → distance = 3
"learn" appears at index 2 and 5 → distance = 3

Smallest distance = 3
*/

let idx = {};
let result = Infinity;

for (let i = 0; i < words.length; i++) {

    let word = words[i];

    if (idx[word] === undefined) {
        idx[word] = i;
    } else {
        let distance = i - idx[word];

        if (distance < result) {
            result = distance;
        }

        idx[word] = i;
    }
}

console.log(result);