// function loginUser(email,password,callback) {
//     setTimeout(()=>{ 
//     console.log("data is ready")
//     callback({email})
// } ,1000);
// };
// function getUserCourses(email,callback) {
//     setTimeout(()=>{ 
//     callback(["course1","course2","course3"])
// } ,1000);
// };
// function getCourseDetail(course,callback) {
//     setTimeout(()=>{ 
//     callback(console.log(course[2]))
// } ,1000);
// };


// const func1=()=>{
//     return 2*5;
// }
// const user=loginUser('Arma@.com',1234,(user)=>{
//     console.log(user);
//     getUserCourses(user.email,(courses)=>{
//         console.log(courses);
//         getCourseDetail(courses)
//     })
// });


function validationEmail(email,callback){
    setTimeout(()=>{
        callback({email});
        console.log(email)
            } ,1000);
};
function validationPassword(password,callback){
    setTimeout(()=>{
        callback(true);
        console.log(password)
    },1000)
};
function getCourses(callback){
    setTimeout(()=>callback(['course 1','course 2','course 3']),1000)
}
const user1=validationEmail("A@.com",(email)=>{
    console.log(email);
    validationPassword(1234,(passwordCheck)=>{
        console.log(passwordCheck);
        getCourses((courses)=>console.log(courses));
    })
});
