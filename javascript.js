const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle hamburger active state
    hamburger.classList.toggle('active');
    // Toggle navLinks visibility
    navLinks.classList.toggle('open');
});

// const box = document.querySelector('.box');
// box.addEventListener('click', () => {
//   window.location.href = '/Bhagwat_geeta/bhagwat_geeta.html';
// });


// let n = 7;
// let space = n-1;
// let stars = 1;

// for(let i = 0; i < n; i++){

//     let rows = "";

//     for(j = 0; j < space; j++){
//       rows += " ";
//     }

//     for(k = 0; k < stars; k++){
//       rows += "*";
//     }
//     console.log(rows)
//     if(i < Math.floor(n/2)){
//       space--;
//       stars += 2;
//     }
//     else{
//       space++;
//       stars -= 2;
//     }
// }


// let n = 7;
// let space = 0;
// let stars = n;

// for(let i = 0; i < n; i++){

//     let rows = "";

//     for(j = 0; j < space; j++){
//       rows += " ";
//     }

//     for(k = 0; k < stars; k++){
//       rows += "*";
//     }

//     console.log(rows)
//     if(i < Math.floor(n/2)){
//       space++;
//       stars -= 2;
//     }

//     else{
//       space--;
//       stars += 2;
//     }

// }

// let n = 8;
 
// let fib = [0,1]

// for(let i = 2; i < n; i++){
//   fib.push(fib[i-1] + fib[i-2])
// }

// let seperator = ", ";
// let output = '';

// for(let i = 0; i < fib.length; i++){
//     output += fib[i];

//     if(i<fib.length-1){
//       output += seperator;
//     }
//   }

// console.log(output)

// let input  = prompt("enter a list of integers seperated by spaces: ")
// let list = input.split(' ').map(Number)

// result = 0;
// for(let i = 0; i < list.length; i++){
//     result += list[i];
// }
// console.log(result);

// let list = [1,3,2,4,7,5,6]
// for(let i = 0; i < list.length; i++){
//     for(let j = i+1; j < list.length; j++){
//         if(list[i] > list[j]){
//           let temp = list[i];
//           list[i] = list[j];
//           list[j] = temp;
//         }
//     }

// }
// console.log(list);

// Write, Edit and Run your Javascript code using JS Online Compiler

// let n = prompt("Enter ");
// let space = n-1;
// let stars = 1;

// for(let i = 0; i < n; i++){
//     let temp = "";
//     for(let j = 0; j < space; j++){
//         temp += " ";
//     }
//     for(let k = 0; k < stars; k++){
//         temp += "*"; 
//     }

//     console.log(temp);
//     if(i < Math.floor(n/2)){
//         space--;
//         stars+=2;
//     }
//     else{
//         space++;
//         stars-=2;
//     }
// }
