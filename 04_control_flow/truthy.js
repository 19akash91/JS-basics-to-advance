const demo = ""

if(demo){
    console.log("value exists");
} else {
    console.log("value not exists");
}

// falsy values

// false, 0, -0, Bigint 0n, "", null, undefined, NaN

// truthy values

// true, "0", 'false', " ", [], {}, function(){}

const demoArray = []

if(demoArray.length === 0){
    console.log("array is empty");
}

const demoObject = {}

if(Object.keys(demoObject).length === 0 ){
    console.log("its empty object");
}

// Nullish Coalescing Operator(??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1);


// Terniary operator

// condition ? true : false