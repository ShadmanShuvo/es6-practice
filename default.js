// default parameter
function add(num1, num2 = 1){
    return num1 + num2;
}
const total = add(12, 2);
console.log(total);


function createUser(name, age =18){

const user = {};

user.name = name;

user.age = age;

return user;

}

console.log(createUser('ore'));