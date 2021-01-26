// /** Рекурсія, вираховування факторіала/ */
// const fact = num => {
//   if (num <= 2) {
//     return num;
//   }

//   return num * fact(num - 1);
// };

// const factorialOfFive = fact(5);

// console.log(factorialOfFive);

/** Глибоке клонування об'єкта рекурсією/ */
// const user = {
//   id: '1213',
//   name: 'Alex',
//   salary: 1000,
//   greet() {},
//   address: {
//     city: 'Kyiv',
//     street: 'nice street',
//   },
// };

// const deepClone = obj => {
//   const clonedObj = {};

//   for (let key in obj) {
//     const value = obj[key];

//     if (typeof value === 'object' && value !== null) {
//       clonedObj[key] = deepClone(value);
//     } else {
//       clonedObj[key] = value;
//     }
//   }

//   return clonedObj;
// };

// const superUser = deepClone(user);
// console.log(superUser, '-----cloned');

/** Рекурсія, вираховування числа фібоначі/ */

//не завершено

// const fibon = num => {
//   if (num <= 0) {
//     return 1;
//   }
//   return fibon(num - 1) + fibon(num - 2);
// };

// console.log(fibon(8));

/** перемножуєм перші n чисел  масива/ */

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }

// console.log(multiply([4, 3, 2, 10, 5], [3]));

/** зплюсовуєм перші n чисел  масива/ */
// function sum(arr, n) {
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
//   //sum(arr, 2) + arr[2] === 9
//   //sum(arr, 1) + arr[1] === 7
//   //0 + arr[0] === 4
// }
// console.log(sum([4, 3, 2, 10, 5], [3]));
