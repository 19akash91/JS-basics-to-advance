// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }


// for in 
// for (const key in arr) {
//     if (Object.hasOwnProperty.call(arr, key)) {
//         const element = arr[key];
//         console.log(element);
//     }
// }

// mpa

const map = new Map()
map.set('IN', "India")
map.set('US',"United States Of America")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ': ', value);
}