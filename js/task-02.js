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

 const elementUl = ingredients.forEach(ingredient => {
  const elementsLi = document.createElement('li');
  elementsLi.textContent = ingredient;
  elementsLi.classList.add('item');
  list.append(elementsLi);
  
  console.log(list);
})
