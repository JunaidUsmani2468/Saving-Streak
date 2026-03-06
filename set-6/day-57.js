/*
----------------------------------------
DAY 57 PROBLEM: First Pair With Target Sum
----------------------------------------

You are given an array of numbers and a target value.

Your task is to find the FIRST pair of numbers
whose sum equals the target.

Return the pair as a string in this format:
"num1, num2"

If no pair exists, return "No Pair".
*/

const numbers = [3, 7, 2, 5, 1, 9];
const target = 8;

/*
TASK:
1. Traverse the array only ONCE
2. For each number, calculate the value needed to reach the target
3. Check if that value was seen before
4. If yes, you found the pair
5. Store the pair in a variable called `result`
6. Log the result

RULES:
- Do NOT use built-in helpers (map, filter, reduce, etc.)
- Use loops, objects, and conditions only
- Stop immediately when the first pair is found

Expected Output:
"3, 5"

Explanation:
3 + 5 = 8
*/

let seen = {};
let num1 = 0;
let num2 = 0;

for (let i = 0; i < numbers.length; i++) {

  let curr = numbers[i];
  let need = target - curr;

  if (seen[need]) {
    num1 = need;
    num2 = curr;
    break;
  }

  if (seen[curr] === undefined) {
    seen[curr] = true;
  }

}

if (num1) {
  console.log(num1, num2);
} else {
  console.log("No Pair");
}