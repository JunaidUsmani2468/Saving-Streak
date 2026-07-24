/*
----------------------------------
DAY 21 PROBLEM: WORD LENGTH MATCH COUNT
----------------------------------

Given a string and an array of numbers:
*/

const text = "code builds very strong logic habits daily";
const lengths = [4, 6];

/*
TASK:
1. Split the string into words WITHOUT using split()
2. For each word, find its length
3. Count how many words have a length that EXISTS in the `lengths` array
4. Store the count in a variable called `matchCount`
5. Log the result

RULES:
1. Do NOT use built-in string or array helpers (split, includes, map, filter, reduce)
2. Use only loops and conditions
3. Handle spaces correctly

Expected Output:
3

Explanation:
Words with matching lengths:
code (4), builds (6), very (4), strong (6), habits (6)

👉 Write your solution below 👇
*/

/*----------------------------/
Solution: Without Built-ins  /
---------------------------*/

let matchCount = 0;
let letterCount = 0;

for (const char of text) {
  if (char !== " ") {
    letterCount++;
  } else {
    for (const length of lengths) {
      if (length === letterCount) {
        matchCount++;
        break;
      }
    }

    letterCount = 0;
  }
}

if (letterCount) {
  for (const length of lengths) {
    if (length === letterCount) {
      matchCount++;
      break;
    }
  }
}

console.log(matchCount);

/*----------------------------/
Solution: With Built-ins  $  /
---------------------------*/

// With Filter:
const matchCount$ = text
  .split(" ")
  .filter((word) => lengths.includes(word.length)).length;
console.log(matchCount$);

// With Reduce:
const matchCount$$ = text
  .split(" ")
  .reduce((count, word) => count + lengths.includes(word.length), 0);
console.log(matchCount$$);
