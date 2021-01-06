'use strict';

//даэться строка з набором цифр, треба вернути строку з 
//найбільшим і найменшим числом 

// function highAndLow(numbers){

//   const numbersArr = numbers.split(' ') ;
//   const highestNum = Number(Math.max(...numbersArr));
//   const lowestNum = Number(Math.min(...numbersArr));
//   return `${highestNum} ${lowestNum}`;
// }

// console.log(highAndLow("1 2 3 4 5"));   // return "5 1"
// console.log(highAndLow("1 2 -3 4 5"));  // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")) ; // return "9 -5"



//треба повернути імена з 4 буквами

// function friend(friends){
//   const myFriends = [];

//   for (const friend of friends) {
//     console.log(friend);
//     if(friend.length === 4){
//       myFriends.push(friend);
//     }
//   }
//   return myFriends;
// }

// console.log(friend(["Ryan", "Kieran", "Mark"]) ); //["Ryan", "Mark"]

//найкращий варіант

// function friend(friends){
//   return friends.filter(n => n.length === 4)
// }

// console.log(friend(["Ryan", "Kieran", "Mark"]) ); //["Ryan", "Mark"]



// нульові індекси підмасивів додаєм в 
//змінну, а перші віднімаємо 

// const number = function(busStops){
//  let total = 0;
//   for (const busStop of busStops) {
//     total += busStop[0] - busStop[1];
//   }
//   return total;
// }

// console.table(number([[10,0],[3,5],[5,8]]));//5

// //найпопулярніший варіант

// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);




// Your task is to make a function that can take any non-negative 
//integer as an argument and return it with its digits in 
//descending order. Essentially, rearrange the digits to create the 
//highest possible number.

// function descendingOrder(n){
//   let result = 0;
//   const arr = String(n).split('');
//   // console.log(arr);
// for (const el of arr) {
//   console.log(el);
// }
// }
// console.log(descendingOrder(1));//1
// console.log(descendingOrder(123456789));//987654321