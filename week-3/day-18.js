/*
--------------------------------
DAY 18 PROBLEM: COUNT WORDS STARTING WITH A VOWEL
--------------------------------

Given a string:
*/

const text = "exam anxiety is always annoying but exam stress makes coding enjoyable";

/*
TASK:
1. Count how many WORDS start with a VOWEL (a, e, i, o, u)
2. Words are separated by single spaces
3. Store the count in a variable called `vowelWordCount`
4. Log the result

Expected Output: 7

Explanation:
Words starting with vowels → exam, enjoyable, exam, anxiety, is, always, annoying
*/

// 👉 Write your solution below 👇

let vowelWordCount = 0;

let isVowel = char => 
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u';

for (let i = 0; i < text.length; i++) {
    if (
        (i === 0 || text[i - 1] === ' ') && isVowel(text[i])
    ) {
        vowelWordCount++;
    }
}

console.log(vowelWordCount);