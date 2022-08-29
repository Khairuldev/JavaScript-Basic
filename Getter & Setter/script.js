let person = {
    firstname : "khairul",
    lastname : "Anwar",
    fullname : function (){
        return `${this.firstname} ${this.lastname}`;
    }
}

person.firstname = "Rozi";
console.info(person.fullname());

// getter & Setter

//getter

let person2 = {
    firstName : "khairul",
    lastName : "Anwar",
    get fullName (){
        return `${this.firstName} ${this.lastName}`;
    }
}

person2.firstName = "Dedi";
console.info(person2.fullName);


//setter

let person3 = {
    firstName1 : "khairul",
    lastName1 : "Anwar",
    get fullName1 (){
        return `${this.firstName1} ${this.lastName1}`;
    },
    set fullName1 (value){
        let array = value.split(" ");
        this.firstName1 =  array[0];
        this.lastName1 = array[1];
    }
};

person3.fullName1 = "budi nugraha";
console.table(person3);

person3.fullName1 = "sigit arrya";
console.table(person3);

person3.fullName1 = "budi nugraha";
console.table(person3);





