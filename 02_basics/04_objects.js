const tinderUser = new Object()     // singleton
// const tinderUser = {}            // Non singleton

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@email.com",
    fullName:{
        userfullname:{
            firstName:"akash",
            lastName:"bandal"
        }
    }
}

console.log(regularUser.fullName.userfullname.firstName);