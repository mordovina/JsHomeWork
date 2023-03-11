/*ДЗ 1

Задание 1

Необходимо создать переменную в которой будет храниться температура в градусах Цельсия,
преобразовать значение в температуру по фаренгейту.
Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
Вывести в консоль температуру в Цельсиях и Фаренгейтах.

const degreesCelsius = +prompt ("Введите температуру в градусах Цельсия");
const degreesFahrenheit = (9 / 5) * degreesCelsius + 32;
alert (`Цельсий: ${degreesCelsius}, Фаренгейт: ${degreesFahrenheit.toFixed(1)}`);

Задание 2
Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать
переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной
admin в консоль.

const name = "Юлия";
const admin = name;
console.log(admin);


ДЗ 2

Задание 1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = Number(prompt('Введите первое число:'));
alert ((num1 === 1 || num1 < 1) ? 'Число равно или мменьше 1' : 'Другое');
let num2 = Number(prompt("Введите второе число:"));
alert ((num2 > 3 || num2 === 3) ? 'Число больше или равно 3' : 'Другое');

Задание 2
Перепишите код к тернарному оператору.

let test = true;

if (test === true) {
  console.log("+++");
}
else {
  console.log("---");
}

Задание 3

В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает 
это число (в первую, вторую или третью).

let number = Math.ceil(Math.random() * 31);

if (number <= 10) {
  alert (`${number} день приходится на первую декаду месяца.`)
}
else if (number >= 11 &&  number <= 20) {
  alert (`${number} день приходится на вторую декаду месяца.`)
}
else {
  alert (`${number} день приходится на третью декаду месяца.`)
}

Задание 4

Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

const userNumber = +prompt ("Введите число");
const units = userNumber % 10;
const tens = Math.trunc (userNumber / 10) % 10;
const handreds = Math.trunc (userNumber / 100) % 10;
console.log (`В числе ${userNumber} количество сотен: ${handreds}, десятков: ${tens}, едениц: ${units}`)


ДЗ 3
Задание 1

Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль 
результат 2^3 степени + 3 ^ 3 степени.

function cubeSum() {
  const result = Math.pow(2,3) + Math.pow(3,3);
  console.log(result);
}
cubeSum();*/

/*Задание 2

Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы
за вычетом налогов равен значение"

let salarySum = Number(prompt('Введите размер заработной платы'));

const salary = (salarySum) => salarySum * 0.87;
if (isNaN(salarySum)) {
    alert (`Значение задано неверно. Введите число.`);
} else {
    console.log(`Размер заработной платы за вычетом налогов равен ${salary(salarySum)}`);
}*/

/*Задание 3

Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное 
значение среди этих чисел.

let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));
let num3 = Number(prompt('Введите третье число'));

function maxNum(num1,num2,num3) {
    let max = num1;
    if (num2 > max) max = num2;
    if (num3 > max) max = num3;
    return max;
}
console.log(`Максимальное значение среди введенных чисел: ${maxNum(num1,num2,num3)}`);*/

/*Задание 4

Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из 
операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно 
вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция 
должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются 
корректные числа, проверки на NaN, Infinity делать не нужно.

let number1 = Number(prompt('Введите первое число'));
let number2 = Number(prompt('Введите второе число'));

const addition = (number1,number2) => number1 + number2;
console.log (`Сложение: ${addition(number1,number2)}`);

const difference = (number1,number2) => (number1 > number2) ? (number1 - number2) : (number2 - number1);
console.log (`Разность: ${difference(number1,number2)}`);

const multiplication = (number1,number2) => number1 * number2;
console.log (`Умножение: ${multiplication(number1,number2)}`);

const division = (number1,number2) => (number1 > number2) ? (number1 / number2) : (number2 / number1);
console.log (`Деление: ${division(number1,number2)}`);*/


/*ДЗ 4

Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число

for (let i = 0; i <= 10; i++) {
  if (i === 0) {
    console.log(`${i} - это ноль`);
  } else if (i % 2) {
    console.log(`${i} - нечетное число`);
  }
  else {
    console.log(`${i} - четное число`);
   }    
}

Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3,2);
console.log(arr);

Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 
таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3

const randomArray = new Array (4);
let sumElements = 0;
for (let i = 0; i < randomArray.length; i++) {
    randomArray[i] = Math.floor(Math.random()*10);
    sumElements += randomArray[i];
}
console.log(randomArray);
console.log(`Сумма элементов массива  ${sumElements}`);

const minElement = Math.min(...randomArray)

console.log(`Минимальное число массива  ${minElement}`);

let findElement = 3;
for (let i = 0; i < randomArray.length; i++) {
    if (findElement === randomArray[i]) {
        findElement = true;
    }    
}
console.log ((findElement === true) ? "В массиве есть число  3" : "В массиве нет числа  3");*/