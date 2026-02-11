/*
----------------------------------
DAY 34 PROBLEM: VALID WORD SCORE
----------------------------------

You are given:

1. An array of allowed words
2. A string sentence
3. An object that assigns score to characters

*/

const allowedWords = ["code", "logic", "build", "focus"];

const text = "code daily build focus build logic code";

const charScore = {
  c: 2,
  o: 1,
  d: 2,
  e: 1,
  l: 2,
  g: 2,
  i: 1,
  b: 3,
  u: 2,
  f: 2,
  s: 1
};

/*
TASK:
1. From the sentence, consider ONLY words that exist in `allowedWords`
2. For each valid word:
   - Calculate its total character score using `charScore`
3. Add the scores of all valid words
4. Store the final total in a variable called `totalScore`
5. Log the result

RULES:
- Do NOT use built-in helpers (split, filter, map, reduce, includes)
- Use loops and conditions only
- Traverse the sentence only once
- You may use objects for tracking if needed

Expected Output:
46

Explanation:
Valid words:
code → (2+1+2+1) = 6
build → (3+2+1+2+2) = 10
focus → (2+1+2+2+1) = 8
build → 10
logic → (2+1+2+1+2) = 8
code → 6

Total = 6 + 10 + 8 + 10 + 8 + 6 = 48  ❗
But careful:
Check scoring carefully — one character might not exist in charScore.
*/

// 👉 Write your solution below 👇

let totalScore = 0;
let wordScore = 0;
let textWord = '';

for (let i = 0; i <= text.length; i++) {
    if (text[i] !== ' ' && text[i]) {
        textWord += text[i];

        if (charScore[text[i]]) {
            wordScore += charScore[text[i]];
        }
    }
    
    if (text[i] === ' ' || !text[i]) {
        for (let word of allowedWords) {
            if (word === textWord) {
                totalScore += wordScore;
                break;
            }
        }

        textWord = '';
        wordScore = 0;
    }
}

console.log(totalScore);