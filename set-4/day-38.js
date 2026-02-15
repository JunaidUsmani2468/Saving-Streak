/*
----------------------------------------
DAY 38 PROBLEM: Most Active User Summary
----------------------------------------

You are given an array of activity records.
Each record contains a username, an action string, and time spent in minutes.

Your task is to find the user who spent the MOST total time
and generate a clean summary string for that user.
*/

const records = [
  { user: "ali", action: "login", time: 5 },
  { user: "junaid", action: "code", time: 25 },
  { user: "ali", action: "browse", time: 15 },
  { user: "junaid", action: "debug", time: 20 },
  { user: "sara", action: "read", time: 30 }
];

/*
TASK:
1. Calculate total time spent by each user
2. Find the user with the highest total time
3. Create a summary string in the format:
   "User <name> spent <total> minutes in total"
4. Store the final string in a variable called `result`
5. Log the result

RULES:
- Do NOT use built-in helpers (map, reduce, filter, Object.keys, etc.)
- Traverse the array only ONCE
- Use loops and conditions only

Expected Output:
User junaid spent 45 minutes in total

Explanation:
Junaid has two entries (25 + 20),
which is higher than Ali (20) and Sara (30).
*/

let totalTimeByUser = {};
let mostActiveUser = '';
let maxTime = 0;

for (let record of records) {
    let user = record.user;
    let time = record.time;

    if (!totalTimeByUser[user]) {
        totalTimeByUser[user] = 0;
    }

    totalTimeByUser[user] += time;

    if (totalTimeByUser[user] > maxTime) {
        maxTime = totalTimeByUser[user];
        mostActiveUser = user;
    }
}

let result = `User ${mostActiveUser} spent ${maxTime} minutes in total`;

console.log(result);