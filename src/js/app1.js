'use strict';

// var x = 10;

// function foo() {
//   var y = x + 5;
//   return y;
// }

// function bar() {
//   var x = 2;
//   return foo();
// }

// function main() {
//   foo(); // Static scope: 15; Dynamic scope: 15
//   bar(); // Static scope: 15; Dynamic scope: 7
//   return 0;
// }

//==задачка Вєніка з Модуля 4. Занятие 7. Callback========

// const users = [
//   { name: 'Котигорошко', age: 15 },
//   { name: 'Колобок', age: 40 },
// ];

// const arrForEach = (arr, callback) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback) {
//       callback(arr[i]);
//     }
//   }
// };

// arrForEach(users, user => {
//   console.log(user.name);
// });
// var contacts = [
//   {
//     firstName: 'Akira',
//     lastName: 'Laine',
//     number: '0543236543',
//     likes: ['Pizza', 'Coding', 'Brownie Points'],
//   },
//   {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     number: '0994372684',
//     likes: ['Hogwarts', 'Magic', 'Hagrid'],
//   },
//   {
//     firstName: 'Sherlock',
//     lastName: 'Holmes',
//     number: '0487345643',
//     likes: ['Intriguing Cases', 'Violin'],
//   },
//   {
//     firstName: 'Kristian',
//     lastName: 'Vos',
//     number: 'unknown',
//     likes: ['JavaScript', 'Gaming', 'Foxes'],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   contacts.map(contact => contact.firstName);

//   // Only change code above this line
// }

// console.log(lookUpProfile('Akira', 'likes'));

// var contacts = [
//   {
//     firstName: 'Akira',
//     lastName: 'Laine',
//     number: '0543236543',
//     likes: ['Pizza', 'Coding', 'Brownie Points'],
//   },
//   {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     number: '0994372684',
//     likes: ['Hogwarts', 'Magic', 'Hagrid'],
//   },
//   {
//     firstName: 'Sherlock',
//     lastName: 'Holmes',
//     number: '0487345643',
//     likes: ['Intriguing Cases', 'Violin'],
//   },
//   {
//     firstName: 'Kristian',
//     lastName: 'Vos',
//     number: 'unknown',
//     likes: ['JavaScript', 'Gaming', 'Foxes'],
//   },
// ];

// const yourMassage = function (position) {
//   return `${this.firstName}, Ваш контакт под номером ${position}`;
// };

// const names = contacts.map((contact, i) => yourMassage.call(contact, i + 1));
// console.log(names);
