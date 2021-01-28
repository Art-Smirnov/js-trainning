//створення розмітки
const products = [
  {
    name: 'Сервоприводы',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ametdolorum reprehenderit cum quam, magni sit itaque id eos officia ab quos impedit voluptas, corrupti voluptatibus modi quisquam perferendis molestias',
    price: 2000,
    available: true,
  },
  {
    name: 'Генерароры',
    description: 'Lorem ipsum dolor pti voluptatibuslestias',
    price: 1000,
    available: false,
  },
  {
    name: 'Нулевой элемент',
    description:
      'Lorem ipsum dolor siicing elit. Eligendi ametdm, ue id eos officia ab quos impedit voluptas, corrupti voluptatibus modi quisquam perferendis molestias',
    price: 5000,
    available: true,
  },
];

// const containerRef = document.createElement('div');
// containerRef.classList.add('product-card');

// const titleRef = document.createElement('h2');
// titleRef.textContent = product.name;
// titleRef.classList.add('product-card__name');
// // console.log(titleRef);

// const descRef = document.createElement('p');
// descRef.textContent = product.description;
// descRef.classList.add('product-card__decr');
// // console.log(descRef);

// const priceRef = document.createElement('p');
// priceRef.textContent = `Цена ${product.price} кредитов`;
// priceRef.classList.add('product-card__price');
// // console.log(priceRef);

// //збираєм елементи в кучу
// // containerRef.appendChild(titleRef);
// // containerRef.appendChild(descRef);
// // containerRef.appendChild(priceRef);

// //сучасний варіант
// containerRef.append(titleRef, descRef, priceRef);

// // console.log(containerRef);

// //додаєм  в ДОМ
// const cardRootRef = document.querySelector('#root');
// cardRootRef.appendChild(containerRef);
// console.log(cardRootRef);

//тепер робим все це функцією

const createProductCard = product => {
  const containerRef = document.createElement('div');
  containerRef.classList.add('product-card');

  const titleRef = document.createElement('h2');
  titleRef.textContent = product.name;
  titleRef.classList.add(
    'product-card__name',
    product.available
      ? 'product-card__name--available'
      : 'product-card__name--not-available',
  );

  const descRef = document.createElement('p');
  descRef.textContent = product.description;
  descRef.classList.add('product-card__decr');

  const priceRef = document.createElement('p');
  priceRef.textContent = `Цена ${product.price} кредитов`;
  priceRef.classList.add('product-card__price');

  containerRef.append(titleRef, descRef, priceRef);

  return containerRef;
};

// console.log(createProductCard(products[0]));
// console.log(createProductCard(products[1]));

products.forEach(product => {
  console.log(createProductCard(product));
});

const productCards = products.map(product => createProductCard(product));

console.log(productCards);

const productListRef = document.querySelector('.js-products');
console.log(productListRef);

productListRef.append(...productCards);
