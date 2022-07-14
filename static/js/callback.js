const person=(id,callback)=>{
setTimeout(()=>{
    callback({name:"Ali",weight:55,height:180})
},3000)
};
const bmiCalculation=(weight,height,callback)=>{
 setTimeout(()=>{
    callback(Math.round(weight / Math.pow((height / 100),2)))
 },2000)
};
const informConclusion=(bmi,callback)=>{
    let condition="";
    setTimeout(()=>{
        if(bmi<20) condition="less"
        if(bmi>=20 && bmi<25) condition="normal"
        if(bmi>=25) condition="over"
        callback(`your bmi is ${bmi} and is ${condition}`)
    },2000)
};

const conslusion=person(1,(data)=>{
    bmiCalculation(data.weight,data.height,(bmi)=>{
        informConclusion(bmi,(conc)=>{
           console.log(conc)
        });
    })
});

