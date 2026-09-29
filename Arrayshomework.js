
// //qno 1 Create and Display an Array
// let arr = ["apple" , "mango" , "kiwi" , "bnanna" ,"orange"];
// console.log(arr);



// // //qno 2. Add an Element Using push()
// let arr = [ "html" , "css" ]
// arr.push("javascript");
// console.log(arr);


// // // 3. Remove an Element Using pop()
// let arr = [ "html" , "css" , "javascript" ]
// arr.pop();
// console.log(arr);


// // // 4. Remove the First Element Using shift()
// let arr = [ "red" , "blue" , "grren" ]
// arr.shift();
// console.log(arr);


// // // 5. Remove the First Element Using shift()
// let arr = [  "css" , "javascript"]
// arr.unshift("html");
// console.log(arr);


// // // //6. Add Multiple Elements
// let arr =  ["HTML", "CSS"]

// arr.push("javascript" , "react");
// console.log(arr);



// // // // // 7. Remove an Element Using splice()
// let arr =  ["HTML", "CSS","javascript" , "react"]

// arr.splice([1],[1]);
// console.log(arr);



// // // // // //  Add an Element Using splice()
// let arr =  ["HTML", "javascript" ]

// arr.splice([1],[0],"css");
// console.log(arr);



// // // // 9. Replace an Array Element
// let arr =  ["HTML","css" , "java" ]

// arr.splice([2],[2],"javascript");
// console.log(arr);



// // // // 10. Extract Part of an Array
// let arr =  ["HTML","css" , "java", "react"]

//  let arrNew = arr.slice(1 ,3);
// console.log(arrNew);



// // // 11. Create a Copy Using slice()
// let arr =  ["HTML","css" , "java", "react"]

//  let arrNew = arr.slice();
// console.log(arrNew);


// // //12. Find the Index of an Element
// let arr =  ["HTML","css" , "java", "react"]


// console.log(arr.indexOf("java"));



// // 14. Find an Element Using indexOf()


// let arr = [
//     {name: "rahul", age:22},
//     {name: "aditya", age:19}
// ]


// let obj = arr.find( function (arr){
//     if(arr.name ==="aditya"){
//         return arr;
//     }

// })
// console.log(obj);


// // 15. Find an Index Using findIndex()
// let arr = [
//     {name: "rahul", age:22},
//     {name: "aditya", age:19}
// ]



// let obj = arr.findIndex( function (arr){
//     if(arr.name ==="aditya"){
//         return arr;
//     }

// })
// console.log(obj);




// // // 15. Find an Index Using findIndex()


// let nestedArr = [1,2,[3,4]];
// console.log(nestedArr.flat(2));



// // // 16. Find an Index Using findIndex()


// let nestedArr = [1,[2,[3,4]]];
// console.log(nestedArr.flat(2));



// /Display Every Element Using forEach()

// let arr = [ "red", "green" , "black" ,"blue" , "orange"]
// arr.forEach(arr => {
//     console.log(arr);
// });



// //Display Elements with Their Index

// let arr = [ "HTML","css" , "java", "react"]
// arr.forEach(function (arr , index){
//     console.log(index , arr);
// })



//Update an Array Using Multiple Methods

let arr = ["HTML", "CSS", "JavaScript"]
arr.push("react");
arr.shift(0);
console.log(arr);