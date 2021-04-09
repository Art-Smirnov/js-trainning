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

//=============================================================

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

//=============================================================

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

//=============================================================

// Your task is to make a function that can take any non-negative
//integer as an argument and return it with its digits in
//descending order. Essentially, rearrange the digits to create the
//highest possible number.

// function descendingOrder(n){

// const numArr = String(n).split('').sort(function(a,b){return b-a}).join('');
// return parseInt(numArr);

// }
// console.log(descendingOrder(1));//1
// console.log(descendingOrder(123456789));//987654321

// //найпопулярніший варіант

// function descendingOrder(n){
//   return parseInt(String(n).split('').sort().reverse().join(''))
// }

//=============================================================

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

//=============================================================

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

//=============================================================

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

//=============================================================

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

//=============================================================

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

//=============================================================

/*You will be given an array of objects (associative arrays in PHP) 
representing data about developers who have signed up to attend the
next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.*/

// function isSameLanguage(list) {
//   const isEqual = lang => lang.language === list[0].language;

//   return list.every(isEqual);
// }

// var list1 = [
//   {
//     firstName: 'Daniel',
//     lastName: 'J.',
//     country: 'Aruba',
//     continent: 'Americas',
//     age: 42,
//     language: 'JavaScript',
//   },
//   {
//     firstName: 'Kseniya',
//     lastName: 'T.',
//     country: 'Belarus',
//     continent: 'Europe',
//     age: 22,
//     language: 'JavaScript',
//   },
//   {
//     firstName: 'Hanna',
//     lastName: 'L.',
//     country: 'Hungary',
//     continent: 'Europe',
//     age: 65,
//     language: 'JavaScript',
//   },
// ];

// var list2 = [
//   {
//     firstName: 'Mariami',
//     lastName: 'G.',
//     country: 'Georgia',
//     continent: 'Europe',
//     age: 29,
//     language: 'Python',
//   },
//   {
//     firstName: 'Mia',
//     lastName: 'H.',
//     country: 'Germany',
//     continent: 'Europe',
//     age: 39,
//     language: 'Ruby',
//   },
//   {
//     firstName: 'Maria',
//     lastName: 'I.',
//     country: 'Greece',
//     continent: 'Europe',
//     age: 32,
//     language: 'C',
//   },
// ];
// var list3 = [
//   {
//     firstName: 'Emily',
//     lastName: 'N.',
//     country: 'Ireland',
//     continent: 'Europe',
//     age: 38,
//     language: 'Java',
//   },
//   {
//     firstName: 'Joao',
//     lastName: 'D.',
//     country: 'Portugal',
//     continent: 'Europe',
//     age: 35,
//     language: 'Java',
//   },
//   {
//     firstName: 'Gabriel',
//     lastName: 'T.',
//     country: 'Luxembourg',
//     continent: 'Europe',
//     age: 28,
//   },
// ];

// var list4 = [
//   {
//     firstName: 'Mariami',
//     lastName: 'G.',
//     country: 'Georgia',
//     continent: 'Europe',
//     age: 29,
//     language: 'Python',
//   },
//   {
//     firstName: 'Mia',
//     lastName: 'H.',
//     country: 'Germany',
//     continent: 'Europe',
//     age: 39,
//     language: 'C',
//   },
//   {
//     firstName: 'Maria',
//     lastName: 'I.',
//     country: 'Greece',
//     continent: 'Europe',
//     age: 32,
//     language: 'C',
//   },
// ];

// console.log(isSameLanguage(list1)); //true
// console.log(isSameLanguage(list2));
// console.log(isSameLanguage(list3)); //false
// console.log(isSameLanguage(list4));

// //найпопулярніший варіант
// function isSameLanguage(list) {
//   return list.every(e => e.language === list[0].language);
// }

//=============================================================

/*Give you an obj, it can be 3 types: string, number and 
number array, Check that they are symmetrical or not, return
 a boolean value.*/

//  //НЕ ЗАВЕРШЕНО!!!!!!!!!!!!!!!!!!

// function sc(obj){
//   if(typeof obj === 'object' && obj.length % 2 !== 0) {
//       if (obj.length === 0) {
//         return true;
//       } else {
//         return String(obj.slice(0, (obj.length-1)/2))  === String(obj.slice(obj.length/2+1).reverse());
//       };

//      } else if(typeof obj === 'object' && obj.length % 2 === 0) {
//       if (obj.length === 0) {
//         return true;
//      } else {

//       return String(obj.slice(obj.length/2).reverse()) === String(obj.slice(0, (obj.length)/2));
//      }
//     }
//      const stringObj = String(obj);

//       for (let i = 0; i < stringObj.length / 2; i++) {
//      if (stringObj[i] != stringObj[stringObj.length - i - 1]) {
//          return false;
//      }
//     }
//     return true;
//   }

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
// console.log(sc([11,12,21,11]));//false
// console.log(sc([1,77,60,46,24,5,56,56,5,24,46,60,77,1]));//true

//кращий варыант

// function sc(obj){
//   return Array.isArray(obj) ? obj.toString() === obj.reverse().toString()
//    : obj.toString().split('').reverse().join('') === obj.toString();
// }

//=============================================================

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

//=============================================================

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

//=============================================================

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

//=============================================================

/*There was a test in your class and you passed it. 
Congratulations!
But you're an ambitious person. You want to know 
if you're better than the average student in your class.

You receive an array with your peers' test scores. 
Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of 
your class's points. For calculating the average
 point you may add your point to the given array!*/

//  function betterThanAverage(classPoints, yourPoints) {
//   let allPoints = classPoints;
//   allPoints.push(yourPoints);
//   let total = 0;

//   for (let i = 0; i < allPoints.length; i += 1) {
//     total += allPoints[i];
//   }

//   return total/allPoints.length < yourPoints;

//  }
// console.log(betterThanAverage([2, 3], 5));//true
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));//false

//найпопулярніший варіант

// function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
// }

//=============================================================

/*Write a function that accept 3 parameters, health, 
reduction, and damage. Your task is calculate the 
damage taken by your enemy and return 'Survived!' 
if result > 0, otherwise return 'Dead!'.*/

//НЕ ЗАВЕРШЕНО!!!!!!!!!!!!!!!!!!

// function currentLife(health, reduction, damage) {
//   const currentHealth = Number(health.slice(0,3));
//   const maximumHealth = Number(health.slice(-3));

//   console.log(damage.includes('%'));
//   if(damage.includes('%')) {
//    const dmg = maximumHealth * (Number.parseFloat(damage) / 100);

//    if(Math.round(currentHealth - (dmg * (reduction / 100))) > 0 ) {
//      return 'Survived!';
//    } else {
//     return 'Dead!';
//    }
//   } else {
//     if(Math.round(currentHealth - (Number(damage) * (reduction / 100)) > 0)) {
//       return 'Survived!';
//    } else {
//     return 'Dead!';
//     }
//   }
// }

// console.log(currentLife('246/977', 42, '322'));//'Survived!'
// console.log(currentLife('246/977', 42, '44%'));//'Dead!'

//=============================================================

/*If we list all the natural numbers below 10 that are 
multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of
 these multiples is 23.

Finish the solution so that it returns the sum of all 
the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only 
count it once. Also, if a number is negative, return
 0(for languages that do have them)*/

//  function solution(number){
//   let result = []
//   let sum = 0;
//   for (let i = 1; i < number; i += 1) {
//     if(i % 3 === 0) {
//       result.push(i);
//       // console.log(i);
//     } else if (i % 5 === 0) {
//       result.push(i);
//       // console.log(i);
//   }
// }
// result.forEach(obj =>
//  sum += obj
// );
//   return sum;
// }

// console.log(solution(10));
// console.log(solution(30));

// //найпопулярніший варіант

// function solution(number){
//   var sum = 0;

//   for(var i = 1;i< number; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//       sum += i
//     }
//   }
//   return sum;
// }

//=============================================================

/*Boltabek starts his first day at the new job.
 He is going to refactor some data structures 
 created by his ancestor on this position, who 
 seems to be not known about the data normalization.

The first task is rather easy, write a function
 that expands the usernames packed in the one
 string:*/

//НЕ ЗАВЕРШЕНО!!!!!!!!!!!!!!!!!!

//  const expandUsernames = data => {
//   const result = [];

//   for (let i = 0; i < data.length; i += 1) {
//     const splited = data[i][0].split(',');

//     const splitedNames = [];

//    for(const el of splited) {
//       if(el.length > 0) {
//         splitedNames.push(el);
//       }
//     }

//     for (let j = 0; j < splitedNames.length; j += 1) {

//       if(splitedNames.length > 1) {
//         let subArr = [];
//         subArr.push(splitedNames[j], data[i][1]) ;
//         result.push(subArr)
//       } else {
//         result.push(data[i]);
//       }
//     }
//   }
//   return result;
// }

// console.log(expandUsernames([
//   ['Marek,Honza',2],
//   ['Petr',4],
//   ['Marija,Daniel',8],
//   ['Mr. Karasek,Lukáš,Jan',16],
//   ['Igor',32],
//   ['Petra,Evgeniy',64],
//   ['Karel',128],
// ]));

// console.log(expandUsernames([[',,,John,,Boris,,,,', 64]]));

//=============================================================

/*You are given an array with positive numbers 
and a non-negative number N. You should find 
the N-th power of the element in the array with 
the index N. If N is outside of the array, then 
return -1. Don't forget that the first element 
has the index 0.*/

// function index(array, n){
//   if (n < array.length) {
//     return Math.pow(array[n], n);
//   } else {
//     return -1;
//   }
// }

// console.log(index([1, 2, 3, 4] ,2));//9
// console.log(index([1, 2, 3] ,3));//-1

// //найпопулярніший варіант

// const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;

//=============================================================

/*Provided is a function find which accepts two parameters 
in the following order: array, element and returns the index
 of the element if found and "Not found" otherwise. Your 
 task is to shorten the code as much as possible in order 
 to meet the strict character count requirements of the Kata. 
 (no more than 85) You may assume that all array elements are
  unique.*/

// const find = (array, element) => array.includes(element) ?
// array.indexOf(element) : "Not found";

// console.log(find([2,3,5,7,11],5));//2

// //найпопулярніший варіант
// const find = (a, x) => (x = a.indexOf(x)) < 0 ? 'Not found' : x

//=============================================================

/*You are required to create a simple calculator that returns 
the result of addition, subtraction, multiplication or division 
of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the 
operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to
 the list above a message "unknown value" must be returned.*/

// function calculator(a, b, sign) {
//   if (isNaN(a) || isNaN(b)) {
//     return 'unknown value';
//   }
//   switch (sign) {
//     case '+':
//       return a + b;
//     case '-':
//       return a - b;
//     case '*':
//       return a * b;
//     case '+':
//       return a + b;
//     case '/':
//       return a / b;
//     default:
//       return 'unknown value';
//   }
// }

// console.log(calculator(1,2,"+")) ; //=> result will be 3
// console.log(calculator(1,2,"&")) ; //=> result will be "unknown value"
// console.log(calculator(1,"k","*")); //=> result will be "unknown value"

//найпопулярніший варіант

// function calculator(a, b, sign) {
//   try {
//     return eval(a + sign + b);
//   } catch (e) {
//     return 'unknown value';
//   }
// }

//=============================================================

/*Complete the function that takes two integers (a, b, where a < b)
 and return an array of all integers between the input parameters,
 including them.*/

// function between(a, b) {
//   const arr = [];
//   for (let i = a; i <= b; i += 1) arr.push(i);
//   return arr;
// }

// console.log(between(1, 4)); //[1, 2, 3, 4]
// console.log(between(-2, 2)); //[-2, -1, 0, 1, 2]

//=============================================================

/*Tribonacci Sequence*/

// function tribonacci(signature, n) {
//   const result = [];
//   result.push(signature[0], signature[1], signature[2]);

//   if (n === 0) {
//     return [];
//   } else if (n === 1) {
//     return [signature[0]];
//   } else if (n === 2) {
//     return [signature[0], signature[1]];
//   } else if (n === 3) {
//     return [signature[0], signature[1], signature[2]];
//   } else {
//     do {
//       result.push(result.slice(-3).reduce((a, b) => a + b, 0));
//     } while (result.length < n);
//     for (let i = 3; i < n; i += 1) {}
//   }

//   return result;
// }

// console.log(tribonacci([1, 1, 1], 10)); //[1,1,1,3,5,9,17,31,57,105]
// console.log(tribonacci([300, 200, 100], 0)); //[]
// console.log(tribonacci([1, 1, 1], 1)); //[1]
// console.log(tribonacci([6, 10, 13], 1)); //[6]

//найпопулярніший варіант

// function tribonacci(signature, n) {
//   for (var i = 0; i < n - 3; i++) {
//     // iterate n times
//     signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
//   }
//   return signature.slice(0, n); //return trib - length of n
// }

//=============================================================

/*You have to create a function calcType, which receives 3 arguments: 
2 numbers, and the result of an unknown operation performed on them (also a number).

Based on those 3 values you have to return a string, that describes 
which operation was used to get the given result.

The possible return strings are: "addition", "subtraction", 
"multiplication", "division".*/

// function calcType(a, b, res) {
//   if (a + b === res) {
//     return 'addition';
//   } else if (a - b === res) {
//     return 'subtraction';
//   } else if (a * b === res) {
//     return 'multiplication';
//   } else if (a / b === res) {
//     return 'division';
//   }
// }

// console.log(calcType(1, 2, 3)); //'addition'
// console.log(calcType(10, 4, 40)); //'multiplication'

//=============================================================

/*Write a function called sumIntervals/sum_intervals() 
that accepts an array of intervals, and returns the sum
 of all the interval lengths. Overlapping intervals 
 should only be counted once.

Intervals
Intervals are represented by a pair of integers in the 
form of an array. The first value of the interval will 
always be less than the second value. Interval example: 
[1, 5] is an interval from 1 to 5. The length of this 
interval is 4.*/

//НЕ ЗАВЕРШЕНО!!!!!!!!!!!!!!!!!!

// console.log(
//   sumIntervals([
//     [1, 2],
//     [6, 10],
//     [11, 15],
//   ]),
// ); // => 9

// console.log(
//   sumIntervals([
//     [1, 4],
//     [7, 10],
//     [3, 5],
//   ]),
// ); // => 7

// console.log(
//   sumIntervals([
//     [1, 5],
//     [10, 20],
//     [1, 6],
//     [16, 19],
//     [5, 11],
//   ]),
// ); // => 19

//=============================================================

/*Given an array (a list in Python) of integers and an integer n, 
find all occurrences of n in the given array and return another 
array containing all the index positions of n in the given array.

If n is not in the given array, return an empty array [].

Assume that n and all values in the given array will always 
be integers.*/

// const findAll = (array, n) => {
//   const result = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === n) {
//       result.push(i);
//     }
//   }
//   return result;
// };

// console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3)); //[2, 4]
// console.log(findAll([6, 9, 4, 82, 11], 3)); //[]

// //найпопулярніший варіант

// const findAll = (nums, find) => nums
//   .reduce((acc, num, index) => num === find ? [...acc, index] : acc, [])

//=============================================================

/*I'm creating a scoreboard on my game website, but I want 
the score to be displayed as tally marks instead of Roman 
numerals. Write a function that translates the numeric score 
into tally marks.

My tally mark font uses the letters a, b, c, d, e to 
represent tally marks for 1, 2, 3, 4, 5, respectively.
 I want a space and line break ( ) after each completed tally (5).

Assume that the score you receive will be an integer.
 This function should return an HTML string that I can 
 insert into my website that represents the correct score.*/

// var scoreToTally = function (score) {
//   switch (score) {
//     case 1:
//       return 'a';
//     case 2:
//       return 'b';
//     case 3:
//       return 'c';
//     case 4:
//       return 'd';
//   }

//   const result = [];
//   for (let i = 1; i <= score; i += 1) {
//     if (i % 5 === 0) {
//       result.push('e <br>');
//     }
//   }
//   switch (score % 5) {
//     case 1:
//       result.push('a');
//       break;
//     case 2:
//       result.push('b');
//       break;
//     case 3:
//       result.push('c');
//       break;
//     case 4:
//       result.push('d');
//       break;
//   }
//   return result.join('');
// };

// console.log(scoreToTally(3)); //'c'
// console.log(scoreToTally(10)); //'e <br>e <br>'
// console.log(scoreToTally(11)); //'e <br>e <br> a'

// //найпопулярніший варіант

// scoreToTally = score =>
//   'e <br>'.repeat((score / 5) | 0) + ['', 'a', 'b', 'c', 'd'][score % 5];

//теж класний варіант

// const scoreToTally = score => {
//   let str = '';
//   for(let i = score; 0 < i; i -= 5) {
//     if(i >= 5) str += 'e <br>';
//     if(i === 4) str += 'd';
//     if(i === 3) str += 'c';
//     if(i === 2) str += 'b';
//     if(i === 1) str += 'a';
//   }
//   return str;
// };

//=========================================================================
/*The following code could use a bit of object-oriented artistry.
While it's a simple method and works just fine as it is, in a 
larger system it's best to organize methods into classes/objects.
(Or, at least, something similar depending on your language)

Refactor the following code so that it belongs to a Person class/object. 
Each Person instance will have a greet method. The Person instance should be 
instantiated with a name so that it no longer has to be passed into each greet 
method call.*/

// class Person {
//   constructor(myName) {
//     this.name = myName;
//   }
//   greet(yourName) {
//     return 'Hello ' + yourName + ', my name is ' + this.name;
//   }
// }

// var joe = new Person('Joe');

// joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
// console.log(joe.greet('Kate'));
// joe.name; // should == 'Joe'

//=========================================================================

/*Write simple .camelCase method (camel_case function in PHP, CamelCase 
  in C# or camelCase in Java) for strings. All words must have their
  first letter capitalized without spaces.*/

// String.prototype.camelCase = function () {
//   if (this === '') {
//     return '';
//   }
//   const arrOfWords = this.split(' ');
//   const result = [];
//   for (const word of arrOfWords) {
//     if (word === '') {
//       continue;
//     }

//     result.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return result.join('');
// };

// // console.log('hello case'.camelCase()); //HelloCase
// // console.log('camel case word'.camelCase()); // CamelCaseWord
// // console.log(''.camelCase()); // ""
// console.log(' camel case word'.camelCase()); //"CamelCaseWord"

//найпопулярніший варіант

// String.prototype.camelCase=function(){
//   return this.split(' ').map(function(word){
//    return word.charAt(0).toUpperCase() + word.slice(1);
//  }).join('');
// }

//=========================================================================
/*I will give you an integer (N) and a string. Break the string up into as 
many substrings of N as you can without spaces. If there are leftover 
characters, include those as well.*/

// function stringBreakers(n, string) {
//   const splitedArrFromStr = string.split(' ').join('').split('');
//   const splitedArr = [];
//   for (let i = 0; i < splitedArrFromStr.length; i += n) {
//     splitedArr.push(splitedArrFromStr.slice(i, i + n).join(''));
//     console.log(splitedArr);
//   }
//   return splitedArr.join('\n');
// }

// console.log(stringBreakers(5, 'This is an example string'));

// //найпопулярніший варіант
// function stringBreakers(n, s){
//   return s.replace(/\s/g,'').replace(new RegExp('.{'+n+'}','g'),'$&\n').trim()
// }

//=========================================================================
/*As you can tell, each Student has some fives, tens, and twenties. 
  Your job is to return the name of the student with the most money. 
  If every student has the same amount, then return "all".*/

//   class Student {
//     constructor(name, fives, tens, twenties) {
//       this.name = name;
//       this.fives = fives;
//       this.tens = tens;
//       this.twenties = twenties;
//     }
//   }
//   function mostMoney(students) {
//     const studentsArr = [];
//     let result;

//     for (const student of students) {
//       const studentValues = Object.values(student);
//       const studentName = student.name;

//       const studentTotalSum =
//       studentValues[1] * 5 + studentValues[2] * 10 + studentValues[3] * 20;
//       studentsArr.push({ name: studentName, sum: studentTotalSum });
//     }
//     if (
//       studentsArr.every(
//         e => e.sum === studentsArr[0].sum && studentsArr.length > 1,
//         )
//         ) {
//           return 'all';
//         }

//         return studentsArr.sort((a, b) => b.sum - a.sum)[0].name;
//       }

//       const andy = new Student('Andy', 0, 0, 2);
//       const stephen = new Student('Stephen', 0, 4, 0);
//       const eric = new Student('Eric', 8, 1, 0);
//       const david = new Student('David', 2, 0, 1);
//       const phil = new Student('Phil', 0, 2, 1);
//       const cam = new Student('Cameron', 2, 2, 0);
//       const geoff = new Student('Geoff', 0, 3, 0);

//       console.log(mostMoney([andy, stephen, eric, david, phil])); //"Eric"
//       console.log(mostMoney([cam, geoff, andy, stephen, eric, david, phil])); //"Eric"
//       console.log(mostMoney([andy])); //'Andy'
//       console.log(mostMoney([cam, geoff])); //"all"

// //найпопулярніший варіант
// function mostMoney(s) {
//   s.sort((x,y)=>sum(y)-sum(x));
//   if(s.length>1 && sum(s[0])==sum(s[1]))return 'all';
//   return s[0].name;
// }

// const sum = (s) => (s.fives*5)+(s.tens*10)+(s.twenties*20);

//========================================================================
/*Given two arrays of strings, return the number of times each 
string of the second array appears in the first array.*/

// function solve(a, b) {
//   for (let i = 0; i < b.length; i += 1) {
//     if (a.includes(b[i])) {
//       return a.reduce((acc, el) => {
//         if (el === b[i]) {

//           acc.push(el);
//           return acc;
//         }
//       }, []);
//     } else {
//       continue;
//     }
//   }
//==================================================
// return b.forEach(element => {

//   if (a.includes(element)) {
//     return a.reduce((acc, el) => {
//       if (el === element) {
//         acc.push(el);
//         return acc;
//       }
//     }, []);
//   }
// });
// }

// console.log(solve(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap'])); // [2, 1, 0]);
// console.log(solve(['abc', 'xyz', 'abc', 'xyz', 'cde'], ['abc', 'cde', 'xyz'])); // [2, 1, 2])
// console.log(
//   solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']),
// ); // [2, 0, 1])
// console.log(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['abc'])); // [0])
// //(el === element ? acc.push(el) : acc.push(0))

//==========================
/**Write a function named sumDigits which takes a number as input and returns the
 * sum of the absolute value of each of the number's decimal digits./ */
// function sumDigits(number) {
//   const posNum = number < 0 ? number * -1 : number;
//   return posNum
//     .toString()
//     .split('')
//     .map(el => Number(el))
//     .reduce((acc, value) => {
//       acc += value;
//       return acc;
//     });
// }

// console.log(sumDigits(10)); // Returns 1
// console.log(sumDigits(99)); // Returns 18
// console.log(sumDigits(-32)); // Returns 5

//==========================

/**Reversed Words
 * Complete the solution so that it reverses all of the words within the string passed in./ */

// function reverseWords(str) {
//   return str.split(' ').reverse().join(' ');
// }

// console.log(
//   reverseWords('The greatest victory is that which requires no battle'),
// ); // should return "battle no requires which that is victory greatest The"

//=====================================
/**Return the average of the given array rounded down to its nearest integer./ */
// function getAverage(marks) {
//   return Math.floor(marks.reduce((acc, mark) => acc + mark) / marks.length);
// }
// console.log(getAverage([1, 2, 3, 4, 5])); //3

//=============================================================
/**Double Sort
 * Simple enough this one - you will be given an array. The values in the array will 
 * either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending 
order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings./ */

// function dbSort(a) {
//   let ascendingNumbers = a
//     .filter(item => typeof item === 'number')
//     .sort((a, b) => a - b);
//   let alphabeticOrderStrings = a
//     .filter(item => typeof item === 'string')
//     .sort();
//   return [...ascendingNumbers, ...alphabeticOrderStrings];
// }
// console.log(dbSort([6, 2, 3, 4, 5])); //[2, 3, 4, 5, 6]
// console.log(dbSort(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2])); //[0,2,2,"Apple","Banana","Mango","Orange"])
// console.log(dbSort([3, 5, 5, 14, 32]));

// //цыкавий варыант

// const dbSort = ( arr ) => [...arr.filter(el => typeof el === 'number').sort((a, b)=> a - b)]
//                           .concat([...arr.filter(el => typeof el === 'string').sort()])

//================================================================
/**Numbers to Objects
 * You will be given an array of numbers.

For each number in the array you will need to create an object.

The object key will be the number, as a string. The value will be the corresponding character code, as a string.

Return an array of the resulting objects.

All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty./ */

// function numObj(s) {
//   return s.map(num => {
//     const obj = {};
//     const key = `${num}`;
//     obj[key] = String.fromCharCode(num);

//     return obj;
//   });
// }

// console.log(numObj([118, 117, 120])); //[{'118':'v'}, {'117':'u'}, {'120':'x'}]);
// console.log(numObj([101, 121, 110, 113, 113, 103])); //[{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]);

// //Самий популярний варіант

// function numObj(s){
//   return s.map(n => {
//     return { [n]: String.fromCharCode(n) };
//   });
// }

//==============================================
/**Add property to every object in array/ */

/**Your task is to add a new property usersAnswer to every object in the array questions.
 * The value of usersAnswer should be set to null. The solution should work for array of any length./ */

// var questions = [
//   {
//     question: "What's the currency of the USA?",
//     choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
//     corAnswer: 0,
//   },
//   {
//     question: 'Where was the American Declaration of Independence signed?',
//     choices: ['Philadelphia', 'At the bottom', "Frankie's Pub", 'China'],
//     corAnswer: 0,
//   },
// ];

// questions.map(question => (question.usersAnswer = null));
// console.table(questions);

//===============================================================
/**Break camelCase/ */

/**Complete the solution so that the function will break up camel
 * casing, using a space between words./ */
// complete the function
// function solution(string) {
//   return string.split('').reduce((acc, letter, i) => {
//     return string.charAt(i) === string.charAt(i).toUpperCase()
//       ? acc + ' ' + letter
//       : acc + letter;
//   });
// }

// console.log(solution('camelCasing')); //  ==  "camel Casing"

//===============================================================
/**Convert string to camel case/ */

/**Complete the method/function so that it converts dash/underscore
 * delimited words into camel casing. The first word within the output
 * should be capitalized only if the original word was capitalized
 * (known as Upper Camel Case, also often referred to as Pascal case)./ */

// const toCamelCase = str =>
//   str
//     .split(/-|_/)
//     .reduce((acc, word) => acc + word.charAt(0).toUpperCase() + word.slice(1));
// // .filter(letter => letter !== '-' && letter !== '_')
// // .join('');

// console.log(toCamelCase('the-stealth-warrior')); // returns "theStealthWarrior"

// console.log(toCamelCase('The_Stealth_Warrior')); // returns "TheStealthWarrior"

//===============================================================
/**Convert all the cases!/ */

/**In this kata, you will make a function that converts between camelCase,
 * snake_case, and kebab-case./ */

//не завершено!!!!!!!!!!!!!!

// function changeCase(identifier, targetCase) {
//   if (targetCase === 'camel') {
//     return identifier
//       .split(/-|_/)
//       .reduce(
//         (acc, word) => acc + word.charAt(0).toUpperCase() + word.slice(1),
//       );
//   }

//   if (targetCase === 'snake') {
//     return identifier
//       .split('')
//       .reduce((acc, letter, i) => {
//         return identifier.charAt(i) === identifier.charAt(i).toUpperCase()
//           ? acc + '_' + letter
//           : acc + letter;
//       })
//       .toLowerCase();
//   }

//   if (targetCase === 'kebab') {
//     if (identifier.includes('-') && identifier.includes('_')) {
//       return undefined;
//     }

//     if (identifier.includes('_')) {
//       return identifier
//         .split('')
//         .map(letter => letter.replace('_', '-'))
//         .join('');
//     }

//     return identifier
//       .split('')
//       .reduce((acc, letter, i) => {
//         return identifier.charAt(i) === identifier.charAt(i).toUpperCase()
//           ? acc + '-' + letter
//           : acc + letter;
//       })
//       .toLowerCase();
//   }
// }

// console.log(changeCase('snakeCase', 'snake'));
// //('snake_case');
// console.log(changeCase('some-lisp-name', 'camel'));
//"someLispName"
// console.log(changeCase('map_to_all', 'kebab'));
// //"map-to-all"
// console.log(changeCase('doHTMLRequest', 'kebab'));
// //('do-h-t-m-l-request');
// console.log(changeCase('invalid-inPut_bad', 'kebab'));
// //undefined;
// console.log(changeCase('valid-input', 'huh???'));
// //undefined;
// console.log(changeCase('', 'camel'));
// //('');

//===============================================
/**Testing 1-2-3/ */

/**Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between./ */

// var number = function (array) {
//   return array.map((item, i) => `${i + 1}: ${item}`);
// };

// console.log(number([])); // => []
// console.log(number(['a', 'b', 'c'])); // => ["1: a", "2: b", "3: c"]

/**[BF] To UpperCase/ */

//якісь непонятки з кодворсом

// function runBF(string) {
//   return string.split('').reduce((acc, letter, i) => {
//     return string.charAt(i) !== string.charAt(i).toUpperCase()
//       ? acc + letter.toUpperCase()
//       : acc + letter;
//   });
// }

// console.log(runBF('Hello'));

//================================================================

/**Rearange Number to Get its Maximum/ */

/**Create function that takes one positive three digit integer and
 * rearranges its digits to get maximum possible number. Assume that
 * argument is integer. Return null (nil for ruby) if argument is not valid./ */

// var maxRedigit = function (...num) {
//   if (
//     num.toString().split('').includes('-') ||
//     num.join('') === '0' ||
//     num.toString().split('').length <= 2 ||
//     num.toString().split('').length > 3
//   ) {
//     return null;
//   }

//   return Number(
//     [...num]
//       .toString()
//       .split('')
//       .sort((a, b) => b - a)
//       .join(''),
//   );
// };

// console.log(maxRedigit('83-3'));
// console.log(maxRedigit('123'));
// console.log(maxRedigit(99));
// console.log(maxRedigit(1110));

// //найкращий варіант

// var maxRedigit = function (num) {
//   if (num < 100 || num > 999) return null;
//   return +num
//     .toString()
//     .split('')
//     .sort((a, b) => b - a)
//     .join('');
// };

/**Where my anagrams at? */

/**What is an anagram? Well, two words are anagrams of each other if they
 * both contain the same letters. */

/**Write a function that will find all the anagrams of a word from a list.
 * You will be given two inputs a word and an array with words. You should
 * return an array of all the anagrams or an empty array if there are none. */

// function anagrams(word, words) {
//   return words.filter(
//     w => w.split('').sort().join('') === word.split('').sort().join(''),
//   );
// }
// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // => ['aabb', 'bbaa']

// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // => ['carer', 'racer']

// console.log(anagrams('laser', ['lazing', 'lazy', 'lacer'])); //=> []

//===============================
/**Where is my parent!?(cry) */
/**Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb". */

// function findChildren(dancingBrigade) {
//   return dancingBrigade
//     .toLowerCase()
//     .split('')
//     .sort()
//     .map((l, i, arr) => (l !== arr[i - 1] ? l.toUpperCase() : l))
//     .join('');
// }

// console.log(findChildren('beeeEBb'));
// console.log(findChildren('uwwWUueEe'));

//====================================================
/**Anagram difference */

/**Given two words, how many letters do you have to remove from them to make them anagrams? */

//не завершено

// function anagramDifference(w1, w2) {
//   let firstWordsLettersMismatch = w1.split('').reduce((acc, letter) => {
//     if (!w2.split('').includes(letter)) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);

//   const n = w1.split('').filter((letter) => letter !== );

//   const secondWordsLettersMismatch = w2.split('').reduce((acc, letter) => {
//     if (!w1.split('').includes(letter)) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);
//   console.log(firstWordsLettersMismatch);
//   console.log(secondWordsLettersMismatch.toString().split('').length);

//   return firstWordsLettersMismatch + secondWordsLettersMismatch;
// }
// // console.log(anagramDifference('ab', 'cd')); //4
// // console.log(anagramDifference('', '')); //0
// // console.log(anagramDifference('d', '')); //1
// console.log(anagramDifference('aab', 'a')); //2

//================================================================

/**Decrypt this school cipher */

/**School students Alice and Bob send messages to each other. 
 * To ensure that their messages are not readable by teachers 
 * they encrypt text with simple algorythm. Every message contains 
 * only latin letters (lowercase and uppercase), digits from 0 to 9 and space symbol.

So, the encryption algorythm is:

Reverse the whole string.
Replace every letter with it ASCII code in quotes (A to '65', h to '104' and so on).
Insert digits and spaces as is. */

//не завершено

// const decrypt = str => {
//   return str
//     .split("'")
//     .filter(e => e !== '')
//     .map(e => {
//       console.log(e.charAt(0));
//     });
// };

// console.log(decrypt("'101''99''105''108''65'")); // "Alice"
// console.log(decrypt('30 71')); // "17 03"

//================================================================

/**Pete, the baker */

/**Write a function cakes(), which takes the recipe (object) and the available
 * ingredients (also an object) and returns the maximum number of cakes Pete can
 *  bake (integer). For simplicity there are no units for the amounts (e.g. 1
 * lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not
 * present in the objects, can be considered as 0. */

// function cakes(recipe, available) {
//   let result = [];
//   return Object.keys(recipe).reduce((acc, ingredient, i) => {
//     if (!Object.keys(available).includes(ingredient)) {
//       return 0;
//     }
//     result.push(available[ingredient] / recipe[ingredient]);
//     return Math.floor(Math.min(...result));
//   }, 0);
// }

// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 },
//   ),
// ); //2

// console.log(
//   cakes(
//     { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 },
//   ),
// ); //0

//===============================

/**Remove All The Marked Elements of a List */

/**Define a method/function that removes from a given array of integers
 * all the values contained in a second array. */

// const remove = function (integer_list, values_list) {
//   return integer_list.filter(num => !values_list.includes(num));
// };

// const integer_list = [1, 1, 2, 3, 1, 2, 3, 4];
// const values_list = [1, 3];
// console.log(remove(integer_list, values_list)); // [2, 2, 4]);

//======================================================
/**Simple Substitution Cipher Helper */

/**A simple substitution cipher replaces one character from an alphabet
 * with a character from an alternate alphabet, where each character's position
 * in an alphabet is mapped to the alternate alphabet for encoding or decoding. */

// function SubstitutionCipher(abc1, abc2) {
//   this.encode = function (str) {
//     return str.split('').reduce((acc, letter) => {
//       if (!abc2.includes(letter)) {
//         return (acc += letter);
//       }

//       return (acc += abc2[abc1.indexOf(letter)]);
//     }, '');
//   };
//   this.decode = function (str) {
//     return str.split('').reduce((acc, letter) => {
//       if (!abc1.includes(letter)) {
//         return (acc += letter);
//       }
//       return (acc += abc1[abc2.indexOf(letter)]);
//     }, '');
//   };
// }

// var abc1 = 'abcdefghijklmnopqrstuvwxyz';
// var abc2 = 'etaoinshrdlucmfwypvbgkjqxz';

// var sub = new SubstitutionCipher(abc1, abc2);
// console.log(sub.encode('abc')); // => "eta"
// console.log(sub.encode('xyz')); // => "qxz"
// console.log(sub.encode('aeiou')); // => "eirfg"
// console.log(sub.encode('aeiou8')); // => "eirfg8"

// console.log(sub.decode('eta')); // => "abc"
// console.log(sub.decode('qxz')); // => "xyz"
// console.log(sub.decode('eirfg')); // => "aeiou"
// console.log(sub.decode('eir_fg')); // => "aei_ou"

// //most popular solution
// function SubstitutionCipher(f, t) {
//   this.encode = function (s) {
//     return s.split('').map(function(_){ return t[f.indexOf(_)] || _; }).join('');
//   }
//   this.decode = function (s) {
//     return s.split('').map(function(_){ return f[t.indexOf(_)] || _; }).join('');
//   }
// }

//==========================================================================

/**Caesar Cipher Helper */

/**Write a class that, when given a string, will return an uppercase string with each
 * letter shifted forward in the alphabet by however many spots the cipher was initialized to. */

//НЕ ЗАВЕРШЕНО!!!!!!!!!!!!!!!!!!

// const CaesarCipher = function (shift) {
//   const a = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
//   this.encode = function (str) {
//     return str
//       .toLowerCase()
//       .split('')
//       .map(el => a.split('')[a.indexOf(el) + shift])
//       .join('')
//       .toUpperCase();
//   };

//   this.decode = function (str) {
//     return str
//       .toLowerCase()
//       .split('')
//       .map(el => a.split('')[a.indexOf(el) - shift])
//       .join('')
//       .toUpperCase();
//   };
// };

// var c = new CaesarCipher(5);
// console.log(c.encode('Codewars')); // returns 'HTIJBFWX'
// console.log(c.decode('BFKKQJX')); // returns 'WAFFLES'

//===============================
/**Pete, the baker (part 2) */

/**Pete is now mixing the cake mixture. He has the recipe, containing 
 * the required ingredients for one cake. He also might have added some 
 * of the ingredients already, but something is missing. Can you help 
 * him to find out, what he has to add to the mixture?

Requirements:

Pete only wants to bake whole cakes. And ingredients, that were added
 once to the mixture, can't be removed from that. That means: if he 
 already added the amount of flour for 2.8 cakes, he needs to add at 
 least the amount of flour for 0.2 cakes, in order to have enough flour for 3 cakes.
If Pete already added all ingredients for an integer amount of cakes,
 you don't need to add anything, just return an empty hash then.
If Pete didn't add any ingredients at all, you need to add all ingredients
 for exactly one cake.
For simplicity we ignore all units and just concentrate on the numbers. E.g.
 250g of flour is simply 250 (units) of flour and 1 lb of sugar is also simply 1 (unit) of sugar.
Ingredients, which don't have to be added to the mixture (missing amount = 
  0), must not be present in the result. */

// не завершено!!!!!!!!!!!!!!!!

// var recipe = { flour: 200, eggs: 1, sugar: 100 };

// function getMissingIngredients(recipe, added) {
//   console.log(added);
//   if (Object.keys(added).length === 0) {
//     return recipe;
//   }

// }

// console.log(getMissingIngredients(recipe, { flour: 50, eggs: 1 })); // must return {flour: 150, sugar: 100}
// console.log(getMissingIngredients(recipe, {})); // must return {flour: 200, eggs: 1, sugar: 100}
// console.log(getMissingIngredients(recipe, { flour: 500, sugar: 200 })); // must return {flour: 100, eggs: 3, sugar: 100}

/**Stop gninnipS My sdroW! */

/**Write a function that takes in a string of one or more words, and returns the same string,
 * but with all five or more letter words reversed (Just like the name of this Kata). Strings
 * passed in will consist of only letters and spaces. Spaces will be included only when more
 * than one word is present. */

// function spinWords(str) {
//   return str
//     .split(' ')
//     .map(word => (word.length < 5 ? word : word.split('').reverse().join('')))
//     .join(' ');
// }

// console.log(spinWords('Hey fellow warriors')); // // => returns "Hey wollef sroirraw"

// console.log(spinWords('This is a test')); //=> returns "This is a test"

// console.log(spinWords('This is another test')); //=> returns "This is rehtona test"

//========================================
/**Scramblies */

/**Complete the function scramble(str1, str2) that returns true if a portion of str1 characters
 * can be rearranged to match str2, otherwise returns false. */

//не завершено!!!!!!!!!!!!!

// function scramble(str1, str2) {
//   return str2.split('').reduce((acc, letter) => {
//     let arr = str1.split('');
//     if()
//   }, '');
// }

// console.log(scramble('rkqodlw', 'world')); // ==> True
// console.log(scramble('rkqodlw', 'worldd')); // ==> false
// console.log(scramble('cedewaraaossoqqyt', 'codewars')); //==> True
// console.log(scramble('katas', 'steak')); //==> False

/**Switcheroo */

/**Given a string made up of letters a, b, and/or c, switch the position
 *  of letters a and b (change a to b and vice versa). Leave any incidence of c untouched. */

// function switcheroo(x) {
//   return x
//     .split('')
//     .map(letter => {
//       if (letter === 'a') return 'b';

//       if (letter === 'b') return 'a';

//       return letter;
//     })
//     .join('');
// }

// console.log(switcheroo('abc')); // 'bac'

//=====================================================

/**Divide and Conquer */

/**Given a mixed array of number and string representations of
 * integers, add up the string integers and subtract this from the total of the non-string integers. */

// function divCon(x) {
//   let stringTotal = 0;
//   let numberTotal = 0;
//   return x.reduce((acc, el) => {
//     if (typeof el === 'number') {
//       numberTotal += el;
//     }
//     if (typeof el === 'string') {
//       stringTotal += Number(el);
//     }

//     return numberTotal - stringTotal;
//   }, 0);
// }

// console.log(divCon([9, 3, '7', '3'])); // 2

// //найкращтй варіант

// function divCon(x) {
//   return x.reduce(
//     (acc, cur) => (typeof cur === 'number' ? acc + cur : acc - Number(cur)),
//     0,
//   );
// }

//=============================================================
/**Spoonerize Me */

/*/Your task is to create a function that takes a string of two words, separated
 by a space: words and returns a spoonerism of those words in a string,*/

//незавершено
// function spoonerize(...words) {
//   console.log(words);
//   const arr = words.split(' ');
//   arr[0].split('')[0] = arr[1].split('')[0];

//   // return words.split(' ').map((word, i) => {
//   //   i;
//   // });
// }

//========================================================
/**7 kyu
Odd or Even? */

/**Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero). */
//не завершено
// function oddOrEven(array) {
//   if (array.length === 0) {
//     return 'even';
//   }
//   return array.reduce((sum, num) => sum + num, 0) % 2 === 0 ? 'even' : 'odd';
// }
// console.log(oddOrEven([-1023, 1, -2])); //even
// console.log(oddOrEven([])); //even

/**5 kyu
Moving Zeros To The End */

/**Write an algorithm that takes an array and moves all of the zeros to the end,
 *  preserving the order of the other elements. */

// var moveZeros = function (arr) {
//   const filtered = arr.filter(x => x !== 0);
//   const difference = arr.length - filtered.length;
//   for (let i = 0; i < difference; i++) {
//     filtered.push(0);
//   }
//   return filtered;
// };
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])); // returns[false,1,1,2,1,3,"a",0,0]

/**Find the odd int */

/**Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

// function findOdd(A) {
//   return A.find((num, i, arr) => arr.filter(x => x === num).length % 2 !== 0);
// }

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); //5

//найкращий варіант
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

//===============================================================

/**6 kyu
Find The Parity Outlier */

/**You are given an array (which will have a length of at least 3, but could
 * be very large) containing integers. The array is either entirely comprised
 * of odd integers or entirely comprised of even integers except for a single
 * integer N. Write a method that takes the array as an argument and returns
 * this "outlier" N. */

// function findOutlier(integers) {
//   return integers.filter(num => num % 2 === 0).length === 1
//     ? +integers.filter(num => num % 2 === 0).join('')
//     : +integers.filter(num => num % 2 !== 0).join('');
// }
// console.log(findOutlier([0, 1, 2])); // 1)
// console.log(findOutlier([1, 2, 3])); //, 2)
// console.log(findOutlier([2, 6, 8, 10, 3])); //, 3)
// console.log(findOutlier([0, 0, 3, 0, 0])); //, 3)
// console.log(findOutlier([1, 1, 0, 1, 1])); //, 0)

//===============================================================

/**6 kyu
Counting Duplicates */
// function duplicateCount(text) {
//   const result = text
//     .toLowerCase()
//     .split('')
//     .filter((letter, index, array) => array.indexOf(letter) !== index);

//   const unique = new Set([...result]);
//   return [...unique].length;
// }
// console.log(duplicateCount('')); // 0);
// console.log(duplicateCount('abcde')); // 0);
// console.log(duplicateCount('aabbcde')); // 2);
// console.log(duplicateCount('aabBcde')); // 2,"should ignore case");
// console.log(duplicateCount('Indivisibility')); // 1)
// console.log(duplicateCount('Indivisibilities')); // 2, "characters may not be adjacent")

/**6 kyu
Unique In Order */

// var uniqueInOrder = function (iterable) {
//   const result = [];
//   const array = [...iterable].reduce((acc, item, index, array) => {
//     return item !== array[index + 1] ? result.push(item) : acc;
//   }, 0);

//   return result;
// };
// console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder('ABBCcAD')); // ['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1,2,3]

//========================================================

/**6 kyu
Extract the IDs from the data set */

// var data = {
//   id: 1,
//   items: [{ id: 2 }, { id: 3, items: [{ id: 4 }, { id: 5 }] }],
// };

// function extractIds(data) {
//   const result = [];
//   getId(data);

//   function getId(o) {
//     for (let prop in o) {
//       if (typeof o[prop] === 'object') {
//         getId(o[prop]);
//       }
//       if (prop === 'id') {
//         result.push(o[prop]);
//       }
//     }
//   }
//   return result;
// }

// console.log(extractIds(data));

//==================================================
// function isValidIP(str) {
//   console.log(str.split('.'));
//   return str.split('.').length !== 4
//     ? false
//     : str.split('.').every(el => Number(el) >= 0 && Number(el) <= 255);
// }
// console.log(isValidIP('0.0.0.0')); // true);
// console.log(isValidIP('12.255.56.1')); // true);
// console.log(isValidIP('137.255.156.100')); // true);

// console.log(isValidIP('')); // false);
// console.log(isValidIP('abc.def.ghi.jkl')); // false);
// console.log(isValidIP('123.456.789.0')); // false);
// console.log(isValidIP('12.34.56')); // false);
// console.log(isValidIP('01.02.03.04')); // false);
// console.log(isValidIP('256.1.2.3')); // false);
// console.log(isValidIP('1.2.3.4.5')); // false);
// console.log(isValidIP('123,45,67,89')); // false);
// console.log(isValidIP('1e0.1e1.1e2.2e2')); // false);
// console.log(isValidIP(' 1.2.3.4')); // false);
// console.log(isValidIP('1.2.3.4 ')); // false);
// console.log(isValidIP('12.34.56.-7')); // false);
// console.log(isValidIP('1.2.3.4\n')); // false);
// console.log(isValidIP('\n1.2.3.4')); // false);

//=======================================================

/**6 kyu
WeIrD StRiNg CaSe */

// function toWeirdCase(string) {
//   return string
//     .split(' ')
//     .map(word =>
//       word
//         .split('')
//         .map((letter, i) =>
//           i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase(),
//         )
//         .join(''),
//     )
//     .join(' ');
// }
// console.log(toWeirdCase('String')); //=> returns "StRiNg"
// console.log(toWeirdCase('Weird string case')); //=> returns "WeIrD StRiNg CaSe"

//=============================================================

/**5 kyu
Extract the domain name from a URL */

// function domainName(url) {
//   return url
//     .split('//')
//     .join('')
//     .split('.com')
//     .join('')
//     .split('/')
//     .join('')
//     .split('http:')
//     .join('')
//     .split('https:')
//     .join('')
//     .split('www.')
//     .join('')
//     .split('kata')
//     .join('')
//     .split('users')
//     .join('')
//     .split('error')
//     .join('')
//     .split('.')[0];
// }
// console.log(domainName('http://github.com/carbonfive/raygun')); // "github"
// console.log(domainName('http://www.zombie-bites.com')); // "zombie-bites"
// console.log(domainName('https://www.cnet.com')); // "cnet"

//==============================================================

/**6 kyu
Magic Highschool: Your first potion */

//хз шо нетак

// function getIngredients(recipes, final) {
//   return recipes
//     .find(({ result }) => result === final)
//     .ingredients.reduce((acc, item) => {
//       console.log();
//       const k = item[0];
//       return (acc = {
//         ...acc,
//         [k]: item[1],
//       });
//     }, {});
// }

// var recipes = [
//   {
//     ingredients: [
//       ['troll nail', 2],
//       ['dewdrop', 4],
//     ],
//     result: 'foot-smelling potion',
//   },
//   {
//     ingredients: [
//       ['foot-smelling potion', 3],
//       ['siren teardrop', 1],
//     ],
//     result: 'invisibility potion',
//   },
//   {
//     ingredients: [
//       ['reindeer hair', 2],
//       ['pine essence', 1],
//       ['moonshine essence', 2],
//     ],
//     result: 'winterheat potion',
//   },
//   {
//     ingredients: [
//       ['pine resin', 3],
//       ['pure alcohol', 2],
//     ],
//     result: 'pine essence',
//   },
// ];

// console.log(getIngredients(recipes, 'invisibility potion')); // {"dewdrop": 12, "troll nail": 6, "siren teardrop": 1}, "Failed brewing an Invisibility Potion");
// console.log(getIngredients(recipes, 'pine essence')); // {"pine resin": 3, "pure alcohol": 2}, "Failed brewing some pine essence");

//===========================================================
/**6 kyu
Replace With Alphabet Position */

// function alphabetPosition(text) {
//   const alphabet = [...Array(26)].map((q, w) => String.fromCharCode(w + 97));
//   return text
//     .replace(/ /g, '')
//     .replace(/'/g, '')
//     .replace(/\./g, '')
//     .toLowerCase()
//     .split('')
//     .filter(letter => alphabet.includes(letter))
//     .map(letter => alphabet.indexOf(letter) + 1).join` `;
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// console.log(alphabetPosition('The narwhal bacons at midnight.')); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
// console.log(alphabetPosition('w_r7i@*/')); // '23 18 9'

//====================================================================
/**6 kyu
Equal Sides Of An Array */

// function findEvenIndex(arr) {
//   return arr.reduce((acc, num, index, array) => {
//     if (
//       array.slice(0, index).reduce((a, b) => a + b, 0) ===
//       array.slice(index + 1).reduce((a, b) => a + b, 0)
//     ) {
//       acc = index;
//     }
//     return acc;
//   }, -1);
// }

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); //3, "The array was: [1,2,3,4,3,2,1] \n");
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); //1, "The array was: [1,100,50,-51,1,1] \n");
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); //-1, "The array was: [1,2,3,4,5,6] \n");
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); //3, "The array was: [20,10,30,10,10,15,35] \n");

/**6 kyu
Consecutive strings */

//хз що нетак

// function longestConsec(strarr, k) {
//   if (strarr.length === 0 || k > strarr.length || k <= 0) return '';
//   const arr = [];
//   for (let i = 0; i < strarr.length - k + 1; i++) {
//     const concWord = [...strarr].splice(i, k).join('');
//     arr.push(concWord);
//   }

//   return arr.sort((a, b) => b.length - a.length)[0];
//   // let firstLongestWrd = '';
//   // console.log(arr);
//   // for (let i = arr.length - 1; i >= 0; i--) {
//   //   if (arr[i].length >= firstLongestWrd.length) {
//   //     firstLongestWrd = arr[i];
//   //   }
//   // }
//   // return firstLongestWrd;
// }

// console.log(
//   longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2),
// ); // "folingtrashy")
// console.log(
//   longestConsec(
//     [
//       'ejjjjmmtthh',
//       'zxxuueeg',
//       'aanlljrrrxx',
//       'dqqqaaabbb',
//       'oocccffuucccjjjkkkjyyyeehh',
//     ],
//     1,
//   ),
// ); // "oocccffuucccjjjkkkjyyyeehh")
// console.log(longestConsec([], 3)); // "")
// console.log(
//   longestConsec(
//     [
//       'itvayloxrp',
//       'wkppqsztdkmvcuwvereiupccauycnjutlv',
//       'vweqilsfytihvrzlaodfixoyxvyuyvgpck',
//     ],
//     2,
//   ),
// ); // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
// console.log(
//   longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2),
// ); // "wlwsasphmxxowiaxujylentrklctozmymu")
// console.log(
//   longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2),
//   '',
// );
// console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)); // "ixoyx3452zzzzzzzzzzzz")
// console.log(
//   longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15),
// ); // "")
// console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0)); // "")

//================================================================

/**6 kyu
Find the unique number */

// function findUniq(arr) {
//   return +arr
//     .sort()
//     .filter((item, i) => !(arr[i] == arr[i + 1] || arr[i - 1] == arr[i]))
//     .join('');
// }
// console.log(findUniq([0, 1, 0])); // 1);
// console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2);
// console.log(findUniq([3, 10, 3, 3, 3])); // 10);

//====================================================================
/**6 kyu
Count the smiley faces! */

// function countSmileys(arr) {
//   if (arr.length == 0) return 0;

//   return arr.reduce((acc, item) => {
//     if (item.length === 2) {
//       const validEyes = item.split('')[0] === ':' || item.split('')[0] === ';';
//       const validSmile = item.split('')[1] === ')' || item.split('')[1] === 'D';
//       if (validEyes && validSmile) {
//         acc += 1;
//       }
//     }
//     if (item.length === 3) {
//       const validEyes = item.split('')[0] === ':' || item.split('')[0] === ';';
//       const validSmile = item.split('')[2] === ')' || item.split('')[2] === 'D';
//       const validNose = item.split('')[1] === '-' || item.split('')[1] === '~';
//       if (validEyes && validSmile && validNose) {
//         acc += 1;
//       }
//     }

//     return acc;
//   }, 0);
// }

// console.log(countSmileys([])); // 0);
// console.log(countSmileys([':D', ':~)', ';~D', ':)'])); // 4);
// console.log(countSmileys([':)', ':(', ':D', ':O', ':;'])); // 2);
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // 1);

//=================================================================
/**6 kyu
Split Strings */
// function solution(str) {
//   const result = [];
//   for (let i = 0; i < str.length; i += 2) {
//     const l = str[i + 1] === undefined ? '_' : str[i + 1];

//     result.push(str[i] + l);
//   }
//   return result;
// }

// console.log(solution('abcdef')); // ["ab", "cd", "ef"]);
// console.log(solution('abcdefg')); // ["ab", "cd", "ef", "g_"]);
// console.log(solution('')); // []);

//================================================================
/**6 kyu
Valid Phone Number */

// function validPhoneNumber(phoneNumber) {
//   const arr = phoneNumber.split('');
//   if (
//     arr[0] === '(' &&
//     arr[4] === ')' &&
//     arr[5] === ' ' &&
//     arr[9] === '-' &&
//     phoneNumber.length === 14
//   ) {
//     return true;
//   }
//   return false;
// }

// console.log(validPhoneNumber('(123) 456-7890')); // true);
// console.log(validPhoneNumber('(1111)555 2345')); // false);
// console.log(validPhoneNumber('(098) 123 4567')); // false);

//==============================================================
/**Extract last names of people named Michael */

// function getMichaelLastName(inputText) {
//   return inputText
//     .replace(/[.,?-]/g, '')
//     .split(' ')
//     .reduce((acc, word, i, arr) => {
//       if (
//         word === 'Michael' &&
//         arr[i + 1].charAt(0) === arr[i + 1].charAt(0).toUpperCase()
//       ) {
//         acc.push(arr[i + 1]);
//       }
//       return acc;
//     }, []);
// }
// const inputText =
//   "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

// console.log(getMichaelLastName(inputText)); // ["Jordan","Johnson","Green","Wood"]);
// // word.charAt(0) === word.charAt(0).toUpperCase()

//==================================================================
/**6 kyu
Make the Deadfish swim */
// function parse(data) {
//   let counter = 0;
//   const result = [];
//   data.split('').forEach(element => {
//     if (element === 'i') {
//       counter += 1;
//     }
//     if (element === 'd') {
//       counter -= 1;
//     }
//     if (element === 's') {
//       counter *= counter;
//     }
//     if (element === 'o') {
//       result.push(counter);
//     }
//   });
//   return result;
// }

// console.log(parse('iiisdoso')); // [ 8, 64 ] );
// console.log(parse('iiisxxxdoso')); // [ 8, 64 ] );

//====================================================================
/**5 kyu
Make the sum... if you can. */

//не завершено!!!!!!!!!!!!!

// function add(number1, number2) {
//   if (number1 === undefined) {
//     number1 = 0;
//   }
//   if (number1 === '+') {
//     number1 = 0;
//   }
//   if (number2 === undefined) {
//     number2 = 0;
//   }
//   // const result = +number1 + +number2;
//   {
//     if (number2 == 0) return number1;
//     else return add(number1 ^ number2, (number1 & number2) << 1);
//   }
//   // return parseFloat(result.toFixed(2));
// }

// console.log(add('21', '21')); // 42);
// console.log(add(1994, 1994)); // 3988);
// console.log(add(true, false)); // 1);
// console.log(add(4, undefined)); // 4);
// console.log(add(0, 0)); // 0);
// console.log(add(1.5, 1.6)); // => 3.1 );
// console.log(add(1.001, 1)); // => 2

//============================================================
/**6 kyu
Data Reverse */

// function dataReverse(data) {
//   const result = [];
//   for (let i = 0; i < data.length; i += 8) {
//     result.push([...data].splice(i, 8));
//   }
//   if (result.length === 1) return [];
//   return result
//     .reverse()
//     .join()
//     .split(',')
//     .map(number => +number);
// }

// console.log(
//   dataReverse([
//     1,
//     1,
//     1,
//     1,
//     1,
//     1,
//     1,
//     1,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     1,
//     1,
//     1,
//     1,
//     1,
//     0,
//     1,
//     0,
//     1,
//     0,
//     1,
//     0,
//   ]),
// );

//=========================================================
/**6 kyu
T.T.T.17: Split odd and even */

// function splitOddAndEven(numbers) {
//   return String(numbers)
//     .split('')
//     .reduce((acc, val, i, arr) => {
//       const current = +val % 2 === 0;
//       const prev = arr[i - 1] % 2 === 0;
//       current === prev ? (acc += val) : (acc += `,${val}`);
//       return acc;
//     })
//     .split(',')
//     .map(num => +num);
// }

// console.log(splitOddAndEven(123)); //  [1,2,3]

// console.log(splitOddAndEven(223)); //  [22,3]

// console.log(splitOddAndEven(111)); //  [111]

// console.log(splitOddAndEven(13579)); //  [13579]

// console.log(splitOddAndEven(135246)); //  [135,246]

// console.log(splitOddAndEven(123456)); //  [1,2,3,4,5,6]

//========================================================

/**6 kyu
Follow that Spy */

//не завершено
// function findRoutes(routes) {
//   const first = routes.find((route, i, arr) =>
//     arr.every(r => route[0] !== r[1]),
//   );

//   return routes
//     .reduce((acc, route, i, arr) => {
//       const val = arr.reduce((a, e) => {
//         if (acc[acc.length - 1] === e[0]) {
//           a = e;
//         }
//         return a;
//       }, '');
//       if (acc[acc.length - 1] === val[0]) {
//         acc.push(val[1]);
//       }
//       return acc;
//     }, first)
//     .join(', ');
// }
// console.log(
//   findRoutes([
//     ['Chicago', 'Winnipeg'],
//     ['Halifax', 'Montreal'],
//     ['Montreal', 'Toronto'],
//     ['Toronto', 'Chicago'],
//     ['Winnipeg', 'Seattle'],
//   ]),
// ); //  "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle"

//==============================================================
/**6 kyu
Simple Sentences */
// function makeSentence(parts) {
//   return (
//     parts.reduce((acc, part, i, arr) => {
//       if (part === ',') {
//         return (acc += `,`);
//       }
//       if (part === '.') {
//         return (acc += '');
//       }
//       if (i === 0) {
//         return part;
//       }
//       acc += ` ${part}`;
//       return acc;
//     }, '') + '.'
//   );
// }
// console.log(makeSentence(['hello', ',', 'my', 'dear'])); // returns 'hello, my dear.'

//==============================================================

/**6 kyu
Find within array */

// var findInArray = function (array, iterator) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (iterator(array[i], i)) {
//       return i;
//     }
//   }
//   return -1;
// };

// var trueIfEven = function (v, i) {
//   return v % 2 === 0;
// };
// var neverTrue = function (v, i) {
//   return false;
// };
// var trueIfValueEqualsIndex = function (v, i) {
//   return v === i;
// };
// var trueIfLengthEqualsIndex = function (v, i) {
//   return v.length === i;
// };

// console.log(findInArray([], trueIfEven)); // -1)
// console.log(findInArray([1, 3, 5, 6, 7], trueIfEven)); // 3)
// console.log(findInArray([2, 4, 6, 8], trueIfEven)); // 0)
// console.log(findInArray([2, 4, 6, 8], neverTrue)); // -1)
// console.log(findInArray([13, 5, 3, 1, 4, 5], trueIfValueEqualsIndex)); // 4)
// console.log(
//   findInArray(
//     ['one', 'two', 'three', 'four', 'five', 'six'],
//     trueIfLengthEqualsIndex,
//   ),
// ); // 4)
// console.log(findInArray(['bc', 'af', 'd', 'e'], trueIfLengthEqualsIndex)); // -1)

//=============================================================================
/**6 kyu
Multiplication Tables */

// function multiplicationTable(row, col) {
//   const array = [];

//   for (let i = 0; i < row; i++) {
//     const innerArray = [];
//     for (let j = 1; j < col + 1; j += 1) {
//       innerArray.push((i + 1) * j);
//     }
//     array.push(innerArray);
//   }
//   return array;
// }

// console.log(multiplicationTable(2, 2)); // [[1,2],[2,4]])
// console.log(multiplicationTable(3, 3)); // [[1,2,3],[2,4,6],[3,6,9]])
// console.log(multiplicationTable(3, 4)); // [[1,2,3,4],[2,4,6,8],[3,6,9,12]])
// console.log(multiplicationTable(4, 4)); // [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]])
// console.log(multiplicationTable(2, 5)); // [[1,2,3,4,5],[2,4,6,8,10]])

//============================================
/**6 kyu
Aspect Ratio Cropping - Part 2*/

//хз що не так

// function aspectRatio(x, y, constant) {
//   if (constant === 'height') {
//     return [Math.ceil((y / 9) * 16), y];
//   }
//   if (constant === 'width') {
//     return [x, Math.ceil((x / 16) * 9)];
//   }
//   if (constant === 'diagonal') {
//     const diagonal = Math.ceil(Math.sqrt(x * x + y * y));

//     const height = Math.ceil(
//       (diagonal * 9) / Math.sqrt(Math.pow(16, 2) + Math.pow(9, 2)),
//     );
//     return [Math.floor((height / 9) * 16), height];
//   }

//   if (constant === 'area') {
//     const area = x * y;
//     const width = Math.ceil(Math.sqrt((16 * area) / 9));
//     return [width, Math.floor(area / width) + 1];
//   }
// }
// console.log(aspectRatio(374, 280, 'height')); // [498 ,280]);
// console.log(aspectRatio(374, 280, 'width')); //[374 ,211]);
// console.log(aspectRatio(374, 280, 'diagonal')); // [408 ,230]);
// console.log(aspectRatio(374, 280, 'area')); // [432 ,243]);

//=================================================================
/**6 kyu
Detect Pangram */

// function isPangram(string) {
//   // return string.replace(/[0-9\W]/gi, '').length;
//   return (
//     [
//       ...new Set(
//         string
//           .replace(/[0-9\W]/gi, '')
//           .toLowerCase()
//           .split(''),
//       ),
//     ].join('').length === 26
//   );
// }

// var string = 'The quick brown fox jumps over the lazy dog.';
// console.log(isPangram(string)); // true)
// var string = 'This is not a pangram.';
// console.log(isPangram(string)); // false)

//=================================================================
/**6 kyu
Are they the "same"? */

// function comp(array1, array2) {
//   if (array1 === null || array2 === null) return false;
//   return (
//     array2.sort((a, b) => b - a).join('') ===
//     array1
//       .map(num => Math.pow(num, 2))
//       .sort((a, b) => b - a)
//       .join('')
//   );
// }

// const a1 = [4, 0, 4, 10, 2, 9, 6, 7, 3, 8, 3, 0, 7, 1, 0, 5];
// const a2 = [9, 49, 1, 100, 0, 9, 81, 36, 16, 4, 1, 64, 16, 0, 49, 25];
// console.log(comp(a1, a2)); // false);

//===============================================================
/**6 kyu
Find the missing letter */

// function findMissingLetter(array) {
//   const alphabet = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z',
//   ];

//   const upperAlphabet = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z',
//   ];

//   const arr = array.reduce((acc, letter) => {
//     if (/[A-Z]/.test(letter)) {
//       acc.push(upperAlphabet.indexOf(letter));
//     }
//     if (/[a-z]/.test(letter)) {
//       acc.push(alphabet.indexOf(letter));
//     }

//     return acc;
//   }, []);

//   return /[A-Z]/.test(array[0])
//     ? upperAlphabet[
//         +Array.from(Array(Math.max(...arr)).keys())
//           .map((n, i) =>
//             arr.indexOf(i) < 0 && i > Math.min(...arr) ? i : null,
//           )
//           .filter(f => f)
//           .join('')
//       ]
//     : alphabet[
//         +Array.from(Array(Math.max(...arr)).keys())
//           .map((n, i) =>
//             arr.indexOf(i) < 0 && i > Math.min(...arr) ? i : null,
//           )
//           .filter(f => f)
//           .join('')
//       ];
// }

// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // 'e');
// console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); // 'P');

//================================================================
/**6 kyu
Pairs of Bears */

//не завершено
// function bears(x, s) {
//   const arr = s.split('');

//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     // console.log(i);
//     if (arr[i] === 'B' && arr[i + 1] === '8') {
//       return;
//     }
//   }

//   console.log(newArr);
// }
// console.log(bears(7, '8j8mBliB8gimjB8B8jlB')); // ["B8 B8 B8",false]);
// console.log(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd')); // ["8B B8 B8 B8 8B",true]);
// console.log(bears(8, '8')); // ["",false]);

// //=================================================================
/**6 kyu
Meeting */

// function meeting(s) {
//   const result = s
//     .split(';')
//     .map(el => el.toUpperCase().split(':').reverse())
//     .sort((a, b) => {
//       const result = a[0].localeCompare(b[0]);
//       return result !== 0 ? result : a[1].localeCompare(b[1]);
//     })
//     .join(')(')
//     .replace(/\,/g, ', ');

//   return `(${result})`;
// }

// console.log(
//   meeting(
//     'Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn',
//   ),
// );
// // "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)");
// console.log(
//   meeting(
//     'John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell',
//   ),
// );
// //"(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)");
// console.log(
//   meeting(
//     'Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern',
//   ),
// );
// //"(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)");

//===============================
/**6 kyu
Duplicate Encoder */

// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split('')
//     .map((word, i, arr) =>
//       arr.filter(el => el === word).length > 1 ? ')' : '(',
//     )
//     .join('');
// }
// console.log(duplicateEncode('din')); //"(((");
// console.log(duplicateEncode('recede')); //"()()()");
// console.log(duplicateEncode('Success')); //")())())","should ignore case");
// console.log(duplicateEncode('(( @')); //"))((");

/**6 kyu
Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented? */

// function allContinents(list) {
//   const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
//   const devsContinents = list.map(({ continent }) => continent);
//   return continents.every(continent => devsContinents.includes(continent));
// }

// var list1 = [
//   {
//     firstName: 'Fatima',
//     lastName: 'A.',
//     country: 'Algeria',
//     continent: 'Africa',
//     age: 25,
//     language: 'JavaScript',
//   },
//   {
//     firstName: 'Agustín',
//     lastName: 'M.',
//     country: 'Chile',
//     continent: 'Americas',
//     age: 37,
//     language: 'C',
//   },
//   {
//     firstName: 'Jing',
//     lastName: 'X.',
//     country: 'China',
//     continent: 'Asia',
//     age: 39,
//     language: 'Ruby',
//   },
//   {
//     firstName: 'Laia',
//     lastName: 'P.',
//     country: 'Andorra',
//     continent: 'Europe',
//     age: 55,
//     language: 'Ruby',
//   },
//   {
//     firstName: 'Oliver',
//     lastName: 'Q.',
//     country: 'Australia',
//     continent: 'Oceania',
//     age: 65,
//     language: 'PHP',
//   },
// ];

// var list2 = [
//   {
//     firstName: 'Fatima',
//     lastName: 'A.',
//     country: 'Algeria',
//     continent: 'Africa',
//     age: 25,
//     language: 'JavaScript',
//   },
// ];

// console.log(allContinents(list1)); // true);
// console.log(allContinents(list2)); // false);

//==============================
/**6 kyu
Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details */
// function askForMissingDetails(list) {
//   return list
//     .filter(
//       obj =>
//         obj.firstName === null ||
//         obj.lastName === null ||
//         obj.country === null ||
//         obj.continent === null ||
//         obj.age === null ||
//         obj.language === null,
//     )
//     .reduce((acc, obj, i, arr) => {
//       let target = '';
//       for (const key in obj) {
//         if (obj[key] === null) {
//           target = key;
//         }
//       }
//       obj.question = `Hi, could you please provide your ${target}.`;
//       acc.push(obj);
//       return acc;
//     }, []);
// }
// var list1 = [
//   {
//     firstName: null,
//     lastName: 'I.',
//     country: 'Argentina',
//     continent: 'Americas',
//     age: 35,
//     language: 'Java',
//   },
//   {
//     firstName: 'Lukas',
//     lastName: 'X.',
//     country: 'Croatia',
//     continent: 'Europe',
//     age: 35,
//     language: null,
//   },
//   {
//     firstName: 'Madison',
//     lastName: 'U.',
//     country: 'United States',
//     continent: 'Americas',
//     age: 32,
//     language: 'Ruby',
//   },
// ];

// console.log(askForMissingDetails(list1));

//========================================================
/**function stringExpansion(s) {
  // Good luck!
} */

// function stringExpansion(s) {
//   let num = 1;
//   return s.split('').reduce((acc, el, i, arr) => {
//     if (Number.isInteger(+el)) {
//       num = el;
//     } else {
//       for (let i = 0; i < num; i++) {
//         acc += el;
//       }
//     }
//     return acc;
//   }, '');
// }

// console.log(stringExpansion('3abc')); //'aaabbbccc');
// console.log(stringExpansion('3D2a5d2f')); //'DDDaadddddff');
// console.log(stringExpansion('0d0a0v0t0y')); //'');
// console.log(stringExpansion('3d332f2a')); //'dddffaa');
// console.log(stringExpansion('abcde')); //'abcde');
// console.log(stringExpansion('a2bcde')); //'abbccddee');

//========================================================
/**6 kyu
Count characters in your string */
// function count(string) {
//   const obj = {};
//   return string.split('').reduce((acc, el) => {
//     !obj.hasOwnProperty(el) ? (obj[el] = 1) : (obj[el] += 1);
//     return obj;
//   }, {});
// }
// console.log(count('aba')); //{ a: 2, b: 1 });

//===========================================================
/**Beta
Count letters in a string */

// function countLetters(string) {
//   return typeof string === 'string'
//     ? string
//         .toLowerCase()
//         .split('')
//         .filter(el => el.match(/[a-z]/i))
//         .reduce((acc, el) => ({ ...acc, [el]: acc[el] ? acc[el] + 1 : 1 }), {})
//     : null;
// }

// console.log(countLetters('He3llo Wor6ld')); // { d:1 e:1 h:1 l:3 o:2 r:1 w:1 }

//================================================
/**6 kyu
Coding Meetup #15 - Higher-Order Functions Series - Find the odd names */
// function findOddNames(list) {
//   return list.filter(({ firstName }) => {
//     const num = firstName
//       .split('')
//       .reduce((acc, el) => acc + el.charCodeAt(), 0);
//     return num % 2 !== 0;
//   });
// }

// var list1 = [
//   {
//     firstName: 'Aba',
//     lastName: 'N.',
//     country: 'Ghana',
//     continent: 'Africa',
//     age: 21,
//     language: 'Python',
//   },
//   {
//     firstName: 'Abb',
//     lastName: 'O.',
//     country: 'Israel',
//     continent: 'Asia',
//     age: 39,
//     language: 'Java',
//   },
// ];

// console.log(findOddNames(list1));
//=================================================
/**Coding Meetup #10 - Higher-Order Functions Series - Create usernames */

// function addUsername(list) {
//   const result = [];
//   return list.reduce((acc, el) => {
//     const obj = {
//       ...el,
//       username:
//         el.firstName.toLowerCase() +
//         el.lastName[0].toLowerCase() +
//         (new Date().getFullYear() - el.age - 1),
//     };

//     result.push(obj);
//     return result;
//   }, []);
// }

// var list1 = [
//   {
//     firstName: 'Emily',
//     lastName: 'N.',
//     country: 'Ireland',
//     continent: 'Europe',
//     age: 30,
//     language: 'Ruby',
//   },
//   {
//     firstName: 'Nor',
//     lastName: 'E.',
//     country: 'Malaysia',
//     continent: 'Asia',
//     age: 20,
//     language: 'Clojure',
//   },
// ];

// const list2 = [
//   {
//     firstName: 'Sofia',
//     lastName: 'P.',
//     country: 'Italy',
//     continent: 'Europe',
//     age: 41,
//     language: 'Clojure',
//   },
//   {
//     firstName: 'Kseniya',
//     lastName: 'T.',
//     country: 'Belarus',
//     continent: 'Europe',
//     age: 29,
//     language: 'JavaScript',
//   },
//   {
//     firstName: 'Jing',
//     lastName: 'X.',
//     country: 'China',
//     continent: 'Asia',
//     age: 39,
//     language: 'Ruby',
//   },
//   {
//     firstName: 'Noa',
//     lastName: 'A.',
//     country: 'Israel',
//     continent: 'Asia',
//     age: 40,
//     language: 'Ruby',
//   },
//   {
//     firstName: 'Andrei',
//     lastName: 'E.',
//     country: 'Romania',
//     continent: 'Europe',
//     age: 59,
//     language: 'C',
//   },
//   {
//     firstName: 'Maria',
//     lastName: 'S.',
//     country: 'Peru',
//     continent: 'Americas',
//     age: 60,
//     language: 'C',
//   },
//   {
//     firstName: 'Lukas',
//     lastName: 'X.',
//     country: 'Croatia',
//     continent: 'Europe',
//     age: 75,
//     language: 'Python',
//   },
//   {
//     firstName: 'Chloe',
//     lastName: 'K.',
//     country: 'Guernsey',
//     continent: 'Europe',
//     age: 88,
//     language: 'Ruby',
//   },
//   {
//     firstName: 'Viktoria',
//     lastName: 'W.',
//     country: 'Bulgaria',
//     continent: 'Europe',
//     age: 98,
//     language: 'PHP',
//   },
//   {
//     firstName: 'Piotr',
//     lastName: 'B.',
//     country: 'Poland',
//     continent: 'Europe',
//     age: 128,
//     language: 'JavaScript',
//   },
// ];

// console.log(addUsername(list1));
// console.log(addUsername(list2));

//================================================
/**6 kyu
Your order, please */
// function order(words) {
//   return words
//     .split(' ')
//     .sort((a, b) => +a.match(/\d+/)[0] - +b.match(/\d+/)[0])
//     .join(' ');
// }
// console.log(order('is2 Thi1s T4est 3a')); // "Thi1s is2 3a T4est")
// console.log(order('4of Fo1r pe6ople g3ood th5e the2')); // "Fo1r the2 g3ood 4of th5e pe6ople")
// console.log(order('')); // "", "empty input should return empty string" )

//======================================================================
/**6 kyu
Words to Hex */

// function wordsToHex(words) {
//   return words.split(' ').map(el => {
//     let result = '#';
//     for (let i = 0; i < 3; i++) {
//       if (el[i] === undefined) {
//         return (result += 0).padEnd(7, '0');
//       }
//       result += el[i].charCodeAt(0).toString(16);
//     }
//     return result.padEnd(7, '0');
//   });
// }

// console.log(wordsToHex('Hello, my name is Gary and I like cheese.')); // ['#48656c', '#6d7900', '#6e616d','#697300','#476172','#616e64','#490000','#6c696b','#636865']);
// console.log(wordsToHex('0123456789')); // [ '#303132' ]);
// console.log(wordsToHex('ThisIsOneLongSentenceThatConsistsOfWords')); // [ '#546869' ]);
// console.log(wordsToHex('Blah blah blah blaaaaaaaaaaaah')); // [ '#426c61', '#626c61', '#626c61', '#626c61' ]);
// console.log(wordsToHex('&&&&& $$$$$ ^^^^^ @@@@@ ()()()()(')); // [ '#262626', '#242424', '#5e5e5e', '#404040', '#282928' ])

/**5 kyu
RGB To Hex Conversion */

// function rgb(r, g, b) {
//   return [r, g, b]
//     .map(el => {
//       if (el < 0) {
//         return '00';
//       }
//       if (el > 255) {
//         return 'ff';
//       }
//       if (el.toString(16).length === 1) {
//         return '0' + el.toString(16);
//       }
//       return el.toString(16);
//     })
//     .join('')
//     .toUpperCase();
// }

// console.log(rgb(0, 0, 0)); // '000000')
// console.log(rgb(0, 0, -20)); // '000000')
// console.log(rgb(300, 255, 255)); // 'FFFFFF')
// console.log(rgb(173, 255, 47)); // 'ADFF2F')

/**5 kyu
Convert A Hex String To RGB */
// function hexStringToRGB(hexString) {
//   return hexString
//     .replace(
//       /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
//       (m, r, g, b) => '#' + r + r + g + g + b + b,
//     )
//     .substring(1)
//     .match(/.{2}/g)
//     .reduce((acc, el, i) => {
//       if (i === 0) {
//         acc.r = parseInt(el, 16);
//       }
//       if (i === 1) {
//         acc.g = parseInt(el, 16);
//       }
//       if (i === 2) {
//         acc.b = parseInt(el, 16);
//       }
//       return acc;
//     }, {});
// }

// console.log(hexStringToRGB('#FF9933')); // {r:255, g:153, b:51});
// console.log(hexStringToRGB('#03f'));

/**6 kyu
Inside Out Strings */

// function insideOut(x) {
//   return x
//     .split(' ')
//     .map(el => {
//       if (el.length <= 3) {
//         return el;
//       }

//       if (el.length % 2 === 0) {
//         const middle = Math.ceil(el.length / 2);
//         const s1 = el.slice(0, middle);
//         const s2 = el.slice(middle);
//         console.log(s1);
//         return (
//           s1.split('').reverse().join('') + s2.split('').reverse().join('')
//         );
//       }

//       if (el.length % 2 !== 0) {
//         const middle = Math.ceil(el.length / 2);
//         const s1 = el.slice(0, middle - 1);
//         const s2 = el.slice(middle);
//         const s3 = el.slice(middle - 1, middle);
//         return (
//           s1.split('').reverse().join('') + s3 + s2.split('').reverse().join('')
//         );
//       }
//     })
//     .join(' ');
// }

// console.log(insideOut('man i need a taxi up to ubud')); // 'man i ende a atix up to budu');

// console.log(insideOut('take me to semynak')); // 'atek me to mesykan');

//========================================================

/**6 kyu
Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse? */

function isLanguageDiverse(list) {
  const pythonDevs = list.reduce((acc, { language }) => {
    if (language === 'Python') {
      acc += 1;
    }
    return acc;
  }, 0);
  console.log(pythonDevs);
}
var list1 = [
  {
    firstName: 'Daniel',
    lastName: 'J.',
    country: 'Aruba',
    continent: 'Americas',
    age: 42,
    language: 'Python',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 22,
    language: 'Ruby',
  },
  {
    firstName: 'Sou',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 43,
    language: 'Ruby',
  },
  {
    firstName: 'Hanna',
    lastName: 'L.',
    country: 'Hungary',
    continent: 'Europe',
    age: 95,
    language: 'JavaScript',
  },
  {
    firstName: 'Jayden',
    lastName: 'P.',
    country: 'Jamaica',
    continent: 'Americas',
    age: 18,
    language: 'JavaScript',
  },
  {
    firstName: 'Joao',
    lastName: 'D.',
    country: 'Portugal',
    continent: 'Europe',
    age: 25,
    language: 'JavaScript',
  },
];

console.log(isLanguageDiverse(list1));
