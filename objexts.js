


// //Q no 1 Create a User Object

// const obj = {
//     name: "aditya",
//     email :  "rahul@example.com",
//     role : "devleoper"
// }
// console.log(obj);



// // /2. Access Object Properties Using Dot Notation


// const obj = {
//     name: "mac book m5 pro max ",
//     price :  5000000,
//     category : "electronics"
// }
// console.log(obj.name , obj.price);



// // /3. Access Object Properties Using Bracket Notation


// const obj = {
//     name: "aditya",
//     email :  "aditya@example.com"
   
// }
// console.log(obj["email"]);



// // 4. Dynamic Property Access


// const obj = {
//     name: "aditya",
//     email :  "aditya@C.com"
   
// }
// console.log(obj["name"]);


// // // 5. Update an Object Property


// const obj = {
//     name: "aditya",
//     role : "student"
   
// }
// console.log(obj["name"]);

// obj.role = "developer"

// console.log(obj);


//6. Add a New Property


// const obj = {
//     name: "aditya",
//     email : "aditya@example.com",

// }
// if (obj.name === "aditya" &&   obj.email === "aditya@example.com" ){
//     obj.isloogedIn = true;
// }

// else {
//     obj.isloogedIn = false;
// }
//     console.log(obj);





//7. Get Object Keys


// const obj = {
//     name: "aditya",
//     email : "aditya@example.com",
//     role : "developer"
// }
// console.log(Object.keys(obj));




// //8. Get Object Values
//  const obj = {
//     name : "mac book pro m5 max max max ",
//     price : "25450144514",
//     category : "electronics"
//  }
//  console.log(Object.values(obj));


// //9. Get Object Entries
//  const setting = {
//     theme : "dark",
//     language : "hienglish",
//     notification : true 
//  }

//  console.log(Object.entries(setting));


// 10. Display Object Entries

// const user = {
//  name: "Rahul",
//  email: "rahul@example.com"
// };

// Object.entries(user).forEach(([key , value])=>{
//     console.log(`${key} : ${value}`)
// });




// // 11. Object Destructuring

// const user = {
//  Name: "Rahul",
//  email: "rahul@example.com",
//  role: "developer"
// }

// const { Name , email}= user
// console.log(Name);
// console.log(email);


//12. Destructuring with Renaming

// const product ={
//  Name: "Laptop",
//  price: 50000
// };

// const {   Name : productName ,...product1 }= product;
// console.log(productName);



//13. Create an Object Using Shorthand Properties
// const name = "aditya";
// const email = "rahul@example.com ";
// const role = "deeloper";


// const user ={
//     name,
//     email,
//     role
// }
// console.log(user);


// 14. Destructure Function Parameters

//  const user = {
//      name : "Rahul",
//  email: "rahul@example.com"
//  }

//  function dispalyUser ({name , email}){
//     console.log(`${name}`);
//     console.log(`${email}`);
//  }

//  dispalyUser(user);


// 15. Copy an Object Using Spread


// const user = {
//  name: "Rahul",
//  role: "developer"
// };

// const newUser ={...user} ;
// console.log(newUser);



// 16. Update an Object Using Spread

// const user = {
//  name: "Rahul",
//  role: "student"
// };

// const newUser = {...user , role : "developer"}
// console.log(newUser);


// 17. Combine Two Arrays Using Spread

// const frontend = ["HTML", "CSS", "JavaScript"];
// const backend = ["Node.js", "Express"];

// const fullStack = [...frontend,...backend]
// console.log(fullStack);



// 18. Rest Parameters
 const  user =  {
    Name : "aditya",
    skills : ["html" , "css",  "javascipt"]
   
 }

 function showSkills({Name , skills}){
    console.log(`${Name}`);
    console.log(`${skills.join(',')}`);
    
 }

 showSkills(user)