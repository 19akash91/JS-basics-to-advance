// Primitive

// 7 types : String, number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId);

const bigNumber = 234244543344342323n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "don"]

let myObj = {
    name : "akash",
    age : 33
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber);


// ++++++++++++++++++++++++++++++ MEMORY  +++++++++++++++++++++++++++++++++++++++++++++

// Stach (Primitive), Heap (Reference / non primitive)

let myYoutubeName = "akashbandal"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myYoutubeName);

let user1 = {
    email : "akash@go.com",
    upi: "abc@upi"
}
console.log(user1);
let user2 = user1

user2.email = "bandal@go.com"

console.log(user1);
console.log(user2);