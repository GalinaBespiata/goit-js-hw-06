// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputRangeEl = document.querySelector("#font-size-control");

const spanInputEl = document.querySelector("#text");

inputRangeEl.addEventListener("input",changeFontSize);



function changeFontSize(evt){
    spanInputEl.style.fontSize = evt.currentTarget.value + "px";

    console.log(spanInputEl.style)
}