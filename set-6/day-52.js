/*
----------------------------------------
DAY 52 PROBLEM: Most Reliable Participant
----------------------------------------

You are given an array of attendance records.
Each record represents a day and contains
the name of the participant who attended.

Your task is to find the participant who has
the longest consecutive attendance streak.
*/

const attendance = [
  "Ali",
  "Ali",
  "Sara",
  "Sara",
  "Sara",
  "Ali",
  "Ali",
  "Ali",
  "Junaid",
  "Junaid"
];

/*
TASK:
1. Traverse the array only ONCE
2. Track consecutive streaks for each name
3. Reset streak when the name changes
4. Find the name with the highest consecutive streak
5. Store the result in a variable called `result`
6. Log the result in this format:

   "<name> attended for <days> consecutive days"

RULES:
- Do NOT use built-in helpers (map, filter, reduce, etc.)
- Use loops and conditions only
- No second pass allowed
- Keep the logic readable and intentional

Expected Output:
Sara attended for 3 consecutive days
*/

let currentStreak = 1;
let bestStudent = '';
let maxStreak = 1;

for (let i = 1; i < attendance.length; i++) {
    if (attendance[i] === attendance[i - 1]) {
        currentStreak++;
    } else {
        currentStreak = 1;
    }

    if (maxStreak < currentStreak) {
        maxStreak = currentStreak;
        bestStudent = attendance[i];
    }
}

let result = `${bestStudent} attended for ${maxStreak} consecutive days`;
console.log(result);