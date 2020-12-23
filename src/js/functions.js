'use strict';
//  функція додавання двох чисел

// const add = function (x, y) {
//   console.log(x);
//   console.log(y);
//   const sum = x + y;
//   console.log(sum);
//   console.log('вызов функции add');
// };
// add(2, 3);
// add(23, 364);
// add(234, 54);



// функція пошуку співпвдіння в масиві. (вертає тру або фолс)

// const includes = function(array, value) {
//   for(const item of array){
//     if (item === value) {
//       return true;
//     }
//   }
// return false;
// }

// console.log(includes([1,2,3], 4));
// console.log(includes([1,2,3,4,5], 2));
// console.log(includes(['mango', 'ajax', 'poly'], 'mango'));



// функція яка отримує числа і подвоює їх

// const double = function(array){
//   for(let i = 0;i<array.length; i+=1){
//     array[i]=array[i]*2;
//   }
// }

// const numbers = [1,2,3,4,5];
// double(numbers)
// console.log('numbers: ', numbers);



//функція додавання рандомної кількості чисел (з використанням arguments)

// const add = function(){
//   let total = 0;
//   for (let i = 0; i< arguments.length; i += 1){
//   total += arguments[i];
//   }
//   return total;
// };

// console.log(add(1,2,3,4,5));
// console.log(add(1,2,3,4,5,6,7,8));
// console.log(add(1,2,3,4,5,6,7,8,9));

//сучасний варіант (операція rest):

// const add = function(...args){
//   let total = 0;
//   for (let i = 0; i< args.length; i += 1){
//   total += args[i];
//   }
//   return total;
// };



// console.log(add(1,2,3,4,5));
// console.log(add(1,2,3,4,5,6,7,8));
// console.log(add(1,2,3,4,5,6,7,8,9));


//те саме тільки з множником

// const add = function() {
//   let total = 0;
//   const mult = arguments[0];

//   for (let i = 1; i< arguments.length; i += 1){
//     total += arguments[i];
//     }
//     return total * mult;
//   };
  
//   console.log(add(5,1,2,3,4,5));
//   console.log(add(10, 1,2,3,4,5,6,7,8));
//   console.log(add(15, 1,2,3,4,5,6,7,8,9));

//інший варіант:

// const add = function() {
//   let args = Array.from(arguments);
//   const mult = args[0];
//   args.shift();
//   let total = 0;

//   for (let i = 0; i< args.length; i += 1){
//     total += args[i];
//     }
//     return total * mult;
//   };
  
//   console.log(add(5, 1, 2, 3, 4, 5));
//   console.log(add(10, 1,2,3,4,5,6,7,8));
//   console.log(add(15, 1,2,3,4,5,6,7,8,9));

  //і найкращий варіант (операція rest):

// const add = function(mult, ...args) {
//   let total = 0;
//   for (let i = 0; i< args.length; i += 1){
//     total += args[i];
//     }
//     return total * mult;
// };
  
//   console.log(add(5, 1, 2, 3, 4, 5));
//   console.log(add(10, 1,2,3,4,5,6,7,8));
//   console.log(add(15, 1,2,3,4,5,6,7,8,9));

//функція яка перемножує числа підмасивів 

// function multiplyAll(arr) {
//   var product = 1;
  
// for (let i = 0; i < arr.length; i += 1) {
//   for (let j = 0; j < arr[i].length; j += 1){
//     product *= arr[i][j];
//   }
// }
//   return product;
// }

// console.log(multiplyAll([[1],[2],[3]])); 
// console.log(multiplyAll([[1,2],[3,4],[5,6,7]])); 
// console.log(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])); 