// Задание 1
const name = 'Генератор защитного поля';
let price = 1000;

console.log(`'Выбран «${name}», цена за штуку ${price} кредитов'`);

price = 2000;

console.log(`'Выбран «${name}», цена за штуку ${price} кредитов'`);

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

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const promptLabel = 'Укажите количество дроидов которые хочите купить:';
let userUnswer = prompt(promptLabel);
let message;

if (userUnswer === null) {
  message ='Отменено пользователем!'
  console.log(message);

  } else {
  totalPrice = userUnswer * pricePerDroid;
  
  } if (totalPrice > credits) {
  message ='Недостаточно средств на счету!'
  console.log(message);
  
  } else {
    const creditsLeft = credits - totalPrice;
    message = `'Вы купили ${userUnswer} дроидов, на счету осталось ${creditsLeft} кредитов.'`;
    console.log(message);
  }


