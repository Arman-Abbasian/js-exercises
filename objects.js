/*
const color={
    radius:10,
    location:{
        x:8,
        y:10
    },
    move(){
        return("move")
    }
}
console.log(color)
//factory function
function colorr(radius,x,y){
    return{
        radius,
        location:{
        x,
        y
    },
        move(){
        return("move")
    } 
    }
};
//constructor function
function Colorr(radius,x,y){
    this.radius=radius,
    this.location={
        x,
        y
    },
    this.move=function(){
        return("move")
    }

};
const colorr1=colorr(20,20,20);
const colorr2=new Colorr(10,10,10)
console.log(colorr2)
*/
//constructor function
function Personenel(name,age,record,part,customer,interest1,interest2){
    this.name=name;
    this.age=age;
    this.record=record;
    this.experience=()=>{
        const point=record*10;
        return point;
    }
    this.part={name:part,customer:customer}
    this.interests=[interest1,interest2];
    return this;
};
//factory function
function personnel(name,age,record,part,customer,interest1="nothing",interest2="nothing"){
    const personnel={
        name,
        age,
        record,
        experience:function(){
        const point=record*10;
        return point;
    },
        part:{name:part,customer:customer},
        interests:[interest1,interest2]
    }
    return personnel;
}
const obj={nam:"ali"};
const Kafrashi=new Personenel("mahmood",45,3,"cover405","payaClutch","music","swimming");
const Hasani= Personenel.apply(obj,["Maryam",32,1,"cover405","payaClutch","music","swimming"]);
const Abbasian=personnel("Arman",30,8,"cover206","payaClutch","music","swimming")
const Firouzian=personnel.call("Ali",38,15,"coverTiba","payaClutch","music","swimming")
console.log(Kafrashi.experience());
console.log(Hasani)
console.log(Abbasian)
console.log(Firouzian)

//add,delete,edit property and methos to objects

const zarif=personnel.apply({},["parsa",26,4,"cover 206","paya","sport"]);
console.log(zarif)
zarif.name="pouya"
delete zarif.age;
zarif.height=1.93;
console.log(zarif)
console.log(Hasani.constructor())
const namee=new Boolean(0);
console.log(namee)
//refrence type & primitive type
let name1="ALi";
let name2=name1;
name2="Ahmad"
console.log(name1,name2)

const namee1={name:"ALi"};
const namee2=namee1;
namee2.name="Ahmad"
console.log(namee1)

const namee3={name:"ALi"};
const namee4={...namee3};
namee4.name="Ahmad"
console.log(namee4)

const namee5={name:"ALi"};
const namee6=Object.assign({},namee5);
namee6.name="Ahmad"
console.log(namee5);

//Object
const user={
    name:"Ali",
    weight:75,
    height:1.80,
    BMI(){
        const bmi=(this.weight) / (this.height)**2;
        return bmi;
    }

};
console.log(Object.entries(user))

//Ex-3
const blogPost={
    title:"Kozert",
    body:"Ich bin im konzert hall",
    author:"Arman Abbasian",
    views:20,
    like:3,
    dislike:0,
    comment:[
        {author:"Ali",title:"okay",body:"Ich bin dafur"},
        {author:"Ahmad",title:"nein",body:"Ich bin nicht"}
    ],
    isLive:true,
};
function Blogg(title,body,author){
    this.title=title;
    this.body;body;
    this.author=author;
    this.views=0;
    this.like=0;
    this.dislike=0;
    this.comment=[];
    this.isLive=true;
    return this;
}
const blogg1=new Blogg("stadt","Ich bin best","Ahmad")
console.log(blogg1)
blogg1.comment.push({name:"Ali"})
blogg1.comment.push({name:"Ahmad"})
console.log(blogg1)