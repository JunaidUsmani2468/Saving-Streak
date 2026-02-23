/*
----------------------------------------
DAY 46 PROBLEM (BOSS): True Consistency Tracker
----------------------------------------

You are given an array of daily activity logs.
Each log represents one day in chronological order.

Each entry contains:
- user: the username
- task: the task worked on that day

Your task is to find the user who worked on the
SAME task for the MOST consecutive days.
*/

const activityLogs = [
  { user: "ali", task: "js" },
  { user: "ali", task: "css" },
  { user: "ali", task: "css" },
  { user: "sara", task: "js" },
  { user: "sara", task: "js" },
  { user: "sara", task: "css" },
  { user: "junaid", task: "js" },
  { user: "junaid", task: "js" },
  { user: "junaid", task: "js" },
  { user: "ali", task: "js" },
  { user: "ali", task: "js" },
];

/*
TASK:
1. Traverse the array ONLY ONCE
2. Track consecutive streaks based on:
   - same user
   - same task
3. Reset the streak if:
   - user changes
   - OR task changes
4. Find the longest valid streak
5. Create a string in the format:
   "User <name> worked on <task> for <days> consecutive days"
6. Store the final string in a variable called `result`
7. Log the result

RULES:
- Do NOT use built-in helpers (map, filter, reduce, Object.keys, etc.)
- Use loops and conditions only
- Track streaks in real time (no second pass)
- Code must be readable and intentional

Expected Output:
User junaid worked on js for 3 consecutive days

Explanation:
Junaid worked on "js" for 3 days in a row.
Other users either changed tasks or broke their streak earlier.
*/


let currentStreak = 1;
let maxStreak = 1;
let bestUser = activityLogs[0].user;
let bestTask = activityLogs[0].task;

for (let i = 1; i < activityLogs.length; i++) {
    let prev = activityLogs[i - 1];
    let curr = activityLogs[i];

    if (prev.user === curr.user && prev.task === curr.task) {
        currentStreak++;
    } else {
        currentStreak = 1;
    }

    if (maxStreak < currentStreak) {
        maxStreak = currentStreak;
        bestUser = curr.user;
        bestTask = curr.task;
    }
}

let result = `User ${bestUser} worked on ${bestTask} for ${maxStreak} consecutive days`;

console.log(result);