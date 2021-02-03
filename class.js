class Students{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Agrani';
    }
}

const student1 = new Students(1, 'Shadman');
const student2 = new Students(2, 'Shuvo');
console.log(student1);
console.log(student2);