class Father{
    constructor(){
        this.fatherName = 'Aminul';
    }
}

class Child extends Father{
    constructor(cName){
        super();
        this.name = cName;
    }
    getFatherName(){
        return this.fatherName;
    }
}

const child1 = new Child('Shuvo');
console.log(child1);
console.log(child1.getFatherName());