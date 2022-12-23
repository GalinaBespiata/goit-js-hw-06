// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let item ="";
const items = [];
ingredients.forEach((ingridient) => {
   item = document.createElement("li");
item.textContent = ingridient;
item.classList.add("item");
  items.push(item);
})
const list = document.querySelector("#ingredients")
 list.append(...items);

console.log(list)
