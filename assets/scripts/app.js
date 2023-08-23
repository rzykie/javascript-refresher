// const user = {
//     "name": "Max",
//     "age": 14,
//     greet() {
//         console.log("Hello!");
//         console.log(this.name);
//     }
// }

// console.log(user.name);

// user.greet();

const hobbies = ["sports", "cooking", "reading"];

hobbies.push("Kayaking");
console.log(hobbies[0]);

const index = hobbies.findIndex((item) => item === "sports")

console.log(index);

// Wrap object in a parenthesis
const newArray = hobbies.map((item) => ({ text: item, isReading: true, }));

console.log(newArray);