// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");
// const titleItem = document.querySelectorAll("h2");
console.log("Number of categories:", categories.children.length)

items.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent)
    console.log("Elements:", item.lastElementChild.children.length)
    });

    