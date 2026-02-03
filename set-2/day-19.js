/*
--------------------------------
DAY 19 PROBLEM: COUNT CONSONANTS
--------------------------------

Given a string:
*/

const text = "consistency beats motivation";

/*
TASK:
1. Count how many CONSONANTS are in the string
2. Ignore spaces
3. Vowels are: a, e, i, o, u
4. Store the count in a variable called `consonantCount`
5. Log the result

Expected Output: 16
*/

// 👉 Write your solution below 👇

let consonantCount = 0;

for (char of text.toLowerCase()) {
    if (
        char !== 'a' &&
        char !== 'e' &&
        char !== 'i' &&
        char !== 'o' &&
        char !== 'u' &&
        char !== ' '
    ) {
        consonantCount++;
    }
}

console.log(consonantCount);