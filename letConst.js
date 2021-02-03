// const can not change
const nam = 'omok';
//nam = 'tomok';
console.log(nam);

const nam1 = [1, 2, 3];
nam1[0] = 4;
nam1.push(5);
//nam1 = 1;
console.log(nam1);

const nam2 = {nam: 'yaa', age: 20};
//nam2 = 'error';
console.log(nam2);


// let can change
let nam3 = 'omok';
nam3 = 'tomok';
console.log(nam3);


// if we use let then we need to use the result in scoop
let sum = 0;
for (let i = 0; i < 10; i++) {
    let value = sum + i;
    console.log(value);
}