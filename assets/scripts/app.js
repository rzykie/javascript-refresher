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
// const { name: userName, age: userAge } = {
//     "name": "John",
//     "age": 33,
// }

// console.log(userName);
// console.log(userAge);


// SPREAD OPERATOR

// const hobbies = ["Reading"];
// const newHobbies = ["Cooking"];

// const mergedHobbies = [...hobbies, ...newHobbies];

// console.log(mergedHobbies);


// const user = {
//     "name": "John",
//     "age": 33,
// }

// const extendedUser = {
//     isAdmin: true,
//     ...user,
// }

// console.log(extendedUser);

// Control Structures

// const password = prompt("Type your password");

// if (password === "1") {
//     console.log(1);
// } else if (password === "2") {
//     console.log(2);
// } else {
//     console.log("Invalid access!");
// }

// const hobbies = ["sports", "cooking", "reading"];

// for (const hobby of hobbies) {
//     console.log(hobby);
// }

// Using functions as values

// function handleTimeout() {
//     console.log("Time out");
// }

// const handleTimeout2 = () => {
//     console.log("Hello timeout");
// };

// setTimeout(handleTimeout, 1800);
// setTimeout(handleTimeout2, 3600);
// setTimeout(() => {
//     console.log("World timeout");
// }, 4500);

// function greet(greetFn) {
//     greetFn();
// }

// greet(() => console.log("hello world"));

function init() {
    function greet() {
        console.log("Hello");
    }

    greet();
}

init()