const show_modal=document.querySelector(".show_modal");
const box=document.querySelector(".box");
const modal=document.querySelector(".modal");
const hide_button=document.querySelector(".hide_button");
const confirm_button=document.querySelector(".confirm_button")
show_modal.addEventListener("click",()=>{
    box.style.transform="translateY(20vh)";
    modal.style.display="block";
});
function hide(){
    box.style.transform="translateY(-100vh)";
    modal.style.display="none";
}
function confrim(){
    box.style.transform="translateY(-100vh)";
    modal.style.display="none";
    window.alert("confirm");
}
hide_button.addEventListener("click",hide);
confirm_button.addEventListener("click",confrim)