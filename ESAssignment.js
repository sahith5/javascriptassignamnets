const printBill=(name,bill)=>{
    
    return `Hi ${name} ,please pay: ${bill}`;
}

 console.log(printBill("hello",200))


const printName = (name) =>  “Hi” + name;

console.log(printName("hello"))

const person = {name:"Noam Chomsky",
                age:92
            }
          let {name,age}=person;
          console.log(`name ${name} ,age ${age}`);

