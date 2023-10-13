// singleton

// object.create

// object literals


const mySym = Symbol("key1")

const jsUser = {
    name: "akash",
    "full name":"akash bandal",
    [mySym]: "mykey1",
    age: 32,
    location:"pune",
    isLoggedIn:false,
    lastLoginDays:["mon","sat"]
}

// console.log(jsUser.name);
// console.log(jsUser["full name"]);
// console.log(jsUser["name"]);
// console.log(jsUser[mySym]);

jsUser["full name"] = "akash Vilas Bandal"
// console.log(jsUser["full name"]);
// Object.freeze(jsUser)
// jsUser["full name"] = "akash1991"
// console.log(jsUser["full name"]);

jsUser.greeting = function() {
    console.log("Hello JS user");
}

jsUser.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greeting())
console.log(jsUser.greeting2())