'use strict';

// Задание 1
// const logItems = function(array) {
//   for (let i = 0; i < array.length; i += 1){
//     const arrayItemNumber = String(i + 1);
//     const arrayItem = `'${arrayItemNumber} - ${array[i]}'`;
//     console.log(arrayItem);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// Задание 2

// const calculateEngravingPrice = function(message, pricePerWord) {
//   let total = 0;
//   const words = message.split(' ');
//   for (word of words){
//     total += pricePerWord;
//   }
// return total;
// };

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// );

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// );

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// );

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// );

// Задание 3

// const findLongestWord = function(string) {
//   const words = string.split(' ');
//   let longestWord = words[0];

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// console.log(findLongestWord('Google do a roll'));

// console.log(findLongestWord('May the force be with you'));

// Задание 4

// const formatString = function(string) {
//   if (string.length <= 40){
//     return string;
//   }
//   return string.slice(0, 39) + '...'
// };

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

// console.log(formatString('Curabitur ligula sapien.'));

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );

// Задание 5

// const checkForSpam = function(message) {
//   const messageLC = message.toLowerCase();
//   if (messageLC.includes('spam')){
//     return true;
//   } else if (messageLC.includes('sale')){
//     return true;
//   }
//   return false;
// };

// console.log(checkForSpam('Latest technology news'));

// console.log(checkForSpam('JavaScript weekly newsletter'));

// console.log(checkForSpam('Get best sale offers now!'));

// console.log(checkForSpam('[SPAM] How to earn fast money?'));

// Задание 6

// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt('Ведите число:') ;
//   numbers.push(Number(input));
//  } while (input !== null);

//  for(const number of numbers){
//    total += number;
//  }

// console.log(`'Общая сумма чисел равна ${total}'`);

//варіант з додатковою умовою (не завершений):

// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt('Ведите число:');
//   if (Number(input) !== NaN) {
//     numbers.push(Number(input));
//   } else if (Number(input) === NaN)
//     alert('Было введено не число, попробуйте еще раз');
// } while (input !== null);

// for (const number of numbers) {
//   total += number;
// }

// console.log(`'Общая сумма чисел равна ${total}'`);

//=================================================================

// let userInput;
// const numbers = [];
// let total = 0;

// do {
//   userInput = prompt(`Введите ${numbers.length + 1}-e число`, '');

//   if (userInput == +userInput && userInput.trim()) {
//     numbers.push(+userInput);
//   } else if (userInput !== null)
//     alert('Было введено не число, попробуйте еще раз');
// } while (userInput !== null);

// for (const value of numbers) {
//   total = total + value;
// }

// alert(`Общая сумма ${numbers.length} чисел равна ${total}`);

// console.log(numbers);

// Задание 7

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function(login) {
//  return login.length >= 4 && login.length <= 14;
// };

// const isLoginUnique = function(allLogins, login) {
//   if (allLogins.includes(login)) {
//     return false;
//   }
//   return true;
// };

// const addLogin = function(allLogins, login) {
//   if (isLoginValid(login) === false ){
//     return 'Ошибка! Логин должен быть от 4 до 16 символов';
//   } else if (isLoginUnique(allLogins, login) === false) {
//     return 'Такой логин уже используется!'
//   } else allLogins.push(login);
//   return 'Логин успешно добавлен!'
// };

// console.log(addLogin(logins, 'Ajax'));
// console.log(addLogin(logins, 'robotGoogles'));
// console.log(addLogin(logins, 'Zod'));
// console.log(addLogin(logins, 'jqueryisextremelyfast'));
