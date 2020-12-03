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



//Об'єкт з викоризнанням метода(функціїї) в ньому яка змінює ціну:

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



//Перебор об'єкта

