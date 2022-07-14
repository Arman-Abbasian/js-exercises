function Personnel(name,lastName,age,height,weight){
    this.name=name;
    this.lastName=lastName;
    this.age=age
    this.height=height;
    this.weight=weight;
    this.BMI=function(){
         return this.height / Math.pow(this.weight,0.5)
    }
};
class Personnell{
    constructor(name,lastName,age,height,weight){
    this.name=name;
    this.lastName=lastName;
    this.age=age
    this.height=height;
    this.weight=weight;
};
    BMI(){
         return this.height / Math.pow(this.weight,0.5)
    }
}

function personelll(name,lastName,age,height,weight){
    return{
       name:name,
       lastName:lastName,
       age:age,
       height:height,
       weight:weight, 
       weight:function(){
        return this.height / Math.pow(this.weight,0.5)
       }
    }
}
const personnel1=new Personnel("Ali","Mousavi",25,180,75);
const personnell1=new Personnell("Ahmad","Alian",30,160,78);
const personelll1=new personelll("Hamed","Moradi",42,197,60)
console.log(personnel1);
console.log(personnell1);
console.log(personelll1);