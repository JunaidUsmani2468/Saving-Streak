/*
----------------------------------
DAY 22 PROBLEM: WORDS STARTING AND ENDING WITH A VOWEL
----------------------------------

Given a string:
*/

const text = "area idea open apple use";

/*
TASK:
1. Count how many WORDS start AND end with a VOWEL (a, e, i, o, u)
2. Words are separated by single spaces
3. Store the count in a variable called `vowelWordCount`
4. Log the result

RULES:
1. Do NOT use built-in string helpers (split, match, regex)
2. Use only loops and conditions
3. Handle word boundaries correctly

Expected Output:
4

Explanation:
Valid words → area, idea, apple, use

Write your solution below 👇
*/

/*----------------------------/
Solution: Without Built-ins  /
---------------------------*/

let vowelWordCount = 0;

let isVowel = (char) =>
  char === "a" || char === "e" || char === "i" || char === "o" || char === "u";

for (let i = 0; i < text.length; i++) {
  if ((i === 0 || text[i - 1] === " ") && isVowel(text[i])) {
    for (let j = i; j < text.length; j++) {
      if (text[j + 1] === " " || j + 1 === text.length) {
        if (isVowel(text[j])) {
          vowelWordCount++;
        }

        break;
      }
    }
  }
}

console.log(vowelWordCount);

/*----------------------------/
Solution: With Built-ins  $  /
---------------------------*/

const isVowel$ = (ch) => "aeiou".includes(ch);

// With Filter:
const vowelWordCount$ = text
  .split(" ")
  .filter(
    (word) => isVowel$(word[0]) && isVowel$(word[word.length - 1]),
  ).length;
console.log(vowelWordCount$);

// With Reduce:
const vowelWordCount$$ = text
  .split(" ")
  .reduce(
    (count, word) =>
      count + (isVowel$(word[0]) && isVowel$(word[word.length - 1])),
    0,
  );
console.log(vowelWordCount$$);
