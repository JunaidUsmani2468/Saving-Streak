/*
----------------------------------------
DAY 43 PROBLEM: Longest Streak of Letters
----------------------------------------

You are given an array of strings.
Each string may contain letters and spaces.

Your task is to find the LENGTH of the longest
continuous streak of letters (a–z) without spaces
across all strings combined.
*/

const textList = [
  "code everyday",
  "build discipline",
  "stay consistent"
];

/*
TASK:
1. Traverse the array of strings
2. Traverse each string character by character
3. Count continuous letter streaks (reset on space)
4. Track the maximum streak currentStreak found
5. Store the final number in a variable called `result`
6. Log the result

RULES:
- Do NOT use built-in helpers (split, map, filter, reduce, regex, etc.)
- Use loops and conditions only
- Treat only spaces as breakers (letters are lowercase a–z)
- Traverse carefully; clarity over tricks

Expected Output:
10

Explanation:
The longest continuous streak is "discipline"
which has 10 letters.
*/

let result = 0;
let currentStreak = 0;

for (let text of textList) {
    for (let char = 0; char <= text.length; char++) {
        if (text[char] && text[char] !== ' ') {
            currentStreak++;
        } else {
            if (result < currentStreak) {
                result = currentStreak;
            }

            currentStreak = 0;
        }
    }
}

console.log(result);