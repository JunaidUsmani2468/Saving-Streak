/*
----------------------------------------
DAY 44 PROBLEM: Highest Scoring Student
----------------------------------------

You are given an array of students.
Each student has a name and an array of scores (numbers).

Your task is to find the student whose TOTAL score is the highest
and generate a summary string.
*/

const studentsData = [
  { name: "Ali", scores: [10, 20, 30] },
  { name: "Sara", scores: [25, 25] },
  { name: "Junaid", scores: [15, 15, 20] }
];

/*
TASK:
1. Traverse the array of students
2. For each student, calculate the total score
3. Track the student with the highest total score
4. Create a string in the format:
   "Top student is <name> with <total> points"
5. Store the string in a variable called `result`
6. Log the result

RULES:
- Do NOT use built-in helpers (map, reduce, filter, Object.keys, etc.)
- Use loops and conditions only
- Traverse carefully; clarity over tricks

Expected Output:
Top student is Ali with 60 points

Explanation:
Ali has scores 10 + 20 + 30 = 60,
which is higher than Sara (50) and Junaid (50).
*/

let maxScore = 0;
let topStudent = '';

for (let data of studentsData) {
    let currrentScore = 0;
    let scores = data.scores;
    let student = data.name;

    for (let score of scores) {
        currrentScore += score;
    }

    if (currrentScore > maxScore) {
        maxScore = currrentScore;
        topStudent = student;
    }
}

let result = `Top student is ${topStudent} with ${maxScore} points`;

console.log(result);