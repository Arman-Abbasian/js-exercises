function data(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const condition=true;
            if(condition){
                resolve({name:"Ali",height:180,weight:75})
            }else{
                reject(new Error("your id is not in the database"))
            }
        },1000)
    })
};

function calc(weight,height){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const condition=true;
            if(condition){
                resolve(Math.abs(weight / Math.pow((height / 100),2)))
            }else{
                reject(new Error("some problec occured"))
            }
        },1000)
    })
};

function bm(calc){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const condition=true;
            if(condition){
                resolve("your BMI is "+calc)
            }else{
                reject(new Error("some problec occured"))
            }
        },1000)
    })
};
data(45).then((user)=>{
    calc(user.weight,user.height).then((bmi)=>{bm(bmi)
        .then((bmm)=>console.log(bmm))})
})