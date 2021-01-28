import users from './users.js';

// //Збільшуємо баланс кожного юзера на 10%
// const updatedUsers = users.map(user => ({
//   ...user,
//   balance: user.balance + user.balance * 0.1,
// }));

// console.table(updatedUsers);

// додаємо до 50 балансу по id
// const userIdToUpdate = 'e1bf46ab-7168-491e-925e-f01e21394812';

// const updatedUsers = users.map(user => {
//   if (user.id === userIdToUpdate) {
//     return {
//       ...user,
//       balance: user.balance + 50,
//     };
//   }
//   return user;
// });

// console.table(updatedUsers);

// рахуємо загальну суму зарплат

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSelary = Object.values(salary).reduce((acc, num) => acc + num, 0);
// console.log(totalSelary);

// збираємо всі скіли в один масив
// const allSkills = users.reduce((skills, user) => {
//   skills.push(...user.skills);
//   return skills;
// }, []);
// console.log(allSkills);

// виводимо статистику цих скылыв(брудна версія)
// const skillsStats = allSkills.reduce((acc, skill) => {
//   acc[skill] = acc.hasOwnProperty(skill) ? (acc[skill] += 1) : 1;
//   return acc;
// }, {});

// console.log(skillsStats);
// чиста версія
// const skillsStats = allSkills.reduce((acc, skill) => {
//   return {
//     ...acc,
//     [skill]: acc.hasOwnProperty(skill) ? (acc[skill] += 1) : 1,
//   };
// }, {});
// console.log(skillsStats);
