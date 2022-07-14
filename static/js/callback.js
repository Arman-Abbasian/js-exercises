const person=(id,callback)=>{
setTimeout(()=>{
    callback({name:"Ali",weight:75,height:180})
},3000)
};
const bmiCalculation=(weight,height,callback)=>{
 setTimeout(()=>{
    callback(Math.round(weight / Math.pow((height / 100),2)))
 },2000)
};
const informConclusion=(bmi,callback)=>{
    setTimeout(()=>{
        callback(`your bmi is ${bmi}`)
    },2000)
}

person(1,(data)=>{
    console.log(data);
})