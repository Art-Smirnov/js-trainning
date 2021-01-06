'use strict';


//використання call https://youtu.be/undvzCuJ_sw?t=1938

// const sell = function(product, price) {
//   console.log(`Manager ${this.name} sold ${product} for ${price}`);
//   this.sales +=1;
// };

// const mango = {
//   name: 'Mango',
//   sales: 10,
// };
// const poly = {
//   name: 'Poly',
//   sales: 20,
// };


// sell.call(mango, 'TV', 50);
// sell.call(poly, 'GPU', 100);
// console.log(mango);
// console.log(poly);


//використання apply https://youtu.be/undvzCuJ_sw?t=2042
//відрізняється від call тим, що приймає аргументи не як список, а як масив


// const sell = function(product, price) {
//   console.log(`Manager ${this.name} sold ${product} for ${price}`);
//   this.sales +=1;
// };

// const mango = {
//   name: 'Mango',
//   sales: 10,
// };
// const poly = {
//   name: 'Poly',
//   sales: 20,
// };


// sell.apply(mango, ['TV', 50]);
// sell.apply(poly, ['GPU', 100]);
// console.log(mango);
// console.log(poly);



// використання bind https://youtu.be/undvzCuJ_sw?t=2203

// const product = {
//   label: 'Adidas',
//   showLabel() {
//     console.log(this);
//     console.log(this.label);

//     return this.label;
//   }
// }

// const printLabel = function(callback) {
//   const label = callback();

//   console.log(`Product label ${label}`);
// }

// printLabel(product.showLabel.bind(product));


//інший приклад використання bind

// const sell = function(product, price) {
//   console.log(`Manager ${this.name} sold ${product} for ${price}`);
//   this.sales +=1;
// };

// const mango = {
//   name: 'Mango',
//   sales: 10,
// };
// const poly = {
//   name: 'Poly',
//   sales: 20,
// };

// const pollySell = sell.bind(poly, 'TV', 50);
// const mangoSell = sell.bind(mango, 'GPU', 100);
// pollySell();
// mangoSell();