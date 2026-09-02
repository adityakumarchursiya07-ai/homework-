//print numbers 

// let num = 10 ;
// for(let i =0;i<=num ;i++){
//     console.log(i);
// }


// print even numbers 

// let num = 20 ;
// for (let i = 1;i <=num ; i++){
// if( i % 2 == 0 ){
//     console.log(i);
// }
// }

// print odd numbers 

// let num = 20 ;
// for (let i = 1;i <=num ; i++){
// if( i % 2 != 0 ){
//     console.log(i);
// }
// }

// reverse counting 

// let num = 20 ;
// for (let i = num ;i >=1 ; i--){

//     console.log(i);

// }

// reverse of number 
// let num = 10 ;
// let sum = 0 ;
// for ( let i = 1 ; i <= num ; i++){
//     sum +=i;
   
// } console.log( sum);

//multiplication of number 
// let num = 2;
// let multiplication = 0;
// for (let i = 1; i <=10 ; i++){
// multiplication += 1
// console.log(num*multiplication);
// }





// part b while loop 
// let num = 10 ;
// let i = 1;
// while (i <= num ){
//     console.log(+i);
//     i++;
// }

// sum of even number 
// let num = 20 
// let i = 1;
// let sum = 0;
// while(i<=num){
//     if (i % 2 ===0){
//         // console.log(i);
//          sum += i ;
//     }
//     i++;
// }    

// console.log(sum);


// sum of even numbers up to 20
// let num = 20; 
// let i = 1;
// while (i <= num) {
//     if ( i ===6 ){
//         break;
//     }
//     console.log(i);
//     i++;
// }


//skip a number 5
// let num = 10; 
// let i = 0;
// while (i < num) {
//       i++;
   
//      if ( i ===5){
//         continue;
//     }    console.log(i);
// }


//greet user 
// function greet ( name){
//     console.log("heloo"+name);
//     // return name;
// }
// greet(" aditya");


// // function of two sum 
// function sum (a,b){
   
//     return  a+b;;
// }
// let a = 10 ;
// let b = 15 ;
// console.log(sum(a,b));

// checks even or odd 
// function checker (num ){
//     if (num % 2 === 0 ){
//         console.log("The number is even ");
//     }
//     else {
//         console.log("The number is odd");
//     }
// }

// checker(57);



// square of number 
// function square (num){
//     return num * num ;
// }
// console.log(square(4));

//largest of two number 

// function large ( num1 , num2){
//     if (num1 > num2){
//         return num1;
//     }
//     else {
//         return num2;}
    
// }
// console.log(large(15,2));


//price and quntity totalPrice
// function totalPrice (price ,quantity){
//     return price*quantity;
// }
// let price = 100;
// let quantity = 5;
// console.log(totalPrice(price,quantity));

//print using A number  using function
// function number ( n ){
//     for ( let i = 1 ; i<n; i++){
//         console.log(i);
      
//     }
//     return n;
// }
// let num = 10;
// console.log(number(num));


// //multiplication of tabel 
// function multiplication  ( num ){
//     for ( let i = 1 ; i<=10; i++){
        
//     console.log(num*i);
//     } 
// }
// let num = 7;
// multiplication(num);

// sum of numbers 
 function sum(num ) {
  let total = 0;
   for ( let  i = 1; i<=10 ; i++) {
    total+= i;
   } 
   return total;
} 
// let num = 10 ;

console.log(sum(5));



