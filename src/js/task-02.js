const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainerEl = document.querySelector('#ingredients');

// const options = [];
// for (let ingredient of ingredients) {
//     const listEl = document.createElement('li');
//     listEl.textContent = ingredient;

//     options.push(listEl);
// };

// ingredientsContainerEl.append(...options);

function createList(ingredients) {
  
  const newList = ingredients.map(ingredient => {
    const listEl = document.createElement('li');
    listEl.textContent = ingredient;
    return listEl;
  });

  ingredientsContainerEl.append(...newList);
};

createList(ingredients)