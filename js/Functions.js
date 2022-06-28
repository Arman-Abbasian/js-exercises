// speak();
// speak2();

// function speak(){
//     console.log("speak")
// };
// const speak2=function(){
//     console.log("speak2")
// };
// speak()
// speak2()
function sum(...args){
    return args.reduce((acc,curr)=>acc+curr);  
};
let baseCost=100000;
const sum3=function(){
    console.log(arguments)
}
console.log(sum(3,4,5,6));
sum3(2,4)
const finalCost=(...args)=>{
    let discount=1;
    const totalCost=args.reduce((acc,curr)=>acc+curr);
    parseInt(totalCost)
    totalCost>(2*baseCost) ? discount=0.3:
    totalCost>(1.5*baseCost) ? discount=0.2:
    totalCost>(1.1*baseCost) ? discount=0.1:
    discount=1;
    console.log(totalCost);
    console.log(discount)
    return totalCost*(1-discount)
};
const firstOne=finalCost(20000,50000,600000);
console.log(firstOne);
function restOp(total,discountt){
    discountt=discountt||0;
return total*(1-discountt);
}
const dis1=restOp(3,0.3);
console.log(dis1)

//getter & setter
const user={
    name:"Ali",
    lastName:"amouie",
    averageAmar:200,
    tolid:15000,
    time:3.5,
    totoalTolid(zarib){
      return  this.tolid*this.time * zarib
    },
    set performance(value){
      const spl= value.split(" ");
       return spl;
    },
    get performance(){
        
    }
}
const func1=(...args)=>{
    if(args.length>2){
        throw new Error("just two input")
    }
    if(val1==undefined || val2===undefined){
        throw new Error("we need two input")
    }
    if(typeof val1 ==="number" && typeof val2==="number"){
        if (val1>8) {
            throw new Error ('first input should not be more than 8')
        }
        if(val2>15){
            throw new Error('second input should not be more than 15')
        }
    }else{
        throw new Error("inputs are not number")
    }
    try{
        return val1 + val2
    }catch(err){
        console.log(typeof err)   
    }
};
// func1(5,4);

//var,let,const

function func2(){
    var first=25;
    let second=15;
    const third=45;
    {
        var four=10;
        let five=20;
        const six=30;
        console.log(second,third)
    }
    console.log(four)
};
func2()
console.log(four);
window.fou


// user.performance="Ali molaie";
// console.log(user.performance);