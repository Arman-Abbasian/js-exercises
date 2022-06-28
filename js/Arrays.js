const Amar=[
    {name:"Ali",lastName:"Kamrani",productDetails:{customerName:"PayaClutch",productName:"cover 405",productCost:"125000 R"},isproduced:true,productionTime:3,productionNumber:1000,AverageProduction:250},
    {name:"Ahmad",lastName:"Haghbin",productDetails:{customerName:"PayaClutch",productName:"cover 206",productCost:"505000 R"},isproduced:true,productionTime:2,productionNumber:300,AverageProduction:200},
    {name:"Javid",lastName:"Ganji",productDetails:{customerName:"PayaClutch",productName:"cover Tiba",productCost:"345000 R"},isproduced:false,productionTime:1,productionNumber:0,AverageProduction:100},
    {name:"Javad",lastName:"nosrati",productDetails:{customerName:"PayaClutch",productName:"cover Pride",productCost:"255000 R"},isproduced:true,productionTime:4,productionNumber:1000,AverageProduction:200}
];
const numberOfZarb=Amar.reduce(function(acc,item){
    return acc+item.productionNumber;
},0);
console.log(numberOfZarb);
let summ=0;
const numberOfZarb2= Amar.forEach(element => {
   return element.name;
});
 for(const element of Amar) {
    summ=element.productionNumber + summ;
};
console.log(summ);
console.log(numberOfZarb2);

//map
const performance=Amar.map(item=>{
     return {average:(item.productionNumber / item.productionTime),AverageProduction:item.AverageProduction}
});
console.log(performance)
//filter
const best=performance.filter(item=>{
    return (item.average / item.AverageProduction) >1.4
});
console.log(best)
let a=[];
const summmm=Amar.forEach(item=> a.push(item.productionNumber))
const summmmmmmmmmm=a.reduce((acc,item)=>acc+item,0)
console.log(a,summmmmmmmmmm);
//every , some
const numbers=[1,2,3,4,5,6];
const everyCondition=numbers.every(item=>item>5);
const someCondition=numbers.some(item=>{
   return item>5
})
console.log(everyCondition,someCondition)
//split & join
const joinNumbers=numbers.join("-");
console.log(joinNumbers);
//spread operator
const num1=[1,2,3];
const num2=[4,5,6];
const clone=([...num1,...num2])
console.log(num1.concat(num2))
const objClone=[...Amar]
console.log(clone);
const slice1=clone.slice(2,5);
console.log(clone,slice1);

const splice1=clone.splice(2,3);
console.log(clone,splice1);

const shift1=clone.shift();
console.log(clone,shift1);

const pop1=clone.pop();
console.log(clone,pop1);

const splice2=clone.splice(clone.length,0,10,11);
console.log(clone,splice2);

const push1=clone.push(12);
console.log(clone,push1);

const unshift1=clone.unshift(0);
console.log(clone,unshift1);

//find , findIndex
const findedItem=Amar.find(item=>item.name==="Javad");
console.log(findedItem)

const findedIndex=Amar.findIndex(item=>item.name==="Javad");
console.log(findedIndex)

const findedNumber=numbers.includes(2,1);
console.log(findedNumber);

const findedNumberIndex=numbers.indexOf(4,3);
console.log(findedNumberIndex)
//filter method
const filterdArray=numbers.filter(function(item,index,numbers){
    const sum=numbers.reduce((acc,item)=>acc+item);
    console.log(sum)
    return item>(sum /5)
})
console.log(filterdArray)
const isproducedItems=Amar.filter(item=>item.isproduced)
console.log(isproducedItems);
const personnelPerformance=isproducedItems.map((item)=>{
    return ({name:item.name,lastName:item.lastName,performance:(((item.productionNumber / item.productionTime) / item.AverageProduction)-1)*100})
});
console.log(personnelPerformance);
const totalProducts=isproducedItems.reduce((acc,item)=>{
  return  acc+item.productionNumber
} ,0);
let initVal=0;

for (const item of isproducedItems) {
     initVal+= item.productionNumber;
}
isproducedItems.forEach(element => {
    initVal+= element.productionNumber;
});
const totalPrice=isproducedItems.reduce((price,item)=>{
    const pricee=parseInt(item.productDetails.productCost.split(" ")[0]);
   return price +(pricee*item.productionNumber)
},0)
const price=parseInt(Amar[0].productDetails.productCost.split(" ")[0]);
console.log(totalPrice)
const allpositivee=Amar.some(item=>item.isproduced);
console.log(allpositivee)
//spread operator
const nums=num1.concat(num2);
const nums2=[...num1,...num2,7,8,9];
const nums3=num1.push(num2)
console.log(num1)
console.log(num2)
console.log(nums)
console.log(nums2)
console.log(nums3)

console.log(numbers);

const shift11=numbers.shift();
console.log(shift11);
console.log(numbers);

const splice11=numbers.splice(2,2,"a");
console.log(splice11)
console.log(numbers);

const pop11=numbers.pop();
console.log(pop11);
console.log(numbers);

const unshift11=numbers.unshift(1,2,3);
console.log(unshift11);
console.log(numbers);

const splice12=numbers.splice(numbers.length-2,0,2,5);
console.log(splice12)
console.log(numbers);

const push11=numbers.pop();
console.log(pop11);
console.log(numbers);

const slice=Amar.slice(1,3);
console.log(slice , Amar)

const findd=Amar.findIndex(item=>item.name="Javid");
console.log(findd)