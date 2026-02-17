/*
----------------------------------------
DAY 40 PROBLEM: Unique Skill Counter
----------------------------------------

You are given an array of people.
Each person has a name and an array of skills (strings).

Your task is to count how many TIMES each skill appears
across all people.
*/

const peopleData = [
  { name: "Ali", skills: ["js", "html"] },
  { name: "Sara", skills: ["js", "css"] },
  { name: "Junaid", skills: ["html", "css", "js"] }
];

/*
TASK:
1. Traverse the array of people
2. Traverse each person's skills
3. Count how many times each skill appears
4. Store the final counts in an object called `result`
5. Log the result

RULES:
- Do NOT use built-in helpers (map, filter, reduce, Object.keys, etc.)
- Use loops and conditions only
- Keep logic simple and readable

Expected Output:
{ js: 3, html: 2, css: 2 }

Explanation:
"js" appears once for each person (3 total),
"html" appears for Ali and Junaid (2),
"css" appears for Sara and Junaid (2).
*/

let result = {};

for (let data of peopleData) {
    for (let skill of data.skills) {
        
        if (!result[skill]) {
            result[skill] = 0;
        }

        result[skill]++;
    }
}

console.log(result);