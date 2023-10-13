// foreach

const coding = ["js","java","php","c","c++"]

// coding.forEach(element => {
//     console.log(element);
// });

// coding.forEach(function(element) {
//     console.log(element);
// });

coding.forEach((element, index, arr) => {
    console.log(element, index, arr);
});