require("dotenv").config();
const obj={
    name:"ali",
    productions:["cover 405","cover 206","cover Tiba"],
    meth(){
        console.log(this);
    },
    proList(){
        this.productions.forEach(function() {
            console.log(this)
        }.bind(obj));
    }
};
obj.proList();
const func1=()=>{
    console.log(this)
};
func1().bind();


console.log(process.env.PORT);

