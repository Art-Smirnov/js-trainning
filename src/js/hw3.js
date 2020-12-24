'use strict';

//=======   Здадача 1   ========

// const key = 'mood';
// const value = 'happy'

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
//   [key]: value,  //вебінар 7, 22:41
// };

// user.hobby = 'skydiving';
// user.premium = false;

// const entries = Object.entries(user);

// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }


//=======   Здадача 2   ========

// const countProps = function(obj) {
//   const values = Object.values(obj);
//   return values.length;
// };

// console.log(countProps({}));

// console.log(countProps({ name: 'Mango', age: 2 })); 

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));



//=======   Здадача 3   ========(в процесі)
//перший варіант

// const findBestEmployee = function(employees) {
//   let max = 0;
//   let name;
//   const keys = Object.keys(employees);
//   for(const key of keys){
//     if (max < employees[key]) {
//       max = employees[key];
//       name = key;
//     }
//   }
//   return name;
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); 

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); 

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); 


// //кращий варіант:
// const findBestEmployee = function(employees) {
//   let max = 0;
//   const entries = Object.entries(employees);

//   for (const entry of entries) {
//     if (max < entry[1]){
//       max = entry[1];
//     } 
//   }
//   return max;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

//=======   Здадача 4   ========

// const countTotalSalary = function(employees) {
//   const values = Object.values(employees);
//   let total = 0;
//   for (const value of values){
//     total += value;
//   }
//   return total;
// };

// console.log(countTotalSalary({})); 

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); 

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
//   ); 



//=======   Здадача 5   ========


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function(arr, prop) {
//   const values = [];

//   for (const obj of arr){

//     if (prop in obj) {
//       values.push(obj[prop]);
//     }
//   }
//   return values;
// };


// console.log(getAllPropValues(products, 'name')); 

// console.log(getAllPropValues(products, 'quantity')); 

// console.log(getAllPropValues(products, 'category')); 


//=======   Здадача 6   ========


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function(allProdcuts, productName) {
//   let totalPrice = 0;

//   for (const product of allProdcuts) {
//     // console.log(product.price);
//     if (productName in product){
//       console.log(product.quantity);
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
//   }

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800




//=======   Здадача 7  ======== ??? вебінар 7, прибл. 37хв, 1:48 і приблзно 1:54


// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };