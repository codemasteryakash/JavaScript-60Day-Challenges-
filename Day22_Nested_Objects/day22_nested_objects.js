// 💛 JavaScript code for Nested Objects (Day 22)

// Basic nested object
const user = {
  name: "John",
  age: 25,
  address: {
    city: "Mumbai",
    country: "India",
    pin: 400001
  }
};

console.log("User:", user);
console.log("City:", user.address.city);

// Nested array of objects
const products = {
  electronics: [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 }
  ],
  groceries: [
    { name: "Milk", price: 50 },
    { name: "Bread", price: 40 }
  ]
};

console.log("\nElectronics List:", products.electronics);
console.log("First Electronic Item:", products.electronics[0].name);

// Updating nested object values
user.address.city = "Delhi";
console.log("\nUpdated City:", user.address.city);

// Looping nested objects
console.log("\nLooping Electronics:");
products.electronics.forEach(item => {
  console.log(item.name, "-", item.price);
});
