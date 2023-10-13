const accountId = 144553
let accountEmail = "akash@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState

// accountId = 2  // not allowed
accountEmail = "demo@go.com"
accountPassword = "212121212"
accountCity = "mumbai"

console.log(accountId);

/*
Prefer not to use var
bcoz  of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])