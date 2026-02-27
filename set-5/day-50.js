/*
----------------------------------------
DAY 50 PROBLEM: Longest Stable Contributor
----------------------------------------

You are given an array of daily logs.
Each log contains:
- user: the username
- hours: number of hours worked that day
- topic: the topic worked on that day

Your task is to find the user who maintained the
LONGEST consecutive streak where:
- the SAME user
- worked on the SAME topic
- AND worked for AT LEAST 2 hours each day
*/

const dailyLogs = [
  { user: "ali", hours: 2, topic: "js" },
  { user: "ali", hours: 3, topic: "js" },
  { user: "ali", hours: 1, topic: "js" },
  { user: "sara", hours: 2, topic: "css" },
  { user: "sara", hours: 2, topic: "css" },
  { user: "sara", hours: 2, topic: "css" },
  { user: "junaid", hours: 3, topic: "js" },
  { user: "junaid", hours: 3, topic: "js" }
];

/*
TASK:
1. Traverse the array ONLY ONCE
2. Track consecutive streaks based on:
   - same user
   - same topic
   - hours >= 2
3. Reset the streak if:
   - user changes
   - OR topic changes
   - OR hours < 2
4. Find the longest valid streak
5. Create a string in the format:
   "User <name> worked on <topic> for <days> consecutive days"
6. Store the final string in a variable called `result`
7. Log the result

RULES:
- Do NOT use built-in helpers (map, filter, reduce, Object.keys, etc.)
- Use loops and conditions only
- Track streaks in real time (no second pass)
- Keep the code readable and intentional

Expected Output:
User sara worked on css for 3 consecutive days

Explanation:
Sara worked on the topic "css" for 3 days in a row
with at least 2 hours each day, which is the longest
valid streak in the data.
*/

bestUser = '';
hotTopic = '';
maxStreak = 1;
currentStreak = 1;

for (let i = 1; i < dailyLogs.length; i++) {
    let curr = dailyLogs[i];
    let prev = dailyLogs[i - 1];

    if (
        curr.user === prev.user &&
        curr.topic === prev.topic &&
        curr.hours >= 2 &&
        prev.hours >= 2
    ) {
        currentStreak++;
    } else {
        currentStreak = 1;
    }

    if (maxStreak < currentStreak) {
        maxStreak = currentStreak;
        bestUser = curr.user;
        hotTopic = curr.topic;
    }
}

let result = `User ${bestUser} worked on ${hotTopic} for ${maxStreak} consecutive days`;

console.log(result);