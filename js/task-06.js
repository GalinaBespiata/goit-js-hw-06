// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const inputEl = document.querySelector("#validation-input");


 inputEl.addEventListener("blur", onInputBlur);

 function onInputBlur(evt){
    if(evt.currentTarget.value.length === Number.parseInt(evt.currentTarget.dataset.length)){
inputEl.classList.add("valid")}
else{
    inputEl.classList.add("invalid")
}
 }