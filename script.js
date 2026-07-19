'use strict';

// console.log(Number.parseInt(Math.random() * кол-во участников));

// function foo(x) {
//   let normalNumber = parseFloat(x.replace(',', '.')).toFixed(1);
//   return Number(normalNumber);
// }

// const hi = foo('13,543065');
// console.log(hi);

// function getPrice(subscription) {
//   let price = 0;

//   if (subscription === 'pro') {
//     price = 100;
//   }

//   return price;
// }

// console.log(`Salut your price ${getPrice('free')}`); // 0
// console.log(getPrice('pro')); // 100

// function checkAge(age) {
//   if (age >= 18) {
//     return `You are an adult`;
//   } else {
//     return `Go away MF`;
//   }
// }

// console.log(checkAge(19));

// const grade = 85;

// if (grade >= 90) {
//   console.log('Perfectly');
// } else if (grade >= 80) {
//   console.log('Good');
// } else if (grade >= 70) {
//   console.log('Satisfactorily');
// } else {
//   console.log('Unsatisfactorily');
// }

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type); // 'adult'

// const a = 5;
// const b = 10;
// let biggerNumber;

// if (a > b) {
//   biggerNumber = a;
// } else {
//   biggerNumber = b;
// }

// console.log(biggerNumber); // 10

// const a = 5;
// const b = 10;

// const biggerNumber = a > b ? a : b;

// console.log(biggerNumber);

// function checkPassword(password) {
//   const correctPassword = 'jqueryismyjam';
//   return password === correctPassword
//     ? `Access granted`
//     : `Access denied, wrong password!`;
// }

// console.log(checkPassword('jqueryismyjam'));

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case 'starter':
//       return 0;
//     case 'professional':
//       return 20;
//     case 'organization':
//       return 50;
//     default:
//       return `Invalid subscription type!`;
//   }
// }

// console.log(getSubscriptionPrice('professional'));

// function isNumberInRange(start, end, number) {
//   return start <= number && number <= end;
// }

// console.log(isNumberInRange(1, 10, 5));
// console.log(isNumberInRange(1, 10, 50));

// console.log(0 && null);

// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }

// console.log(toggleModalVisibility(false));

// const message = 'JavaScript is awesome';
// console.log(message.length);
// console.log(message.length - 1);
// console.log(message.slice(0, 3));

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }

// console.log(getSubstring('Hello', 3));
// console.log('Hello'.toLowerCase());
// console.log('Hello'.toUpperCase());

// Функція normalizeInput(input, to) оголошує два параметри:

// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:

// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі

// function normalizeInput(input, to) {
//   return to === 'lower'
//     ? input.toLowerCase()
//     : to === 'upper'
//       ? input.toUpperCase()
//       : `Pls fix ${to} value`;
// }

// console.log(normalizeInput("This ISN'T SpaM", 'loweR'));
// console.log(normalizeInput("This ISN'T SpaM", 'upper'));

// console.log(
//   'Please buy our stuff!'.includes('ourklsjg') ||
//     'Please buy our stuff!'.includes('buy')
// );

// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase());
// }

// console.log(checkForName('Jason Neis', 'Jason'));

// function checkFileExtension(fileName, ext) {
//   return fileName.toLowerCase().endsWith(ext.toLowerCase())
//     ? `File extension matches`
//     : `File extension does not match`;
// }

// console.log(checkFileExtension('style.csS', '.CSS'));

// console.log(
//   'London is a capital of Great Britain'
//     .toLowerCase()
//     .indexOf('britain'.toLowerCase())
// );

// console.log(
//   'London is a capital of Great Britain'.slice(
//     'London is a capital of Great Britain'
//       .toLowerCase()
//       .indexOf('britain'.toLowerCase()),
//     'London is a capital of Great Britain'
//       .toLowerCase()
//       .indexOf('britain'.toLowerCase()) + 3
//   )
// );

// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення

// function getFileName(file) {
//   console.log(file.slice(0));

//   return file.indexOf('.') ? file.slice(file.indexOf('.')) : `${file}`;
// }

// function getFileName(file) {
//   return file.indexOf('.') === -1 ? file : file.slice(0, file.indexOf('.'));
// }

// function getFileName(file) {
//   if (file.indexOf('.') === -1) {
//     return file;
//   }
//   return file.slice(file.indexOf('.'));
// }

// console.log(getFileName('styles.css'));
// console.log(getFileName('hi'));
// console.log(getFileName('indexd'));

// let count = 0;

// while (count <= 10) {
//   console.log(`Count: ${count}`);
//   count += 3;
// }

// let clientCounter = 0;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// function calculateTotal(number) {
//   let newNumber = 1;
//   let total = 0;

//   while (newNumber <= number) {
//     total += newNumber;
//     newNumber += 1;
//   }
//   return total;
// }

// console.log(calculateTotal(18));

// let count = 0;

// do {
//   console.log(`Count: ${count}`);
//   count += 1;
// } while (count < 5);

// let total = 0;
// for (let i = 0; i <= 3; i += 1) {
//   // console.log(i);
//   total += i;
// }

// console.log(total);

// for (let i = 20; i >= 0; i -= 5) {
//   console.log(i);
// }

// Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   let total = 0;
//   for (let index = 1; index <= number; index++) {
//     console.log(index);

//     total += index;
//   }
//   return total;
// }

// console.log(calculateTotal(3));

// Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

// function calculateEvenTotal(number) {
//   let total = 0;
//   for (let index = 0; index <= number; index += 2) {
//     total += index;
//     // console.log(index);
//   }
//   return total;
// }

// calculateEvenTotal(7);

// console.log(calculateEvenTotal(7)); // 12

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);

//   if (i === 5) {
//     console.log('Met the number 5, interrupt the execution of the cycle');
//     break;
//   }
// }

// console.log('Log after cycle');

// const start = 6;
// const end = 17;
// let number;

// for (let index = start; index <= end; index++) {
//   if (index % 5 === 0) {
//     number = index;
//     // break;
//     console.log(number);
//   }
// }
// console.log(number);

// function findNumber(max, target) {
//   console.log('Log in the body of the function before the cycle');

//   for (let i = 5; i <= max; i += 1) {
//     console.log('Current counter value i:', i);

//     if (i === target) {
//       console.log(`Found the number $ {target}, interrupt the cycle`);
//       break;
//     }
//   }

//   console.log('Log in body function after cycle');
// }

// findNumber(10, 6);
// console.log('Log after exiting function');

// function findNumber(max, target) {
//   console.log('Log in the body of the function before the cycle');

//   for (let i = 5; i <= max; i += 1) {
//     console.log('Current counter value i:', i);

//     if (i === target) {
//       console.log(
//         `Found the number ${target}, we make a return, interrupting the loop and function`
//       );
//       return i;
//     }
//   }

//   // Цей console.log не виконується
//   console.log('Log in body function after cycle');
// }

// const result = findNumber(10, 6);
// // console.log(findNumber(10, 6));

// console.log('Log after exiting function');
// console.log(`Result of function execution ${result}`);

// Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

// Доповни код функції таким чином, щоб вона:

// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break

// function findNumber(start, end, divisor) {
//   let mysteryNumber;
//   for (let i = start; i < end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// console.log(findNumber(8, 17, 3));
// let newIndex;
// for (let i = 6; i > 3; i--) {
//   console.log(i);
//   newIndex = i;
// }

// console.log(newIndex);

// i = 0;
// n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   n += i;
// }

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let total = 0;

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     continue;
//   }
//   total += number;
// }
// console.log(total);
// const arr = [22, 17, 94, 144, 5, 24];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

// let min;

// for (let i = 0; i < arr.length; i++) {
//   if (i === 0) {
//     min = arr[i];
//   }
//   if (arr[i] > min) {
//     continue;
//   }
//   min = arr[i];
// }
// console.log(min);

// const str = 'Monica Phoebey Joey Peter Klara Vin';
// const arr = str.split(' ');
// let newItem;
// const newArray = [];

// for (const item of arr) {
//   newItem = item + '!';
//   newArray.push(newItem);
// }

// console.log(newArray);

// console.log(newArray.join(' '));

// Функція getOrderQuantity(order) приймає один параметр order - масив рядків, які описують продукти в замовленні клієнта. Доповни код функції таким чином, щоб вона повертала число, що дорівнює кількості елементів масиву.

// function getOrderQuantity(order) {
//   return order.length;
// }

// console.log(getOrderQuantity(['apple', 'peach', 'pear', 'banana']));

// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень. Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

// function getLastElementMeta(array) {
//   const lastIndex = array.length - 1;
//   const lastElement = array[array.length - 1];

//   return [lastIndex, lastElement];
// }

// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));

// Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини. Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.

// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   return [firstElement, lastElement];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// let a = [10];
// let b = a;

// a[0] = 5;

// console.log(a);
// console.log(b);

// function fillArray(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }

// console.log(fillArray(2, 10));

// Функція getLength(array) очікує один параметр array - масив довільних значень. Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.

// function getLength(array) {
//   return array.join('').length;
// }

// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));

// const name = 'Teodor Brozdon';

// const letters = name.split('');

// console.log(letters);

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//   const msgLength = message.split(' ').length;
//   return msgLength * pricePerWord;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));

// const name = 'Hello';

// const newName = name.split('');

// const joinName = newName.join('');

// console.log(name);
// console.log(newName);
// console.log(joinName);

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'];
// console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]

// const name = 'ALice';

// console.log(name.startsWith('a'));

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
//   return array.slice(0, array.indexOf(value) + 1);
// }

// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly'));

//+++++++++++++

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// function foo(arr, count) {
//   let splicedNumbers;
//   let total = [];
//   for (let i = 0; 0 < arr.length; i++) {
//     splicedNumbers = arr.splice(0, count);
//     if (splicedNumbers.length !== count) {
//       continue;
//     }
//     total.push(splicedNumbers);
//   }
//   return total;
// }

// console.log(foo(numbers, 2));

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// function foo(arr, count) {
//   let result = [];
//   let splicedNumbers;

//   while (arr.length > 0) {
//     splicedNumbers = arr.splice(0, count);

//     if (splicedNumbers.length !== count) {
//       continue;
//     }
//     result.push(splicedNumbers);
//   }
//   return result;
// }

// console.log(foo(numbers, 3));

//++++++++++++++++++

// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// function createArrayOfNumbers(min, max) {
//   const arr = [];
//   for (let i = min; i <= max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// console.log(createArrayOfNumbers(14, 17));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function foo(arr, count) {
//   let result = [];
//   for (let i = 0; arr.length > 0; ) {
//     result.push(arr.splice(i, count));
//   }
//   return result;
// }

// console.log(foo(numbers, 1));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// function getEvenNumbers(start, end) {
//   let arr = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 !== 0) {
//       continue;
//     }
//     arr.push(i);
//   }
//   return arr;
// }

// console.log(getEvenNumbers(6, 12));

// function foo() {
//   const fruits = ['apple', 'banana', 'orange'];

//   if (fruits.includes('banan')) {
//     return 'The array has an element banana';
//   }
//   return 'Array does not contain banana element';
// }

// console.log(foo());

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     return `${item.toLowerCase()} is available to order!`;
//   }
//   return `Sorry! We are out of stock!`;
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));

// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.

// function getCommonElements(array1, array2) {
//   let newArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const element of order) {
//     total += element;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([164, 48, 291]));

// function sum(a, b) {
//   console.log(arguments);
//   for (const arg of arguments) {
//     console.log(arg);
//   }
//   console.log(arguments[1]);
// }

// console.log(sum(2, 5));

// function foo() {
//   // У змінній args буде повноцінний масив з усіх аргументів
//   const args = Array.from(arguments);
//   return args.join(' ');
// }

// // Поверне "1-2-3"
// console.log(foo(1, 2, 3));

// console.log('Alice Hello'.split(' '));

// Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// function createReversedArray() {
//   return Array.from(arguments).toReversed();
// }

// function createReversedArray() {
//   const lastIndex = arguments.length - 1;
//   const newArray = [];

//   for (let i = lastIndex; i >= 0; i--) {
//     newArray.push(arguments[i]);
//   }
//   return newArray;
// }

// console.log(createReversedArray(12, 85, 37, 5));

// function greet(username = 'Guest') {
//   console.log(`Hello, ${username}!`);
// }

// greet('Jacob'); // "Hello, Jacob!"
// greet(); // "Hello, Guest!"

// function bar() {
//   console.log('bar');
// }

// function baz() {
//   console.log('baz');
// }

// function foo() {
//   console.log('foo');
//   bar();
//   baz();
// }

// foo();

// function factorial(n) {
//   // Базовый случай: если n равно 1 или 0, факториал равен 1
//   if (n <= 1) {
//     return 1;
//   }
//   // Шаг рекурсии: число n умножается на факториал от (n - 1)

//   return n * factorial(n - 1);
// }

// console.log(factorial(4)); // Выведет 24

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };

// console.log(credentials.email);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// const book = {
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }

// console.log(countProps({ name: 'Mango', age: 2 }));

// Запиши у змінну keys масив ключів властивостей об'єкта apartment, а у змінну values - масив їх значень. Використовуй методи Object.keys() і Object.values().

// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell' },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley' },
//   { title: 'The Tell-Tale Heart', author: 'Edgar Allan Poe' },
// ];

// const authorToSearchFor = 'Robert Sheckley';

// for (const book of books) {
//   if (book.author === authorToSearchFor) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.author);
//   }
// }

// Функція getProductPrice(productName) приймає один параметр productName - назва продукту. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice('Radar'));

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   const arr = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       arr.push(product[propName]);
//     }
//   }
//   return arr;
// }

// console.log(getAllPropValues('category'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('quantity'));

// Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   let totalPrice;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       return totalPrice;
//     }
//   }

//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Scanner'));
// console.log(calculateTotalPrice('Blaster'));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   let value = false;
//   for (const product of products) {
//     if (product.name === productName) {
//       console.log(product.name);
//       value = true;
//     }
//   }
//   if (!value) {
//     console.log('Wtf');
//   }
// }

// calculateTotalPrice('Radar');
// calculateTotalPrice('Scanner');
// calculateTotalPrice('Blaster');

// const bookShelf = {
//   books: ['The Last Kingdom', 'The Mist'],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}

// const bookShelf = {
//   books: [
//     { title: 'The Last Kingdom', rating: 8 },
//     { title: 'The Mist', rating: 6 },
//   ],
//   getBooks() {
//     return this.books;
//   },
// };

// console.log(bookShelf.getBooks());

// function multiply(...args) {
//   console.log(args);
// }

// multiply(1, 2); // [1, 2]
// multiply(1, 2, 3); // [1, 2, 3]
// multiply(1, 2, 3, 4); // [1, 2, 3, 4]

// console.log(Math.max(14, -4, 25, 8, 11));

// const temps = [14, -4, 25, 8, 11];

// const newTemps = [temps];

// console.log(newTemps.length);
// console.log(temps.length);
// console.log(temps);
// console.log(newTemps);

// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     const id = Math.floor((Math.random() * 10000) / Math.random());
//     // const id = amount;

//     return {
//       id,
//       type,
//       amount,
//     };
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//     this.balance += amount;
//     return `Поповнення успішно! Ваш баланс складає ${this.balance}`;
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount < this.balance) {
//       this.transactions.push(
//         this.createTransaction(amount, Transaction.WITHDRAW)
//       );
//       this.balance -= amount;

//       return `Зняття успішно! Ваш баланс складає ${this.balance}`;
//     }
//     return `недостатньо коштів для зняття ${amount}`;
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return `Ваш баланс складає ${this.balance}`;
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for (const item of this.transactions) {
//       if (item.id === id) {
//         return item;
//       }
//     }
//     return `Такої транзакції не знайдено в історії`;
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const item of this.transactions) {
//       if (item.type === type) {
//         total += item.amount;
//       }
//     }
//     return `Сума загальних операцій ${type} складає ${total}`;
//   },
// };

// console.log(account.createTransaction(1000, 'deposit'));
// console.log(account.createTransaction(1000, 'withdraw'));

// console.log(account.deposit(10000));
// console.log(account.withdraw(1000));
// console.log(account.deposit(5000));
// console.log(account.withdraw(500));
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(1001));
// console.log(account.getTransactionTotal('deposit'));

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Royal Grand', makePizza));

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item, index) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// /*
//  * Збільшуємо кількість годин гравця за id
//  */
// const playerId = 'player-3';

// const updatedPlayers = players.map(player => {
//   //player-3 === "player-3"
//   if (player.id === playerId) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }

//   return player;
// });

// console.table(updatedPlayers);

// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа value. Якщо таких значень не буде знайдено, функція повертає порожній масив

// function filterArray(numbers, value) {
//   let newArray = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   });
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);

// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   console.log(numbers);
// }

// function changeEven(numbers, value) {
//   let newArr = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       number += value;
//     }
//     newArr.push(number);
//   });
//   return newArr;
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];

// const names = students.map((student, index) => {
//   console.log(index + 1);
// });

// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

// const scores = [10, 80, 95, 45, 85];

// const rewards = scores
//   .filter(score => score > 70) // Здесь создался промежуточный массив [80, 95, 85]
//   .map((score, index, array) => {
//     // Внутри map переменная 'scores' всё еще равна [10, 80, 95, 45, 85] (длина 5)
//     // А вот 'array' — это именно наш отфильтрованный массив [80, 95, 85] (длина 3)
//     console.log(array);

//     return `Твой балл: ${score}. Ты один из ${array.length} лучших студентов!`;
//   });

// console.log(rewards);
// [
//   "Твой балл: 80. Ты один из 3 лучших студентов!",
//   "Твой балл: 95. Ты один из 3 лучших студентов!",
//   "Твой балл: 85. Ты один из 3 лучших студентов!"
// ]

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUserEmails = users => {
//   return users.map(user => user.email);
// };

// console.log(getUserEmails(users));

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// const average = students.filter(
//   student => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: true,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: true,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: true,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const isEveryUserActive = users => {
//   return users.every(user => user.isActive);
// };

// console.log(isEveryUserActive(users));

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousTime, playtime) => {
//   return previousTime + playtime;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(averagePlayTime);

// console.log(total); // 12

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return player.playtime / player.gamesPlayed + total;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const calculateTotalBalance = users.reduce((total, user) => {
//   return (user.balance += total);
// }, 0);

// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => {
//     return user.balance + total;
//   }, 0);
// };

// const calculateTotalBalance = users =>
//   users.reduce((total, user) => user.balance + total, 0);

// const calculateTotalBalance = users =>
//   users.reduce((total, user) => user.balance + total, 0);

// console.log(calculateTotalBalance(users));

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
// ];

// const inAscendingScoreOrder = students.toSorted((a, b) => a.score - b.score);

// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.toSorted((a, b) =>
//   a.name.localeCompare(b.name)
// );

// console.log(inAscendingScoreOrder);
// console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Tell-Tale Heart',
//     author: 'Edgar Allan Poe',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((a, b) =>
//   a.author.localeCompare(b.author)
// );

// const sortedByReversedAuthorName = books.toSorted((a, b) =>
//   b.author.localeCompare(a.author)
// );
// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// const students = [
//   { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
//   { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
//   { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
//   { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
// ];

// const uniqueSortedCourses = students.flatMap(student => student.courses);
// // .filter((course, index, array) => array.indexOf(course) === index)
// // .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

// const studentsNew = [
//   'mathematics',
//   'physics',
//   'science',
//   'mathematics',
//   'physics',
//   'biology',
//   'literature',
//   'science',
// ];

// const foo = studentsNew.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// console.log(foo);

// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. Використовуй ланцюжок методів.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Tell-Tale Heart',
//     author: 'Edgar Allan Poe',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(names);

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order('Smoked'));
// console.log(pizzaPalace.order('Four meats'));

// const objC = { c: 'objC prop' };

// const objB = Object.create(objC);
// objB.b = 'objB prop';

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// class Car {
//   #brand;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));

// class User {
//   static roles = {
//     admin: 'admin',
//     editor: 'editor',
//     basic: 'basic',
//   };

//   #email;
//   #role;

//   constructor(params) {
//     this.#email = params.email;
//     this.#role = params.role || User.roles.basic;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   role: User.roles.admin,
// });

// console.log(mango.role); // "admin"
// mango.role = User.roles.editor;
// console.log(mango.role); // "editor"

// class Car {
//   #price;
//   static maxPrice = 50000;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".

// class Car {
//   static #maxPrice = 50000;

//   static checkPrice(price) {
//     if (price > Car.#maxPrice) {
//       return 'Error! Price exceeds the maximum';
//     }
//     return 'Success! Price is within acceptable limits';
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }

// console.log(Admin.role.SUPERUSER);

// Додай класу Admin метод constructor, який приймає один параметр params- об'єкт налаштувань з двома властивостями email і access. Додай класу Admin публічну властивість access, значення якої буде передаватися під час виклику конструктора.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }

//   blacklistedEmails = [];

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// const person = {
//   name: 'Mango',
// };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.bind(person, 18));
// console.log(sayHi.call(person, 18));

// const heading = document.createElement('h1');
// heading.classList.add('title');
// heading.textContent = 'This is a heading';
// console.log(heading); // <h1 class="title">This is a heading</h1>

// const image = document.createElement('img');
// image.src = 'https://picsum.photos/id/11/320/240';
// image.alt = 'Nature';
// console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />

// document.body.append(heading);
// document.body.append(image);

// console.log(heading.innerHTML);

// heading.insertAdjacentHTML('afterbegin', 'hi ');

// console.log(heading.innerHTML);

// Створити елемент div і додати йому клас book-card.

// Створити заголовок h2 для назви, тег p для автора, та span для ціни.

// Заповнити їх відповідним текстом через textContent.

// Зібрати все докупи (закинути назву, автора й ціну всередину div.book-card).

// Додати саму картку на сторінку в body.

// const book = {
//   title: 'Гаррі Поттер і філософський камінь',
//   author: 'Дж. К. Ролінґ',
//   price: '350 грн',
// };

// const div = document.createElement('div');
// div.classList.add('book-card');
// div.style.backgroundColor = 'pink';
// div.style.width = '200px';
// div.style.height = '270px';
// div.style.borderRadius = '15px';
// div.style.textAlign = 'center';
// div.style.alignContent = 'center';

// const h2 = document.createElement('h2');
// const p = document.createElement('p');
// const span = document.createElement('span');
// div.append(h2, p, span);
// h2.textContent = book.title;
// p.textContent = book.author;
// span.textContent = book.price;

// span.style.color = 'green';

// console.log(div.getAttribute('style'));
// document.body.append(div);

// console.log(div);

// const products = ['Молоко', 'Хліб', 'Сир', 'Яблука'];

// const list = document.querySelector('#shopping-list');

// const arr = products
//   .map(product => {
//     return `<li>${product}</li>`;
//   })
//   .join('');

// console.log(arr);

// list.innerHTML = arr;

// console.log(list);

// const add = document.querySelector('.add');
// const remove = document.querySelector('.remove');
// const click = document.querySelector('.click');

// const addEvent = () => {
//   console.log('Click event');
// };

// add.addEventListener('click', () => {
//   click.addEventListener('click', addEvent);
// });

// remove.addEventListener('click', () => {
//   click.removeEventListener('click', addEvent);
// });

// const saveBtn = document.querySelector('#action-btn');
// const alertHtml = '<div class="alert success">Успішно збережено!</div>';
// const divBox = document.querySelector('.box');
// divBox.style.width = '200px';
// divBox.style.height = '200px';
// divBox.style.backgroundColor = 'red';

// saveBtn.addEventListener('click', () => {
//   saveBtn.insertAdjacentHTML('afterend', alertHtml);
// });

// const eventChecker = event => {
//   console.log(event);
//   console.log(event.type);
//   console.log(event.currentTarget);
// };

// saveBtn.addEventListener('click', eventChecker);

// const form = document.querySelector('#form');

// form.addEventListener('submit', () => {
//   event.preventDefault();
//   console.log('Frorm get enter');
//   console.log(form.elements.password.value);
// });

// const select = document.querySelector('.pizza-select');

// const eventTarget = event => {
//   console.log(event);

//   console.log(event.currentTarget.value);
//   console.log(event.currentTarget.selectedIndex);
//   console.log(event.currentTarget.options);
//   console.log(
//     event.currentTarget.options[event.currentTarget.selectedIndex].text
//   );
// };

// select.addEventListener('change', eventTarget);

// console.log(select);

// const add = document.querySelector('.add');
// const remove = document.querySelector('.remove');
// const click = document.querySelector('.click');
// const span = document.querySelector('.focus');

// const checkFocus = () => {
//   console.log(span);

//   span.insertAdjacentHTML('afterbegin', 'This input has focus');
// };

// const blurFocus = () => {
//   console.log(span);

//   span.innerHTML = '';
// };

// add.addEventListener('focus', checkFocus);
// add.addEventListener('blur', blurFocus);

// const paragraph = document.getElementById('text');
// paragraph.addEventListener('mouseenter', function () {
//   this.style.background = 'red';
// });
// console.log(paragraph);

//  * Реалізуй пошук автомобілів по сайту
//  * Користувач потрапляє на сайт і одразу бачить форму для пошуку
//  * і картки всіх автомобілів (масив cars)
//  * Користувач може ввести в форму назву Марки або Моделі авто і в
//  * тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
//  * Після натискання кнопки пошуку (сабміт форми) відмалюй авто
//  * які збігаються з критеріями пошуку
//  */

// const

// const colorPalette = document.querySelector('.color-palette');
// const output = document.querySelector('.output');
// colorPalette.style.display = 'grid';
// colorPalette.style.gap = '4px';
// colorPalette.style.gridTemplateColumns = 'repeat(auto-fit, minmax(40px, 1fr))';

// colorPalette.addEventListener('click', selectColor);

// function selectColor(event) {
//   console.log(event.target.nodeName);
//   const selectedColor = event.target.dataset.color;
// }

// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement('button');
//     item.type = 'button';
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.style.width = '40px';
//     item.style.height = '40px';
//     item.style.borderRadius = '4px';

//     item.classList.add('item');
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomHexColor() {
//   const letters = '0123456789ABCDEF';

//   let color = '#';

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }

// console.log(_);

// console.log(_.sum([4, 2, 8, 6])); // 20
// console.log(_.sum([5, 10])); // 15

// console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
// console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]

// console.log();

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// const dog = {
//   name: 'Mango',
//   age: 3,
//   isGoodBoy: true,
// };

// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

// const jsonN = JSON.stringify(true);
// console.log(jsonN);

// const data = JSON.parse('"Well, this is awkward"');
// console.log(data);

// console.log(window.localStorage);
// // Storage {length: 0}

// localStorage.setItem('Name', 'Alice');
// console.log(localStorage);

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// const savedTheme = localStorage.getItem('ui-theme');
// console.log(savedTheme); // "light"

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 4],
// };
// localStorage.setItem('settings', JSON.stringify(settings));

// const savedSettings = localStorage.getItem('settings');
// console.log(savedSettings); // A string

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object

// localStorage.setItem('ui-theme', 'dark');
// console.log(localStorage.getItem('ui-theme')); // "dark"

// localStorage.removeItem('ui-theme');
// console.log(localStorage.getItem('ui-theme')); // null

// localStorage.setItem('ui-theme', 'light');
// localStorage.setItem('notif-level', 'mute');

// console.log(localStorage);
// // Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

// localStorage.clear();
// console.log(localStorage); // Storage {length: 0}

// sessionStorage.setItem('user-id', '123');
// sessionStorage.setItem(
//   'tickets',
//   JSON.stringify({ from: 'Lviv', to: 'Kyiv', quantity: 2 })
// );
// console.log(sessionStorage);
// // Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

// console.log(JSON.parse(sessionStorage.getItem('tickets')));

// sessionStorage.removeItem('tickets');
// sessionStorage.clear();

// const form = document.querySelector('.feedback-form');
// const localStorageKey = 'goit-example-message';
// const savedMessage = localStorage.getItem(localStorageKey);

// if (savedMessage) {
//   form.elements.message.value = savedMessage;
// }

// form.addEventListener('input', evt => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });
// const button = document.querySelector('.timer');

// button.addEventListener('click', buttonClick);

// function buttonClick() {
//   setTimeout(() => {
//     console.log('hi');
//   }, 2000);
// }

console.log(Date());

const date = new Date('2030-03-16');
console.log(date); // "Sat Mar 16 2030 00:00:00 GMT+0200"
