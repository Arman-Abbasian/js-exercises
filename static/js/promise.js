// function data(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const condition=true;
//             if(condition){
//                 resolve({name:"Ali",height:180,weight:75})
//             }else{
//                 reject(new Error("your id is not in the database"))
//             }
//         },1000)
//     })
// };



// function calc(weight,height){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const condition=true;
//             if(condition){
//                 resolve(Math.abs(weight / Math.pow((height / 100),2)))
//             }else{
//                 reject(new Error("some problec occured"))
//             }
//         },1000)
//     })
// };

// function bm(calc){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const condition=true;
//             if(condition){
//                 resolve("your BMI is "+calc)
//             }else{
//                 reject(new Error("some problec occured"))
//             }
//         },1000)
//     })
// };
// data(45).then((user)=>{
//     calc(user.weight,user.height).then((bmi)=>{bm(bmi)
//         .then((bmm)=>console.log(bmm))})
// })


const person=(id)=>{
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(server="open"){
        resolve({name:"Ali",weight:55,height:180})
    }else{
        reject(new Error("some problem occured"))
    }
    },1000);
   })
    };

    const bmiCalculation=(weight,height)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(server="open"){
                resolve(Math.round(weight / Math.pow((height / 100),2)));
            }else{
                reject(new Error("some problem occured"));
            }
             },1000)
        })
    
    };

    const informConclusion=(bmi)=>{
        return new Promise((resolve,reject)=>{
            let condition="";
            setTimeout(()=>{
                if(bmi<20) condition="less"
                if(bmi>=20 && bmi<25) condition="normal"
                if(bmi>=25) condition="over"
                if(server="open"){
                resolve(`your bmi is ${bmi} and is ${condition}`)
            }else{
                reject(new Error("some problem occured"));
            }
            },1000)
            })
    };

//   person(10)
//   .then(data=>bmiCalculation(data.weight,data.height))
//   .then(bmi=>informConclusion(bmi))
//   .then((bmi)=>console.log(bmi))
//   .catch(err=>console.log(err.message));

const bmi=async()=>{
    try {
        const personn=await person(58);
        const bmiCalculationn=await bmiCalculation(personn.weight,personn.height)
        const informConclusionn=await informConclusion(bmiCalculationn);
        console.log(informConclusionn)
    } catch (error) {
        console.log(error.message)
    }
}
bmi()

