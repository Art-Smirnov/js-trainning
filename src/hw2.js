// Задание 2

const calculateEngravingPrice = function(message, pricePerWord) {
  let total = 0;
  const words = message.split(' ');
  for (word of words){
    total += pricePerWord;
  }
return total;
};


console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); 

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); 

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); 

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);



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


// Задание 7
// 55хв
// https://www.youtube.com/watch?v=xFCtQ_2f4yQ&list=PLgJQrLdtxI16RIImPlnkOXJsG16mHNPZ6&index=6