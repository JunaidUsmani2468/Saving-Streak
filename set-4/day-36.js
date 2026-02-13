/*
----------------------------------------
DAY 36 PROBLEM: GROUP & COUNT BY TYPE
----------------------------------------

Given an array of objects:
*/

const products = [
  { name: "apple", type: "fruit" },
  { name: "carrot", type: "vegetable" },
  { name: "banana", type: "fruit" },
  { name: "broccoli", type: "vegetable" },
  { name: "mango", type: "fruit" },
  { name: "potato", type: "vegetable" },
  { name: "grape", type: "fruit" }
];

/*
TASK:
1. Count how many items exist for each `type`
2. Store result in an object called `result`
3. Traverse the array ONLY ONCE
4. Do NOT use built-in helpers (map, filter, reduce, Object.keys)
5. Log the result

Expected Output:
{
  fruit: 4,
  vegetable: 3
}
*/

let result = {};

for (let product of products) {

    let type = product.type;

    if (!result[type]) {
        result[type] = 0;
    }

    result[type]++;
}

console.log(result);