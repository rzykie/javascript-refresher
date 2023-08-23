const user = {
    "name": "Max",
    "age": 14,
    greet() {
        console.log("Hello!");
        console.log(this.name);
    }
}

console.log(user.name);

user.greet();