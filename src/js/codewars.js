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

//НЕ ЗАКІНЧЕННО


// function descendingOrder(n){
//   let newN = n.toString().split(' ').sort(function(a,b){return b-a}).join();
//   return parseInt(newN);
// }
// console.log(descendingOrder(1));//1
// console.log(descendingOrder(123456789));//987654321


/*Complete the solution so that it returns true if the first argument(string) 
passed in ends with the 2nd argument (also a string).*/


// function solution(str, ending){
  
//   if (ending === ''){
//     return true;
//   } else {
//     return str.slice((-ending.length)) === ending;
//   }
// }


// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// solution('abc', '') // returns true

// //найпопулярніший варіант

// function solution(str, ending){
//   return str.endsWith(ending);
// }




/*You are going to be given a word. Your job is to return the
 middle character of the word. If the word's length is odd, 
 return the middle character. If the word's length is even, return 
 the middle 2 characters. */


//  function getMiddle(s) {
//   if(s.length % 2 === 0) {
//     return s.slice(s.length / 2 - 1, s.length / 2 + 1);
//   } else if (s.length % 1 === 0) {
//     return s.slice(s.length / 2, s.length / 2 + 1);
//   }
// }

// console.log(getMiddle("A"));// should return "A"
// console.log(getMiddle("testing"));//should return "t"
// console.log(getMiddle("test") );// should return "es"


//найпопулярніший варіант

// function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

//і ще один цікавий 
// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }

// console.log(getMiddle("A"));// should return "A"
// console.log(getMiddle("testing"));//should return "t"
// console.log(getMiddle("test") );// should return "es"




/*You are given an odd-length array of integers, in which all of them are the same, 
except for one single number.

Complete the method which accepts such an array, and returns 
that single different number.

The input array will always be valid! (odd-length >= 3)*/

// function stray(numbers) {
//   for (let i = 0; i < numbers.length; i += 1){

//     if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
//       return numbers[0];
//     } else if (numbers[0] !== numbers[i]) {
      
//       return numbers[i];
//     }
//   }
// }

// console.log(stray([1, 1, 2])); //2
// console.log(stray([17, 17, 3, 17, 17, 17, 17])); //3
// console.log(stray([5, 1, 1])); //5

//найпопулярніший варіант

// function stray(numbers){
//   for (var i in numbers){
//      if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
//   }
// }




/*Given two numbers and an arithmetic operator (the name of it, as a string), return
the result of the two numbers having that operator used on them.
a and b will both be positive integers, and a will always be the 
first number in the operation, and b always the second.
The four operators are "add", "subtract", "divide", "multiply".*/

// function arithmetic(a, b, operator){
//   let result = 0;
//   switch (operator) {

//     case "add":
//       result = a + b;
//       break;

//     case "subtract":
//       result = a - b;
//       break;

//     case "multiply":
//       result = a * b;
//       break;

//     case "divide":
//       result = a / b;
//       break;
//   }
//   return result;
// }

// console.log(arithmetic(5, 2, "add") );      // returns 7
// console.log(arithmetic(5, 2, "subtract") );// returns 3
// console.log(arithmetic(5, 2, "multiply")); // returns 10
// console.log(arithmetic(5, 2, "divide"));   // returns 2.5

// //найпопулярніший варіант

// function arithmetic(a, b, operator){
//   switch(operator) {
//     case 'add':
//       return a + b;
//     case 'subtract':
//       return a - b;
//     case 'multiply':
//       return a * b;
//     case 'divide':
//       return a / b;
//   }
// }

/*Every month, a random number of students take the driving test at 
Fast & Furious (F&F) Driving School. To pass the test, a student 
cannot accumulate more than 18 demerit points.

At the end of the month, F&F wants to calculate the average demerit 
points accumulated by ONLY the students who have passed, rounded 
to the nearest integer.

Write a function which would allow them to do so. If no students 
passed the test that month, return 'No pass scores registered.'.*/

// function passed(list) {
// const passed = [];
// for (const el of list) {
//   if (el <= 18) {
//     passed.push(el);
//   } 
// }
// if (passed.length === 0) {
//   return 'No pass scores registered.';
// }
// const average = passed.reduce((result, amount, index, array) => {
//   result += amount;
//   if( index === array.length-1) { 
//     return result/array.length;
//   }else { 
//     return result;
//   }
// });

// return Math.round(average);
// } 

// console.log(passed([10,10,10,18,20,20] ));//12
// console.log(passed([40,22,22,20,20] ));//12


// //найпопулярніший варіант
// function passed (list) { 

//   //Good luck!
//     var res = list.filter(v => v <= 18);
//     return res.length ? Math.round(res.reduce((s, v) => s + v, 0)/res.length) : 'No pass scores registered.';
//   } 


/*You will be given an array of objects (associative arrays in PHP) 
representing data about developers who have signed up to attend the
next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.*/

//НЕ ЗАВЕРШЕНО!!!!!!!!!!!!!!!!!!

// function isSameLanguage(list) {
//   let result;
// if (Object.keys(list[0]).includes('language') && Object.keys(list[1]).includes('language')
//    && Object.keys(list[2]).includes('language')) {
//   if(Object.keys(list[0]).language === Object.keys(list[1]).language 
//     && Object.keys(list[0]).language === Object.keys(list[2]).language ) {
//     result = true;
//   } else result = false;
// } else {
//   result = false;
// }

// return result;
// console.log(result);
//   // let result;

//   // list.forEach(obj => {

//   //   const objKeys = Object.keys(obj);
//   //   const objValues = Object.values(obj)

//   //   if (objKeys.includes('language')) {
      
//   //     const value = list[0].language;
//   //     if(objValues.includes(value)) {
//   //       result = true;
//   //     }

//   //   } else {
//   //     result = false;
//   //   }
//   // });
  
//   // return result;
// //=======================================================
// // const lang = list[1].language;
// // for (const el of list){
// // if(el.language !== lang) {
// //     return false;
// //   } else {
// //     return true;
// //   }
// // }
// }

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];

// var list2 = [
//   { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
//   { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
//   { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
// ];
// var list3 = [
//   { firstName:"Emily",lastName:"N.", country:"Ireland", continent:"Europe", age:38, language :"Java"},
//   { firstName:"Joao", lastName:"D.", country:"Portugal", continent:"Europe", age:35, language:"Java"},
//   { firstName:"Gabriel", lastName:"T.", country :"Luxembourg", continent:"Europe", age:28}];
  
//   var list4 = [
//     { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
//     { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'C' },
//     { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
//   ];

//   console.log(isSameLanguage(list1));
//   console.log(isSameLanguage(list2));
//   console.log(isSameLanguage(list3));
//   console.log(isSameLanguage(list4));



/*Give you an obj, it can be 3 types: string, number and 
number array, Check that they are symmetrical or not, return
 a boolean value.*/


//  //НЕ ЗАВЕРШЕНО!!!!!!!!!!!!!!!!!!

//  function sc(obj){
    
//   if(typeof obj === 'object'){
//     return obj.slice(0, (obj.length-1)/2) === obj.slice(obj.length/2+1);
//   }

//     const stringObj = String(obj);
   
//     if(stringObj.length === 2) {
//       return stringObj.slice(0,1) === stringObj.slice(-1);
//     }
//     return stringObj.slice(0, (stringObj.length-1)/2) === stringObj.slice(stringObj.length/2+1);
// }

// console.log(sc(""));//true
// console.log(sc("1"));//true
// console.log(sc("11"));//true
// console.log(sc("12"));//false
// console.log(sc([1,2,3,4,5]));//false
// console.log(sc([]));//true
// console.log(sc(-1));//false
// console.log(sc(11));//true
// console.log(sc(15));//false
// console.log(sc([11,12,13,12,11])); // true


/*You probably know the "like" system from Facebook and other 
pages. People can "like" blog posts, pictures or other items.
 We want to create the text that should be displayed next to 
 such an item.

Implement a function likes :: [String] -> String, which must 
take in input array, containing the names of people who like 
an item. It must return the display text as shown in the 
examples:*/


// function likes(names) {
  
//   if(names.length === 0) {
//     return 'no one likes this';
//   } else if (names.length >= 4) {
//     const rest = names.slice(2).length;
//     return `${names[0]}, ${names[1]} and ${rest} others like this`
//   } else if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`
//   } else if (names.length === 2) {
//     return `${names[0]} and ${names[1]} like this`
//   } else {
//     return `${names[0]} likes this`
//   }
// }

// console.log(likes([])); // 'no one likes this';
// console.log(likes(['Peter']));// 'Peter likes this';
// console.log(likes(['Jacob', 'Alex'])); //'Jacob and Alex like this';
// console.log(likes(['Max', 'John', 'Mark'])); //'Max, John and Mark like this';
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); //'Alex, Jacob and 2 others like this';


/*Given n, take the sum of the digits of n. If that value has more 
than one digit, continue reducing in this way until a single-digit 
number is produced. The input will be a non-negative integer.*/

// function digital_root(n) {
  
//   const fn = num => {
//     let result = 0;
//     const arr = String(num).split('');
//     for (const el of arr) {
//         result += Number(el);
//    }
//    return result;
//   }

//  let total = fn(n);

//  do {
//   total = fn(total);
//  } while(String(total).split('').length > 1);

//  return total;
// }

// console.log(digital_root(16));   //-->  1 + 6 = 7
// console.log(digital_root(942));   //-->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// console.log(digital_root(132189));   //-->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// console.log(digital_root(493193));  //-->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


// //найпопулярніший варіант

// function digital_root(n) {
//   return (n - 1) % 9 + 1;
// }


/*Given a month as an integer from 1 to 12, return to which 
quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter;
 month 6 (June), is part of the second quarter; and month 11 
 (November), is part of the fourth quarter.*/

//  const quarterOf = (month) => {

//  if(month >= 1 && month <= 3) {
//   return 1;
//  } else if(month >= 4 && month <= 6) {
//   return 2;
//  } else if(month >= 7 && month <= 9) {
//   return 3;
//  } else {
//   return 4;
//  }
// }

// console.log(quarterOf(3)); //1
// console.log(quarterOf(8)); //3
// console.log(quarterOf(11)); //4

// // //найпопулярніший варіант

// const quarterOf = m => Math.ceil(m/3);



/*Your goal in this kata is to implement a difference 
function, which subtracts one list from another and 
returns the result.

It should remove all values from list a, which are 
present in list b.*/


// function arrayDiff(a, b) {

//   let difference = a.filter(x => !b.includes(x));
 
//   return difference;
// }

// console.log(arrayDiff([1,2],[1]));// [2]
// console.log(arrayDiff([1,2,2,2,3],[2]));//[1,3]
// console.log(arrayDiff([], [4,5]));//[]
// console.log(arrayDiff([1,8,2], []));//[1,8,2]
// console.log(arrayDiff([1,8,2], [1,2]));//[8]