/*
----------------------------------------
DAY 53 PROBLEM: First Balanced Word
----------------------------------------

You are given a sentence as a string.

A word is called "balanced" if:
- every character in the word appears the SAME number of times

Your task is to find the FIRST balanced word
from left to right in the sentence.

Words are separated by a single space.
*/

const sentence = "code deed noon level apple";

/*
TASK:
1. Traverse the string character by character
2. Manually extract each word (do NOT use split)
3. For each word:
   - Use an object to count character frequency
   - Check if all characters have the same frequency
4. As soon as you find the FIRST balanced word:
   - Store it in a variable called `result`
   - Stop further processing
5. Log the result

RULES:
- Do NOT use built-in helpers (split, map, reduce, Object.keys, etc.)
- Use loops, objects, and conditions only
- Object + String strictly
- Early exit is allowed (and recommended)

Expected Output:
deed

Explanation:
"deed" → d(2), e(2) → balanced  
"noon" and "level" are also balanced,
but "deed" appears first in the sentence.
*/

let word = '';
let result = '';

for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] && sentence[i] !== ' ') {
        word += sentence[i];
    } else {
        let allowed = true;

        for (let j = 0; j < word.length / 2; j++) {
            if (word[j] !== word[word.length - 1 - j]) {
                allowed = false;
                break;
            }
        }

        if (allowed) {
            result = word;
            break;
        }

        word = '';
    }
}

console.log(result);