const Amar=[
    {name:"Ali",lastName:"Kamrani",productDetails:{customerName:"PayaClutch",productName:"cover 405",productCost:"125000 R"},isproduced:true,productionTime:3,productionNumber:1000,AverageProduction:250},
    {name:"Ahmad",lastName:"Haghbin",productDetails:{customerName:"PayaClutch",productName:"cover 206",productCost:"505000 R"},isproduced:true,productionTime:2,productionNumber:300,AverageProduction:200},
    {name:"Javid",lastName:"Ganji",productDetails:{customerName:"PayaClutch",productName:"cover Tiba",productCost:"345000 R"},isproduced:false,productionTime:1,productionNumber:0,AverageProduction:100},
    {name:"Javad",lastName:"nosrati",productDetails:{customerName:"PayaClutch",productName:"cover Pride",productCost:"255000 R"},isproduced:true,productionTime:4,productionNumber:1000,AverageProduction:200}
];
// const productions=document.querySelector(".productions")
// // const ps=document.querySelectorAll("p");
// // ps.forEach(element => {
// //     (element.remove())
// // });
// const firgH1=document.createElement("h1");
// firgH1.textContent="sisako";
// const div1=document.querySelector("div")
// div1.appendChild(firgH1)
// console.log(firgH1)


// const production=Amar.filter((item)=>{
//     return item.isproduced
// });
// production.forEach(element => {
//    const newp= document.createElement("p");
//    newp.textContent=`Name:${element.name} lastName:${element.lastName}`;
//    productions.appendChild(newp)
// });
// const removeButton=document.querySelector("button");
// removeButton.addEventListener("click",(e)=>{
//     const js=document.querySelectorAll(".js p");
// js.forEach(element => {
//  if(element.textContent.toLocaleLowerCase().includes("js") ){
//     element.remove();
//  } 
// });
// });

// const inputt=document.querySelector("#input1");
// inputt.addEventListener("input",(e)=>{
//    console.log(e.target.value)
// })

const productionContainer=document.querySelector("#productionDIV");
const input1=document.querySelector("#input1");
input1.addEventListener("input",(e)=>{
    productionContainer.innerHTML="";
    const value=e.target.value;
    const filteredProduct=Amar.filter((item)=>{
        return item.productDetails.productName.includes(value)
    });
    filteredProduct.forEach(item=>{
        const newp=document.createElement("p");
        newp.textContent=item.productDetails.productName;
        productionContainer.appendChild(newp)
    })
})