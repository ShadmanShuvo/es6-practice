// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;
const result = doubleIt(5);
console.log(result);

const addIt = (x, y) => x + y;
const result3 = addIt(5, 10);
console.log(result3);

const big = (x, y) => {
    const add = x + y;
    const diff = x - y;
    const result = add * diff;
    return result;
}
const result4 = big(15, 10);
console.log(result4);