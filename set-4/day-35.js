/*
-----------------------------------------
DAY 35 PROBLEM: LONGEST WORD WITH VOWEL RULE
-----------------------------------------

Given an array of allowed starting letters
and a string:

*/

const starters = ['c', 'b', 'g'];
const text = "code build grow stack create glide bold";

/*
TASK:
1. From the string, consider only words that:
   - Start with a letter that exists in `starters`
2. Among those words, find the LONGEST one.
3. Store the longest valid word in a variable called `longestWord`
4. Log the result.

RULES:
- Do NOT use built-in helpers (split, includes, map, filter, reduce)
- Traverse the string only ONCE
- You may loop over the array when needed
- Handle the last word correctly

Expected Output:
create

Explanation:
Words starting with c, b, g:
code (4)
build (5)
grow (4)
create (6)
glide (5)
bold (4)

Longest = create (6)
*/

let longestWord = 0;
let currentWord = '';

let starterWords = {};
for (let char of starters) {
    starterWords[char] = true;
}

for (let i = 0; i <= text.length; i++) {

    const isChar = text[i] && text[i] !== ' ';

    if (isChar) {
        currentWord += text[i];
        continue;
    }
    
    if (currentWord) {

        const startsValid = starterWords[currentWord[0]];
        const isLonger = currentWord.length > longestWord;

        if (startsValid && isLonger) {
            longestWord = currentWord.length;
        }

        currentWord = '';
    }
}

console.log(longestWord);