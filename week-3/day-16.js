/*
--------------------------------
PROBLEM: STRING LONGEST WORD LENGTH
--------------------------------

Given a string:
*/

const text = "build habits not excuses";

/*
TASK:
1. Find the LENGTH of the LONGEST word in the string
2. Words are separated by single spaces
3. Store the result in a variable called `maxLength`
4. Log the result

Expected Output:
8
(Explanation: "excuses")
*/

// 👉 Write your solution below 👇

let maxLength = 0;

for (let word of text.split(' ')) {
    if (word.length > maxLength) {
        maxLength = word.length;
    }
}

console.log(maxLength);