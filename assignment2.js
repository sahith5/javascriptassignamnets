
function getData(uId) {
  let promise=new Promise((resolve,reject)=>
  {
    setTimeout(() => {
    console.log("Fetched the data!");   
     return "skc@gmail.com";
     }, 1000);
     });
   return promise;
  }

console.log("start");
getData("skc").then(email=>
{
console.log("Email id of the user id is: " + email);
console.log("end");
}).catch(err=>console.log(err));


    
