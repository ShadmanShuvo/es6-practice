const age = [1, 2, 3, 4];
const age2 = [5, 6, 7, 8];
const age3 = [9, 10, 11, 12];
const totalAge = age.concat(age2).concat([5]).concat(age3);
const totalAge2 = [...age, ...age2, 5, ...age3];
console.log(totalAge);
console.log(totalAge2);


const a = 650;
const b = 450;
const c = 250;
const d = [650, 450, 250];
const max1 = Math.max(a, b, c);
const max2 = Math.max(...d);
console.log(max1);
console.log(max2);