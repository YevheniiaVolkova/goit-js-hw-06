const ingredients =  [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(ingredients);

const list = document.querySelector('#ingredients');

const elementUl = ingredients.map((ingredient) => {
  const elementsLi = document.createElement('li');
  elementsLi.textContent = `${ingredient}`;
  elementsLi.classList.add('item');
  return elementsLi;
  
  
});

list.append(...elementUl);
