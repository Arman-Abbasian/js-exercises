/*
// speed checker
function speedChecker(speed){
const speedLimit=70;
const baze=5;
if(speed<=speedLimit) return "ok!";
    const point=Math.floor(((speed - speedLimit) / baze))
    if(point===0) return "Danger!"
    if(point<12) return point
    return "you are suspended"
}
const carr={name:"206",speed:73};
let speedChecker1= speedChecker(carr.speed);
console.log(speedChecker1)

// fizz buzz mit //? if
const FizzBuzz=(number)=>{
if (typeof number!=="number") return "not a number";
if(number % 5 === 0 && number % 3 === 0) return "FIZZBUZZ";
if(number % 5 === 0) return "BUZZ";
if(number % 3 === 0) return "FIZZ";
return "not divisible"
}
// fizz buzz mit //? ternary
const FizzBuzzz=(number)=>{
  const conclusion= typeof number!=="number" ? "not a number":
    (number % 5 === 0 && number % 3 === 0)? "FIZZBUZZ":
    number % 5 === 0 ? "BUZZ":
    number % 3 === 0 ? "FIZZ":
     "not divisible";
     return conclusion;
    }

const FizzBuzz1=FizzBuzzz(225);
console.log(FizzBuzz1)
*/
/* 
//for in
const cars=[
    {Brand:"BMW",Name:"i7",color:"blue"},
    {Brand:"BMW",Name:"i5",color:"red"},
    {Brand:"BMW",Name:"i2",color:"green"}
];
const car={Brand:"BMW",Name:"i7",color:"blue"};
const colors=["red","green","blue"];
for (const key in car) {
    console.log(`${key} : ${car[key]}`)      
    }
for (const index in colors) {
    console.log(`${index} : ${colors[index]}`)        
    }
    for (const parameter of colors) {
        console.log(parameter)
    }
    cars.forEach(element => {
        console.log(element.Name)
    });
    for (const parameter of cars) {
        console.log(parameter.color)
    }
    let number=0;
    for (let i = 0; i < 10; i++) {
        number+=i;
    }
    let j=0
    while (j<10) {
        number+=j;
        j++;
    }
    let z=0;
    do {
        number+=z
        z++;
    } while (z<10);
    console.log(number)
    console.log(number)
    console.log(number) 
    // objects
    const sisako={
        name:"sisako",
        scope:"pressing and assembly",
        personnel:50,
        product:"reinf",
        productCost:1000,
        hasBranch:false,
        maneger:null,
        totalIncome:function(){
            let income=0
            let tax=1.1
            for (const month in this.sending) {
                 income += this.sending[month]*this.productCost
                    
                }
                let finalCost=income *tax
                return finalCost
            },
            sending:{farvardin:3000,ordibehest:2000,khordad:100},
            units:["QA","QC","PP"],
            condition:function(){
                let isGood=this.totalIncome()>1000000?this.totalIncome():"is bad";
                return isGood;
            },
        }   
        console.log(sisako.condition());

        //logical non-boolean
        const conclusion=""||0||false||null||undefined||NaN||1;
        console.log(conclusion)
        let choosedColor=null;
        const defaultColor="red";
        const finalColor=choosedColor||defaultColor;

        const finalColorIf=()=>{
            if (choosedColor!==null) {
                return choosedColor  
        }
        return defaultColor
    }
    const finalColorTenary=choosedColor!==null?choosedColor:defaultColor
        console.log(finalColor)
        console.log(finalColorIf())
        console.log(finalColorTenary)
*/
        