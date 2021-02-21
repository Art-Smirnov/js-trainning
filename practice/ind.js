import users from './users.js';
console.log(users);

// Task 1

// Получить массив имен всех пользователей (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Получить массив имен пользователей по полу (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getUsersWithGender = (arr, gender) =>
  arr.reduce((acc, user) => {
    console.log(acc);
    if (user.gender === gender) {
      acc.push(user.name);
    }
    return acc;
  }, []);
console.log(getUsersWithGender(users, 'male'));
