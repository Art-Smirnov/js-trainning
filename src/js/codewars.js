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
