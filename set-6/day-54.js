/*
----------------------------------------
DAY 54 PROBLEM: Trending Keyword Analyzer
----------------------------------------

You are given an array of post objects.

Each post contains:
- user (string)
- content (string)
- likes (number)

Your task is to find the MOST frequent word
across all posts with the following conditions:
*/

const posts = [
  { user: "Ali", content: "JavaScript is powerful and JavaScript is fun", likes: 15 },
  { user: "Sara", content: "I love coding in javascript every day", likes: 8 },
  { user: "Junaid", content: "JavaScript logic building improves coding skills", likes: 20 },
  { user: "Ali", content: "Consistency and logic make coding powerful", likes: 12 }
];

/*
TASK:
1. Traverse the array only ONCE
2. Only consider posts where likes >= 10
3. Extract words manually from the content string (do NOT use split)
4. Convert all words to lowercase
5. Ignore words with length < 4
6. Use an object to track word frequency
7. If two words have equal frequency, keep the one that appears FIRST
8. Store the final word in a variable called `result`
9. Log the result

RULES:
- Do NOT use built-in helpers (split, map, filter, reduce, Object.keys, etc.)
- Use loops and conditions only
- Array + Object + String strictly
- No second full traversal of the posts array

Expected Output:
javascript

Explanation:
Only posts with likes >= 10 are considered.
After applying filters and counting frequencies,
"javascript" appears the most times.
*/

let freq = {};
let maxCount = 0;
let result = '';

for (let post of posts) {
    if (post.likes < 10) continue;

    let word = '';

    for (let i = 0; i <= post.content.length; i++) {
        let char = post.content[i];

        if (char && char !== ' ') {
            word += char.toLowerCase();
        } else {
            if (word.length >= 4) {
                freq[word] = (freq[word] || 0) + 1;
                
                if (maxCount < freq[word]) {
                    maxCount = freq[word];
                    result = word;
                }
            }

            
            word = '';
        }
    }
}

console.log(result);