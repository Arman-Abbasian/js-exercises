const buttons=document.querySelectorAll(".btn");
const value=document.querySelector("#value span");
let init=0;
const clickEvent=()=>{

}
buttons.forEach(element => {
    element.addEventListener("click",()=>{
        element.classList.contains("increment")?init=init+1:
        element.classList.contains("decrement")?init=init-1:
        init=0;
        value.textContent=init;
    });
});
const arr1=["Ali",'javad'];
const mapp=arr1.map((item)=>{
    return item.toLowerCase();
});
console.log(mapp)
let nam="Ahmad";
const conclusion=mapp.includes(nam.toLocaleLowerCase());
console.log(conclusion)
