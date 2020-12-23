'use strict';

// ======================== МОДУЛЬ 3 ================== 

//динамічно сворюємо об'єкт з аргументів 
//Shorthand properties


// const name = 'Apples';
// const price = '50';

// const makePrduct = (name, price) => {
//   return {
//     name,
//     price,
//   };
// };

// console.log(makePrduct('Apples', 50));



//Об'єкт з використанням метода(функціїї) в ньому яка змінює ціну:

// const product = {
//   name: 'Wunder Waffles',
//   description: 'lorem...',
//   price: 30,
//   //changePrice: function(){} - застарілий варіант
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }
// product.changePrice(100)
// console.log(product);




//робота з масивами об'єктів(колекцією). 
//+Метод який додає новий продукт в масив нашого склада
//+Метод який видаляє продукт


// const storage = {
//   items: [
//     {id: 'id-1', name: 'apples', price: 30},
//     {id: 'id-2', name: 'grapes', price: 40},
//   ],

//   getItems() {
//     return this.items;
//   },

//   addProducts(product){
//     this.items.push(product);
//   },

//   removeProduct(id){
//     for(let i = 0; i < this.items.length; i += 1) {
//       const product = this.items[i];
//       if (product.id === id) {
//         this.items.splice(i, 1);
//       }
//     }
//   },
// }

// storage.addProducts({id: 'id-3', name: 'carrot', price: 20})
// console.table(storage.getItems());

// storage.removeProduct('id-2');
// console.table(storage.getItems());



//Треба зі статистики загрузок вибрати ті що > 10%

// const uploads = [
//   { name: 'pdf', percentage: 14 },
//   { name: 'psd', percentage: 21 },
//   { name: 'mp3', percentage: 3 },
//   { name: 'flac', percentage: 7 },
// ]; 

// const filterUploadsWithTheshold = function(uploads, threshold){
  
//   const filteredUploads = [];
//   for (const upload of uploads){

//     if(upload.percentage >= threshold) {

//       filteredUploads.push(upload);
//     }
//   }
//   return filteredUploads;
// }

// console.table(filterUploadsWithTheshold(uploads, 10)); 
// console.table(filterUploadsWithTheshold(uploads, 20)); 


//використання рекурсії замісь цикла.
//повертаєм суму перших n елементів масива arr
//(матеріал для розуміння рекурсії https://habr.com/ru/post/337030/)

// function sum(arr, n) {
//   // console.log(arr, n);
//   console.log(arr[n -1]);
// if (n <=0 ) {
//   return 0;
// } else {
//   return sum(arr, n - 1) + arr[n -1];
// }
// }

// console.log(sum([1], 0));  //should equal 0.

// console.log(sum([2, 3, 4], 1));  //should equal 2.

// console.log(sum([2, 3, 4, 5], 3));  //should equal 9.

//те саме тільки множить

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }




//Є два масива з іменами і цінами товарів. Функція яка замість них вертає
//масив об'єктів з їх даними 

// const names = [
//   "Радар",
//   "Сканер",
//   "Дроид",
//   "Захват",
//   "Двигатель",
//   "Топливный бак",
// ];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// const combine = function(names, prices) {
//   const combined = [];

//   for(let i = 0; i < names.length; i += 1) {
   
//     const obj = {
//       name: names[i],
//       price: prices[i],
//     }
//     combined.push(obj);
  
//   }
//   return combined;
// }

// const products = combine(names, prices);

// console.log(products);


//треба зробть те саме тільки щоб ключем була назва а значенням - вартість

// const names = [
//     "Радар",
//     "Сканер",
//     "Дроид",
//     "Захват",
//     "Двигатель",
//     "Топливный бак",
//   ];
//   const prices = [1000, 2000, 1500, 2700, 1600, 8000];
  
//   const combine = function(names, prices) {

//     const comnbined = [];
    
//     for(let i = 0; i < names.length; i += 1) {
//       const obj = {};
//       obj.names[i] = prices[i];
//     }
//     combined.push(obj);
//     return comnbined;
//   }
  
//   const products = combine(names, prices);
  
//   console.table(products);
  


// додаємо інфу в колекцію музикальних альбомів

// var collection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };


// function updateRecords(object, id, prop, value) {
//   if(prop !== "tracks" && value !== "") {
//     object[id][prop] = value;
//   } else if(prop === "tracks" && !object[id].hasOwnProperty("tracks")) { 
//     object[id][prop] = [value];    
//   } else if(prop === "tracks" && value !== ""){
//     object[id][prop].push(value);
//   } else if (value === "") {
//     delete object[id][prop];
//   }
//   return object;
// }

// updateRecords(collection, 5439, 'artist', 'ABBA');

//інший варіант

// var collection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// function updateRecords(object, id, prop, value) {
//   if (value === '') delete object[id][prop];
//   else if (prop === 'tracks') {
//     object[id][prop] = object[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
//     object[id][prop].push(value);
//   } else {
//     object[id][prop] = value;
//   }

//   return object;
// }