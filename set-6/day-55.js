/*
----------------------------------------
DAY 55 PROBLEM: First Reordered Match
----------------------------------------

You are given an array of words.

Two words are considered a "reordered match"
if they contain the SAME characters but possibly
in a different order.

Your task is to find the FIRST pair of words
that are reordered versions of each other.

Return them as a string in this format:
"word1 - word2"
*/

const words = [
  "listen",
  "google",
  "silent",
  "enlist",
  "cat",
  "tac"
];

/*
TASK:

1. Traverse the array of words
2. For each word, create a normalized pattern
   by sorting its characters alphabetically
3. Use an object to store patterns
4. If a pattern already exists:
   → you found a reordered match
5. Return the first pair found

RULES:

❌ Do NOT use:
sort, map, filter, reduce, Set

✔ Allowed:
loops
objects
string indexing

Expected Output:
"listen - silent"

Explanation:
Both words contain the same characters:
l, i, s, t, e, n
*/

let freq = {};
let first = '';
let second = '';

for (let word of words) {
    freq[word] = {};

    for (let char of word) {
        freq[word][char] = (freq[word][char] || 0) + 1;
    }

    let stop = false;

    for (let stored in freq) {
        if (word === stored) continue;
        if (word.length !== stored.length) continue;

        let allowed = true;

        for (let char in freq[word]) {
            if (freq[word][char] !== freq[stored][char]) {
                allowed = false;
                break;
            }
        }

        if (allowed) {
            first = stored;
            second = word;
            stop = true;
            break;
        }
    }

    if (stop) break;
}

console.log(first, second);