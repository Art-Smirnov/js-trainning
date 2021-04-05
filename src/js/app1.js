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

//========================================================================================
/**freeCodeCamp */
var contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

// function lookUpProfile(firstName, prop) {
//   var result = 'No such contact';
//   for (var i = 0; i < contacts.length; i++) {
//     if (firstName === contacts[i].firstName) {
//       if (contacts[i][prop]) {
//         result = contacts[i][prop];
//       } else {
//         result = 'No such property';
//       }
//     }
//   }
//   return result;
// }

function lookUpProfile(name, prop) {
  return contacts.reduce((acc, contact) => {
    acc = 'No such contact';

    if (name === contact.firstName) {
      if (contacts[prop]) {
        acc = contacts[i][prop];
      } else {
        acc = 'No such property';
      }
    }
    return acc;
    // if (contact.firstName === name && contact.hasOwnProperty(prop)) {
    //   acc = contact.firstName;
    // }

    // if (contact.firstName !== name) {
    //   acc = 'No such contact';
    // }
    // if (!contact.hasOwnProperty(prop)) {
    //   acc = 'No such property';
    // }
    // return acc;
  }, '');
}

console.log(lookUpProfile('Akira', 'likes'));
