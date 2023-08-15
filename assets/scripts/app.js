function createGreeting(userName, message = "Hello") {
    // console.log(userName);
    // console.log(message);
    return "Hi, I am " + userName + "." + message;
}

const greeting1 = createGreeting("Juan");
console.log(greeting1);

const greeting2 = createGreeting("Smith", "What's up");
console.log(greeting2);
