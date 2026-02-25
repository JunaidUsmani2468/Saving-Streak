/*
----------------------------------------
DAY 48 PROBLEM: Most Consistent Performer
----------------------------------------

You are given an array of student performance records.
Each student has a name and an array of scores.

Your task is to find the MOST CONSISTENT student.

Consistency is defined as:
(highest score - lowest score)

The smaller the difference, the more consistent the student.
*/

const performanceData = [
  { name: "Ali", scores: [70, 75, 72, 74] },
  { name: "Sara", scores: [80, 60, 90, 50] },
  { name: "Junaid", scores: [65, 67, 66, 68] },
  { name: "Zara", scores: [90, 92, 88, 91] }
];

/*
TASK:
1. Traverse the array of students
2. For each student, find the minimum and maximum score manually
3. Calculate the difference (max - min)
4. Track the student with the smallest difference
5. Store the final answer in a variable called `result`
6. Log the result

RULES:
- Do NOT use built-in helpers (Math.max, Math.min, map, reduce, sort, etc.)
- Use loops and conditions only
- Focus on readability and correct logic

Expected Output:
Most consistent student is Junaid with difference 3

Explanation:
Junaid’s scores range from 65 to 68.
Difference = 68 - 65 = 3, which is the smallest among all students.
*/

let minDifference;
let bestStudent = '';

for (let student of performanceData) {
    let maximum = student.scores[0];
    let minimum = student.scores[0];

    for (let score of student.scores) {
        if (maximum < score) {
            maximum = score;
        }

        if (minimum > score) {
            minimum = score;
        }
    }

    let difference = maximum - minimum;

    if (minDifference === undefined || minDifference > difference) {
        minDifference = difference;
        bestStudent = student.name;
    }
}

let result = `Most consistent student is ${bestStudent} with difference ${minDifference}`;

console.log(result);