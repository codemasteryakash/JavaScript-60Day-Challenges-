// 💛 JavaScript Code for Loops (Day 06)

// 🔁 1. For Loop
console.log("For Loop Example:");
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// 🔄 2. While Loop
console.log("\nWhile Loop Example:");
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}

// 🧩 3. Looping through an array
let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];
console.log("\nLooping through an array:");
for (let fruit of fruits) {
  console.log(fruit);
}

// ⚡ 4. Using break and continue
console.log("\nBreak and Continue Example:");
for (let num = 1; num <= 5; num++) {
  if (num === 3) continue; // skip 3
  if (num === 5) break;    // stop at 5
  console.log("Number:", num);
}
