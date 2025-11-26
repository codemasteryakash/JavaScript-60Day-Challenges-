// 💛 JavaScript code for Objects Basics (Day 20)

// 🔹 Creating an object
const person = {
  name: "John",
  age: 25,
  isStudent: false,
};

console.log("Person Object:", person);

// 🔹 Accessing values
console.log("Name:", person.name);
console.log("Age:", person.age);

// 🔹 Updating values
person.age = 26;
console.log("Updated Age:", person.age);

// 🔹 Adding new properties
person.city = "New York";
console.log("Added City:", person.city);

// 🔹 Deleting properties
delete person.isStudent;
console.log("After deleting isStudent:", person);

// 🔹 Nested Object
const user = {
  username: "techCoder",
  details: {
    email: "coder@example.com",
    country: "India",
  },
};

console.log("\nNested Object:", user);
console.log("User Email:", user.details.email);

// 🔹 Array of Objects
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
];

console.log("\nProducts Array:", products);
console.log("First Product Name:", products[0].name);

// 🔹 Looping through an object
console.log("\nLoop through person object:");
for (let key in person) {
  console.log(key, ":", person[key]);
}
