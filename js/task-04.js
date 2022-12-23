// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const value = document.querySelector("#value");
let counterValue = 0;
const divEl = document.querySelector("#counter")
const btnElDecrement = divEl.firstElementChild;
const btnElIncrement = divEl.lastElementChild;
btnElDecrement.addEventListener("click", onBtnElDecrementClick);
btnElIncrement.addEventListener("click", onBtnElIncrementClick);
function onBtnElDecrementClick(evt){
    counterValue -= 1;
    value.textContent = counterValue;
}
function onBtnElIncrementClick(evt){
    counterValue += 1;
    value.textContent = counterValue;
}
