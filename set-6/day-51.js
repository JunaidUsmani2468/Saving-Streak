/*
----------------------------------------
DAY 51 PROBLEM: Daily Warmer Days
----------------------------------------

You are given an array of daily temperatures.

For each day, determine how many days you have to wait
until a warmer temperature occurs.
*/

const temperatures = [30, 31, 29, 35, 34, 36, 33, 37];

/*
TASK:
1. Traverse the array of temperatures
2. For each day, look ahead to find the next warmer temperature
3. Count how many days it takes to reach a warmer day
4. If no warmer day exists, store 0 for that day
5. Store the final output in a variable called `result`
6. Log the result

RULES:
- Do NOT use built-in helpers (map, filter, reduce, etc.)
- Use loops and conditions only
- Focus on clarity and correctness

Expected Output:
[1, 2, 1, 2, 1, 2, 1, 0]

Explanation:
Each value represents how many days you must wait
to get a warmer temperature.
If there is no future warmer day, the value is 0.
*/

let result = [];

for (let i = 0; i < temperatures.length; i++) {
    let warmerDay = 0;
    let found = false;

    for (let j = i + 1; j < temperatures.length; j++) {
        warmerDay++;

        if (temperatures[j] > temperatures[i]) {
            result.push(warmerDay);
            found = true;
            break;
        }
    }

    if (!found) {
        result.push(0);
    }
}

console.log(result);