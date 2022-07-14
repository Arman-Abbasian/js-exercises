class Person{
    constructor(_name,_lastName,_age,_weight,_height){
        this.name=_name;
        this.lastName=_lastName;
        this.age=_age;
        this.weight=_weight;
        this.height=_height;
    };
    get fullName(){
        return (this.name+" "+this.lastName)
    }
    get BMI(){
        return (this.weight / ((this.height / 100) **(this.height / 100)))
    }
    set changeName(fullName){
       const nameArray= fullName.split(" ");
        this.name=nameArray[0];
        this.lastName=nameArray[1]
    }
    compleleName(){
       return (this.name+" "+this.lastName)
    }
}

class Personnel extends Person{
    constructor(_name,_lastName,_expertise){
        super(_name,_lastName)
        this.expertise=_expertise
}
get peronnelsExpertise(){
    return `${this.name} ${this.lastName} is a ${this.expertise}`
}

}
const person1=new Person("Ali","momeni",30,75,180);
const personnel1=new Personnel("Ali","javedi","press man");
console.log(person1)
console.log(personnel1);
