const increment=document.querySelector(".increment");
const decrement=document.querySelector(".decrement");
const reset=document.querySelector(".reset");
const value=document.querySelector("#value span")
let init=0;

increment.addEventListener("click",()=>{
    init++;
    value.textContent=init;
    init > 0 ? value.style.color="green":value.style.color="red";
});
decrement.addEventListener("click",()=>{
    init--;
    value.textContent=init;
    init > 0 ? value.style.color="green":value.style.color="red";
});
reset.addEventListener("click",()=>{
    init=0;
    value.textContent=init;
    init > 0 ? value.style.color="green":value.style.color="red";
});

