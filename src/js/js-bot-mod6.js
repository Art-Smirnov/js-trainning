//===========1=======================

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   orderedItems.forEach(number => totalPrice += number);

//   // Пиши код выше этой строки
//   return totalPrice;
// }

//===========2=======================

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   numbers.forEach(num => {
//     if (num > value) {
//       filteredNumbers.push(num);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]

//===========3=======================

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки
//   firstArray.forEach(num => {
//     if (secondArray.includes(num)) {
//       commonElements.push(num);
//     }
//   });

//   return commonElements;
//   // Пиши код выше этой строки
// }

//===========4=======================

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => {

//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

//===========5=======================

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) =>
//   quantity * pricePerItem;
// // Пиши код выше этой строки

//===========6=======================

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => (totalPrice += item));
//   return totalPrice;
// };

//===========7=======================

// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

//===========8=======================

// // Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Пиши код выше этой строки
//   return commonElements;
// }

//===========9=======================

// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const newArr = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArr.push(numbers[i] + value);
//     } else {
//       newArr.push(numbers[i]);
//     }
//   }
//   console.log(newArr);
//   return newArr;
//   // Пиши код выше этой строки
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]

//===========10=======================

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);

//===========11======================

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const titles = books.map(book => book.title);

//===========12======================

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое']
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика']
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика']
//   }
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap(book => book.genres);

//===========13======================

// // Пиши код ниже этой строки
// const getUserNames = users => {
//   return users.map(user => user.name);
// };
// // Пиши код выше этой строки

//===========14======================

// // Пиши код ниже этой строки
// const getUserEmails = users => {
//   return users.map(user => user.email);

//   };
//   // Пиши код выше этой строки

//===========15======================

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(val => val % 2 === 0);
// const oddNumbers = numbers.filter(val => val % 2 !== 0);

//===========16======================

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index,
// );

//===========17======================

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(({rating}) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({author}) => author === AUTHOR);

//===========18======================

// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({ eyeColor }) => eyeColor === color);
// };
// // Пиши код выше этой строки

//===========19======================

// Пиши код ниже этой строки

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(({ age }) => age > minAge && age < maxAge);
// };
// // Пиши код выше этой строки

//===========20======================

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({ friends }) => friends.includes(friendName));
// };

//===========21======================

// const getFriends = users => {
//   return users
//     .flatMap(({ friends }) => friends)
//     .filter((friend, i, arr) => arr.indexOf(friend) === i);
// };

//===========22======================

// // Пиши код ниже этой строки
// const getActiveUsers = users => {
//   return users.filter(({ isActive }) => isActive);
// };
// // Пиши код выше этой строки

//===========23======================

// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//   return users.filter(({ isActive }) => !isActive);
// };
// // Пиши код выше этой строки

//===========24======================

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(({title}) => title === BOOK_TITLE);
// const bookByAuthor = books.find(({author}) => author === AUTHOR);

//===========25======================

// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//   return users.find((users) => users.email === email)
// };
// // Пиши код выше этой строки

//===========26======================

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((num) => num % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((num) => num % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((num) => num % 2 === 0);;
// const eachElementInSecondIsOdd = secondArray.every((num) => num % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((num) => num % 2 === 0);;
// const eachElementInThirdIsOdd = thirdArray.every((num) => num % 2 !== 0);

//===========27======================

// // Пиши код ниже этой строки
// const isEveryUserActive = users => {
//   return users.every(({ isActive }) => isActive);
// };
// // Пиши код выше этой строки

//===========28======================

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(num => num % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(num => num % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(num => num % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(num => num % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(num => num % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(num => num % 2 !== 0);

//===========29======================

// // Пиши код ниже этой строки
// const isAnyUserActive = users => {
//   return users.some(({isActive}) => isActive)
// };
// // Пиши код выше этой строки

//===========30======================

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((previousValue, number) => previousValue + number);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

//===========31======================

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, { playtime, gamesPlayed }) => (acc += playtime / gamesPlayed),
//   0,
// );

// console.log(totalAveragePlaytimePerGame);

//===========32======================

// // Пиши код ниже этой строки
// const calculateTotalBalance = users => {
//   return users.reduce((acc, { balance }) => (acc += balance), 0);
// };
// // Пиши код выше этой строки

// console.log(calculateTotalBalance(users));

//===========33======================

// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//   return users.reduce((acc, { friends }) => acc + friends.length, 0);
// };
// // Пиши код выше этой строки
// console.log(getTotalFriendCount(users));

//===========34======================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

//===========35======================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

//===========36======================
//Свой порядок сортировки строк

// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
//   'Говард Лавкрафт',
// ];
// // Пиши код ниже этой строки

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

//===========37======================

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstName, secondName) =>
//   firstName.author.localeCompare(secondName.author),
// );

// const sortedByReversedAuthorName = [...books].sort((firstName, secondName) =>
//   secondName.author.localeCompare(firstName.author),
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstRating, secondRating) => firstRating.rating - secondRating.rating,
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstRating, secondRating) => secondRating.rating - firstRating.rating,
// );

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

//===========38=======================

// // Пиши код ниже этой строки
// const sortByAscendingBalance = users => {
//   return users.sort(
//     ({ balance: firstBalance }, { balance: secondBalance }) =>
//       firstBalance - secondBalance,
//   );
// };
// // Пиши код выше этой строки

//===========39======================

// Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
//   return [...users].sort(
//     ({ friends: firstFriend }, { friends: secondFriend }) =>
//       secondFriend.length - firstFriend.length,
//   );
// };
// // Пиши код выше этой строки

//===========40======================

// Пиши код ниже этой строки
// const sortByName = users => {
//   return [...users].sort(({ name: firstName }, { name: secondName }) =>
//     firstName.localeCompare(secondName),
//   );
// };
// // Пиши код выше этой строки

//===========41======================

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books
//   .filter(({ rating }) => rating > MIN_BOOK_RATING)
//   .map(({ author }) => author)
//   .sort((a, b) => a.localeCompare(b));

//===========42======================

// // Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => {
//   return [...users]
//     .sort(({ friends: a }, { friends: b }) => a.length - b.length)
//     .map(({ name }) => name);
// };
// // Пиши код выше этой строки

//===========43======================

// // Пиши код ниже этой строки
// const getSortedFriends = users => {
//   return users
//     .flatMap(({ friends }) => friends)
//     .filter((friend, i, arr) => arr.indexOf(friend) === i)
//     .sort((a, b) => a.localeCompare(b));
// };

// // Пиши код выше этой строки

//===========44======================

// // Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .reduce((acc, { balance }) => acc + balance);
// };
// // Пиши код выше этой строки
