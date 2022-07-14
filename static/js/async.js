
 function person(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            if(condition=true){ 
                resolve({name:"Ali",height:180,weight:75})    
            }else{
                reject(new Error("some problems occured"))
            }
    });
})
};

function data(weight,height){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            if(condition=true){ 
                resolve(Math.abs(weight / Math.pow((height / 100),2)))    
            }else{
                reject(new Error("some problems occured"))
            }
    });
})
};

function conc(calc){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            if(condition=true){ 
                resolve("your BMI is "+calc)    
            }else{
                reject(new Error("some problems occured"))
            }
    });
})
};

const bmi= async()=>{
try {
    const personn=await person(2);
const dataa=await data(personn.weight,personn.height);
const concc=await conc(dataa);
console.log(concc)
} catch (error) {
    console.log(error)
}
}
person(2).then((dataa)=>data(dataa.weight,dataa.height)).then((concc)=>console.log(concc));


