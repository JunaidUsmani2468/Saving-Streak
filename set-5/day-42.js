/*
----------------------------------------
DAY 42 PROBLEM: Most Frequent Word Tracker
----------------------------------------

You are given an array of sentences.

Your task is to:
1. Extract all words manually (character by character)
2. Count how many times each word appears across ALL sentences
3. Find the most wordsFrequent word
4. Return a summary string in this format:

   "Most frequent word is '<word>' appearing <count> times"
*/

const sentenceList = [
  "code builds discipline",
  "discipline builds growth",
  "growth requires discipline"
];

/*
TASK:
1. Traverse the array only once
2. Extract words manually (no split)
3. Use an object to count word wordsFrequency
4. Track the most wordsFrequent word while counting
5. Store final string in a variable called `result`
6. Log the result

RULES:
- Do NOT use built-in helpers (split, map, reduce, Object.keys, etc.)
- Use loops and conditions only
- Case-sensitive counting
- Words are separated by single spaces only

Expected Output:
Most frequent word is 'discipline' appearing 3 times

Explanation:
"discipline" appears once in each sentence (3 total),
which is higher than any other word.
*/

let wordsFreq = {};
let word = '';
let mostFreqWord = '';
let maxFreq = 0;

for (let sentence of sentenceList) {
    for (let char = 0; char <= sentence.length; char++) {
        if (sentence[char] && sentence[char] !== ' ') {
            word += sentence[char];
        } else {
            if (!wordsFreq[word]) {
                wordsFreq[word] = 0;
            }
            
            wordsFreq[word]++;

            if (maxFreq < wordsFreq[word]) {
                mostFreqWord = word;
                maxFreq = wordsFreq[word];
            }

            word = '';
        }
    }
}

let result = `Most frequent word is '${mostFreqWord}' appearing ${maxFreq} times`;

console.log(result);