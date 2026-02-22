/*
----------------------------------------
DAY 45 PROBLEM: Longest Unique Character Streak
----------------------------------------

You are given a single string.

Your task is to find the LENGTH of the longest
continuous substring where NO character repeats.
Spaces should break the streak and should be ignored.
*/

const text = "code discipline builds";

/*
TASK:
1. Traverse the string character by character
2. Ignore spaces completely (reset streak on space)
3. Track characters seen in the current streak using an object
4. If a character repeats, reset the streak from that character
5. Track the maximum length found
6. Store the final length in a variable called `result`
7. Log the result

RULES:
- Do NOT use built-in helpers (split, map, reduce, Object.keys, etc.)
- Use loops, conditions, and plain objects only
- Case-sensitive
- Spaces always reset the streak

Expected Output:
6

Explanation:
The word "builds" contains 6 unique characters in a row.
Other words have repeated characters earlier, so the maximum
unique streak length is 6.
*/

let seen = {};
let currentStreak = 0;
let maxStreak = 0;

for (let i = 0; i <= text.length; i++) {
    if (text[i] && text[i] !== ' ') {
        if (!seen[text[i]]) {
            seen[text[i]] = true;
            currentStreak++;
            console.log(text[i], currentStreak);
        } else if (seen[text[i]]) {

            if (currentStreak > maxStreak) {
                maxStreak = currentStreak;
            }

            console.log('streak restart from', text[i]);
            currentStreak = 1;
            seen = {};
            seen[text[i]] = true;
        }
    } else {
        if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
        }

        currentStreak = 0;
        seen = {};

        if (text[i + 1]) {
            console.log('streak restart from', text[i + 1]);
        }
    }
}

console.log(maxStreak);