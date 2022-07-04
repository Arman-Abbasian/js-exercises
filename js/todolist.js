const addButton=document.querySelector(".todo-button");
const input=document.querySelector(".todo-input");
const container=document.querySelector(".todo-container");
const deleteButton=document.querySelector(".fa-trash-can");
const checkButton=document.querySelector(".fa-square-check");
const filterSelect=document.querySelector(".filter-todos");
const todo=document.querySelector(".todo");

addButton.addEventListener("click",addTodo);
container.addEventListener("click",chechRemove)
// deleteButton.addEventListener("click",deleteTodo);
// checkButton.addEventListener("click",todoStatus);
filterSelect.addEventListener("change",filterTodos);

function addTodo(e){
    e.preventDefault();
    let value =input.value;
    if(value==="")alert("please add some text")
    else{
        const div=document.createElement("div");
        div.classList.add("todo");
        const divChildren=`
        <li>${value}</li>
        <span><i class="fa-regular fa-square-check"></i></span>
        <span><i class="fa-regular fa-trash-can"></i></span>`;
        div.innerHTML=divChildren;        
        container.appendChild(div);
        input.value="";
    }   
};

function chechRemove(e) {
    const classList=[...e.target.classList];
    const item=e.target.parentElement.parentElement;
    classList.forEach(element => {
       if (element==='fa-trash-can') {
        item.remove();
       }else if(element==='fa-square-check'){
        item.classList.toggle("complete")
       }
    });
} 

function filterTodos(e){
    let filterValue=e.target.value;
    let children=container.childNodes;
    let childrenArray=[...children];
    if(filterValue==="completed"){
        console.log("completed")
    childrenArray.forEach(element => {
        const elementClassListArray=[...element.classList];
        console.log(elementClassListArray)
        elementClassListArray.includes("complete")?element.style.display="flex":element.style.display="none"
    });
}else if(filterValue==="uncompleted"){
    console.log("uncompleted")
    childrenArray.forEach(element => {
        const elementClassListArray=[...element.classList];
        console.log(elementClassListArray)
        elementClassListArray.includes("complete")?element.style.display="none":element.style.display="flex"
    });
}else{
    childrenArray.forEach(element => {
        element.style.display="flex"
    });
}
}

// function deleteTodo(e){
//     const childNodes=container.childNodes;
//     const children=[...childNodes];
//     childNodes.forEach(element => {
//         console.log(element)
//     });

      
// }
// function todoStatus(e){
//     const checkButton=e.target;
//     const todo=checkButton.parentElement.parentElement;
//     console.log(todo);  
// }
