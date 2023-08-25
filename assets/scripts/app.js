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

// const hobbies = ["sports", "cooking", "reading"];

// hobbies.push("Kayaking");
// console.log(hobbies[0]);

// const index = hobbies.findIndex((item) => item === "sports")

// console.log(index);

// // Wrap object in a parenthesis
// const newArray = hobbies.map((item) => ({ text: item, isReading: true, }));

// console.log(newArray);

// DESTRUCTURING
// const [firstName, lastName] = ["Max", "Smith"]

// const firstName = userNameData[0]
// const lastName = userNameData[1]

// console.log(firstName + lastName);
// console.log(firstName);
// console.log(lastName);

// pulled out by property name
const { name: userName, age: userAge } = {
    "name": "John",
    "age": 33,
}

console.log(userName);
console.log(userAge);
