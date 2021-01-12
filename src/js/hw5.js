'use strict';
//============задача 1==============

// const Account = function ({ login, email }) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email: ${this.email}`);
// };

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

//============задача 2==============

// const User = function ({ name, age, followers }) {
//   this.name = name;
//   this.age = age;
//   this.followers = followers;
// };

// User.prototype.getInfo = function () {
//   console.log(
//     `User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
//   );
// };

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

//============задача 3==============
// const Storage = function (items) {
//   this.items = items;
// };

// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (item) {
//   return this.items.push(item);
// };
// Storage.prototype.removeItem = function (item) {
//   return this.items.includes(item)
//     ? this.items.splice(this.items.indexOf(item), 1)
//     : console.log("Don't have such item");
// };

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

//============задача 4==============

// const StringBuilder = function (string) {
//   this.value = string;
// };

// StringBuilder.prototype.getItems = function () {
//   return this.value;
// };
// StringBuilder.prototype.append = function (str) {
//   return (this.value = `${this.value}${str}`);
// };
// StringBuilder.prototype.prepend = function (str) {
//   return (this.value = `${str}${this.value}`);
// };
// StringBuilder.prototype.pad = function (str) {
//   return (this.value = `${str}${this.value}${str}`);
// };

// const builder = new StringBuilder('.');

// // console.log(builder.getItems());

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='
