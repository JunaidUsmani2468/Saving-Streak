/*
--------------------------------
PROBLEM: STRING UNIQUE CHARACTER COUNT
--------------------------------

Given a string:
*/

let text = "developer";

/*
TASK:
1. Count how many UNIQUE characters are in the string
   (case-sensitive)
2. Store the count in a variable called `uniqueCount`
3. Log the result

Expected Output: 7
(Explanation: d, e, v, l, o, p, r → but 'e' repeats)

Write your solution below 👇
*/

/*----------------------------/
Solution: Without Built-ins  /
---------------------------*/

let uniqueArr = [];

for (let char of text) {
    let isUnique = true;

    for (let uniqueChar of uniqueArr) {
        if (char === uniqueChar) {
            isUnique = false;
            break;
        } 
    }

    if (isUnique) {
        uniqueArr.push(char);
    }
}

const uniqueCount = uniqueArr.length;

console.log(uniqueCount);

/*----------------------------/
Solution: With Built-ins  $  /
---------------------------*/

const uniqueCount$ = new Set(text).size;
console.log(uniqueCount$);