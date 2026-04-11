/*
--------------------------------
PROBLEM: COUNT WORDS WITH LENGTH > 4
--------------------------------

Given a string:
*/

const text = "code daily build habits now";

/*
TASK:
1. Count how many words have length GREATER THAN 4
2. Words are separated by single spaces
3. Do NOT use split(), filter(), or any built-in helpers
4. Store the count in a variable called `longWordCount`
5. Log the result

Expected Output:
3

Explanation:
Words → code(4), daily(5), build(5), habits(6), now(3)
Words with length > 4 → daily, build, habits → 3

Write your solution below 👇
*/

/*----------------------------/
Solution: Without Built-ins  /
---------------------------*/

let longWordCount = 0;
let letterCount = 0;

for (let char of text) {
    if (char !== ' ') {
        letterCount++;
    } else {
        if (letterCount > 4) {
            longWordCount++;
        }

        letterCount = 0;
    }
}

if (letterCount > 4) longWordCount++;

console.log(longWordCount);

/*----------------------------/
Solution: With Built-ins  $  /
---------------------------*/

const longWordCount$ = text.split(' ').filter(word => word.length > 4).length;
console.log(longWordCount$);