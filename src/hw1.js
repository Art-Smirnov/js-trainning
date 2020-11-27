// Задание 1
// const name = 'Генератор защитного поля';
// let price = 1000;

// console.log(`'Выбран «${name}», цена за штуку ${price} кредитов'`);

// price = 2000;

// console.log(`'Выбран «${name}», цена за штуку ${price} кредитов'`);

// Задание 2

// const total = 100;
// const ordered = 20;
// const isNotEnough = ordered > total;

//  const message = isNotEnough ? "На складе недостаточно твоаров!" : "Заказ оформлен, с вами свяжется менеджер";

// console.log(message);

// Задание 3

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// const userUnswer = prompt('Введиде пароль:');

// switch(userUnswer){
//   case null:
//     message ='Отменено пользователем!'
//     break;

//   case   ADMIN_PASSWORD: 
//     message ='Добро пожаловать!'
//     break;

//   default:
//     message ='Доступ запрещен, неверный пароль!'
// }
// alert(message)

// Задание 4

// const credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;
// const promptLabel = 'Укажите количество дроидов которые хочите купить:';
// let userUnswer = prompt(promptLabel);
// let message;

// if (userUnswer === null) {
//   message = 'Отменено пользователем!'
//   console.log(message);

// } else {
//   totalPrice = userUnswer * pricePerDroid;

//  if (totalPrice > credits) {
//   message = 'Недостаточно средств на счету!'
//   console.log(message);

// } else {
//   const creditsLeft = credits - totalPrice;
//   message = `Вы купили ${userUnswer} дроидов, на счету осталось ${creditsLeft} кредитов.`;
//   console.log(message);
// }
// }

// Задание 5

// let message;

// const userUnswer = prompt("Укажите страну доставки:")
// const userUnswerLC = userUnswer.toLocaleLowerCase();

// const china = "Китай";
// const chinaLC = china.toLocaleLowerCase();
// const chinaPrice = 100;

// const chile = "Чили";
// const chileLC = chile.toLocaleLowerCase();
// const chilePrice = 250;

// const australia = "Австралия";
// const australiaLC = australia.toLocaleLowerCase();
// const australiaPrice = 170;

// const india = "Индия";
// const indiaLC = india.toLocaleLowerCase();
// const indiaPrice = 80;

// const jamaica = "Ямайка";
// const jamaicaLC = jamaica.toLocaleLowerCase();
// const jamaicaPrice = 120;

// switch (userUnswerLC) {
//   case chinaLC:
//   message = `'Доставка в ${china} будет стоить ${chinaPrice} кредитов'`
//   break;
  
//   case chileLC:
//   message = `'Доставка в ${chile} будет стоить ${chilePrice} кредитов'`
//   break;
  
//   case australiaLC:
//   message = `'Доставка в страну ${australia} будет стоить ${australiaPrice} кредитов'`
//   break;
  
//   case indiaLC:
//   message = `'Доставка в страну ${india} будет стоить ${indiaPrice} кредитов'`
//   break;
  
//   case jamaicaLC:
//   message = `'Доставка в страну ${jamaica} будет стоить ${jamaicaPrice} кредитов'`
//   break;

//   default:
//     alert("'В вашей стране доставка не доступна'")
// }
// alert(message);


// Задание 6


// let total = 0;
// let input;
 
// do {
//   input = Number(prompt('Введи число:'));
//   total += input;
//   console.log(total);
// } while (input !== 0);
// alert(`Общая сумма чисел равна ${total}`);

// варіант з додатковою умовою, але з тим що ми ще не вчили:

// let total = 0;
// let input;
 
// do {
//   input = Number(prompt('Введи число'));
//   if (isFinite(input)) {
//     total += input;
//     console.log(total);
//   } else {
//     alert('Было введено не число, попробуйте еще раз');
//   }
// } while (input !== 0);
// alert(`Общая сумма чисел равна ${total}`);