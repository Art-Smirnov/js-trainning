'use strict';
//======1======


// function checkAge(age) {
//   if (age >= 18) { // Дополни эту строку
//     return 'Вы совершеннолетний человек';
//   }

//   return 'Вы не совершеннолетний человек';
// }


//=====2======


// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки
  
//   if (password === ADMIN_PASSWORD) {
//     return 'Добро пожаловать!';
//   } 

//   return 'Доступ запрещен, неверный пароль!'
//   // Пиши код выше этой строки
// }


//=====3=======

// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки

//   if (ordered === 0) {
//     return 'В заказе еще нет товаров';
//   } if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
//   } 
//   return 'Заказ оформлен, с вами свяжется менеджер';
//   // Пиши код выше этой строки
// }

// console.log(checkStorage(70, 0));



//=======4========

// Пиши код ниже этой строки

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];


//=========5=========

// // Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки


// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];


//========6============

// // Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки

// fruits[1] = 'персик';

// fruits[3] = 'банан';



//========7============

// // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const fruitsArrayLength = fruits.length;



//========8============

// // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки

//  const lastElementIndex = fruits.length-1;
// const lastElement = fruits[lastElementIndex];


//========9============


// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
//     const extremeElements = []
    
// extremeElements.push(array[0]);
//   extremeElements.push(array[array.length-1]);

// return extremeElements
//     // Пиши код выше этой строки
//   }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));



//========10============


// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
//   words = message.split(delimeter);
  
  
//   // Пиши код выше этой строки
//   return words;
// }



//========11============

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
// const totalPrice = message.split(' ').length * pricePerWord;

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));




//========12============

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Пиши код ниже этой строки
//  string = array.join(delimeter);
 
 
//   // Пиши код выше этой строки
//   return string;
// }



//========13============



// function slugify(title) {
//   // Пиши код ниже этой строки
//  let slug;
//  slug = title.toLowerCase().split(' ').join('-');
 
//  return slug;
//   // Пиши код выше этой строки
// }

// console.log(slugify('Массивы для новичков'));

//========14============

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,-1);
// const lastThreeEls = fruits.slice(-3);;



//========15============
//========16============
//========17============
//========18============
//========19============
//========20============
//========21============
//========22============
//========23============
//========24============
//========25============
//========26============
//========27============
//========28============
//========29============
//========30============
//========31============
//========32============