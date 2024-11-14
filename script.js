// 1 задание 

let season = "autumn";
season = "winter"; // Переменную, созданную с помощью let можно изменить
console.log(season);
// let season ="summer"; // Но ее нельзя повторно объявить в данной области видимости, выведет ошибку

const month = "november";
// month = "december"; // Переменную, созданную с помощью consr нельзя изменить
// console.log(month); // Выведет ошибку 
// let month ="may"; // И ее также нельзя повторно объявлять, выведет ошибку 


// 2 задание 

/* 
Для объявления переменной также можно использовать var. 
Переменная, созданная таким образом может быть изменена и повторна объявлена. 
Но данный способ считается устаревшим, так как теперь для более предсказуемого и надежного 
поведения кода рекомендуется использовать let и const.
*/


// 3 задание 

let age = 26;
console.log(age);
console.log(typeof(age));


let name = 'Eva';
console.log(name);
console.log(typeof(name));


let isAdult = true;
console.log(isAdult);
console.log(typeof(isAdult));


let email = null;
console.log(email);
console.log(typeof(email));


let birthDate;
console.log(birthDate);
console.log(typeof(birthDate));


let phone = 0 / 0;
console.log(phone);
console.log(typeof(phone));


// 4 задание 

const year = '2080';
console.log(Number(year));
console.log(parseInt(year));

const age2 = 15;
console.log(String(age2));
console.log(age2.toString());


let undefinedValue = undefined;
console.log(String(undefinedValue)); // Мы преобразовали значение в тип данных - string, то есть теперь это значение - текст.
console.log(Number(undefinedValue)); // Преобразование в число невозможно, т.к. в значении нет цифр, поэтому выведется NaN.

let nullValue = null;
console.log(String(nullValue)); // Мы также преобразовали значение в тип данных - string, то есть теперь это значение - текст.
console.log(Number(nullValue)); // В значении нет никаких данных, поэтому выводется 0.


// 5 задание 

let profit = 5000000;
console.log(String(profit));

/*
Динамическая типизация JavaScript предполагает, что не нужно определять тип переменной заранее, 
тип автоматически определится при выполнении программы. Поэтому мы можем использовать одну переменную 
для хранения данных различных типов. 
*/

profit = '500000'; // Изначально в этой переменной был присвоено значение типа number. Теперь я меняю его на значение с типом string.
profit = null; // Теперь я меняю его на значение с типом null.
console.log(profit);


// 6 задание 

let userName = prompt("Введите ваше имя: ");
let userAge = Number(prompt("Введите ваш возраст: "));

console.log(userName);
console.log(userAge);




