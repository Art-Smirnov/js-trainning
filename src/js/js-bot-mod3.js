'use strict';
//===========1=============

// const apartment = {
// 	imgUrl: 'https://via.placeholder.com/640x480',
// 	descr: 'Просторная квартира в центре',
//  	rating: 4,
//   	price: 2153,
//   	tags: ['premium', 'promoted', 'top']
// };

//===========2=============

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com'
//   }
// };

//===========3=============

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Пиши код выше этой строки

//===========4=============

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length -1];
// // Пиши код выше этой строки

//===========5=============

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Пиши код выше этой строки

//===========6=============

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');

//===========7=============

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//  country: 'Ямайка',
//  city: 'Кингстон'
// }

//===========8=============

// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки
// 	name,
// 	price,
// 	image,
//   	tags
//   // Пиши код выше этой строки
// };

//===========9=============

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Пиши код ниже этой строки
//   [emailInputName]:'henry.carter@aptmail.com',

//   [passwordInputName]:'jqueryismyjam'
//   // Пиши код выше этой строки
// };

//===========10=============

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

//===========11=============

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
// if (apartment.hasOwnProperty(key)) {

//   keys.push(key);
//   values.push(apartment[key]);}

//   // Пиши код выше этой строки
// }

//===========12=============

// function countProps(object) {
//   let propCount = 0;
//   for (const key in object){

// if(object.hasOwnProperty(key)){
//   propCount += 1;
// }
//   }
//   return propCount;
// }

//===========13=============

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

//===========14=============

// function countProps(object) {
//   // Пиши код ниже этой строки
//   return Object.keys(object).length;
//   // Пиши код выше этой строки
// }

//===========15=============

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

//===========16=============

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
// const salaryArr = Object.values(salaries);

//   for (const value of salaryArr) {
//   	totalSalary += value;
//   }

//   // Пиши код выше этой строки
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

//===========17=============

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

//===========18=============

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }

//   return null;
//   // Пиши код выше этой строки
// }

// console.log(getProductPrice('Радар'));
// console.log(getProductPrice('Двигатель'));
// console.log(getProductPrice('Захват'));

//===========19=============

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const propArr = [];
// for (const product of products){

//   if(propName in product) {
//     propArr.push(product[propName]);
//   }
// }

//   return propArr;
//   // Пиши код выше этой строки
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('category'));

//===========20=============

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// let totalPrice = 0;

// for (const product of products){

//   // console.log(product.name);
//   if(productName === product.name) {
//     totalPrice = product.price * product.quantity;
//   }
// }

//   return totalPrice;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice('Бластер'));
// console.log(calculateTotalPrice('Захват'));

//===========21=============

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const {yesterday, today, tomorrow} = highTemperatures

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//===========22============

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
// } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//===========23=============

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
// } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//===========24=============

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

//===========25=============

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon  = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
//   }
// } = forecast;

//===========26=============

// // Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {

//   const {
//     today: {
//       low: todayLow,
//       high: todayHigh
//     },

//     tomorrow: {
//       low: tomorrowLow,
//       high: tomorrowHigh
//     }
//   } = forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));

//===========27=============

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

//===========28=============

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

//===========29=============

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = {...defaultSettings, ...overrideSettings};

//===========30=============

// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
// 	const finalTask = {
//       completed,
//       category,
//       priority,
//       ...data
//     }
//     return finalTask;
//   // Пиши код выше этой строки
// }

// console.log(makeTask({}));
// console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));

//===========31=============

// function add(...args) {
//   let sum = 0;
//   for (const arg of args) {
//   	sum += arg;
//   }
//   return sum;

//===========32=============

// // Пиши код ниже этой строки
// function addOverNum(num, ...args) {
//   let total = 0;

//   for (const arg of args) {

//     if (arg > num) {
//     total += arg;
//   }
//   }
//   return total;
//   // Пиши код выше этой строки
// }

//===========33=============

// // Пиши код ниже этой строки
// function findMatches(arr, ...args) {
//   const matches = []; // Не изменяй эту строку
// for (const arg of args) {
// 	if (arr.includes(arg)) {
//     matches.push(arg);
//     }
// }
//   // Пиши код выше этой строки
//   return matches;
// }

//===========34=============

// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//   	return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//   	return `Обновляем книгу ${oldName} на ${newName}`;
//   }

//   // Пиши код выше этой строки
// };

//===========35=============

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки

// 	const bookIndex = this.books.indexOf(oldName);
// 	this.books.splice(bookIndex, 1, newName);

//     // Пиши код выше этой строки
//   },
// };

//===========36=============

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: []
//   // Пиши код выше этой строки
// };

//===========37=============

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions() {
//   return this.potions;
//   }
//   // Пиши код выше этой строки
// };

//===========38=============

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     return this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };

//===========39=============

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const potionIndex = this.potions.indexOf(potionName);
//     return this.potions.splice(potionIndex, 1);
//     // 🔥 Оставляем три пустые строки для студента
//     // Пиши код выше этой строки
//   },
// };

//===========40=============

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     const potionsIndex = this.potions.indexOf(oldName);
//     return this.potions.splice(potionsIndex, 1, newName);
//     // 🔥 Оставляем три пустые строки для студента
//     // Пиши код выше этой строки
//   },
// };

//===========41============

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }
//   }
//     this.potions.push(potionName);
//   },

//   removePotion(potionName) {
//     let potionIndex;
//     for (const potion of this.potions) {
//       if(potion.name === potionName) {
//         potionIndex = this.potions.indexOf(potion);
//       }
//     }

//     if (potionIndex === undefined) {
//       return `Зелья ${potionName} нет в инвентаре!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },

//   updatePotionName(oldName, newName) {
//     let potionIndex;
//     for (const potion of this.potions) {
//       if(potion.name === oldName) {
//         potionIndex = this.potions.indexOf(potion);
//       }
//     }

//     if (potionIndex === undefined) {
//       return `Зелья ${oldName} нет в инвентаре!`;
//     }

//     this.potions[potionIndex].name = newName;
//   },
//   // Пиши код выше этой строки
// };
