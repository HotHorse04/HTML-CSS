//Мінімум:
// 1. У нас є масив products. Скільки в ньому елементів - не знаємо, але можемо прочитати з products.length.
// Напишіть код для отримання останнього елемента products.
// 2. Створіть масив styles з елементами «Джаз», «Блюз».
// Додайте в кінець значення «Рок-н-Ролл»
// Замініть передостаннє значення на «Класика». Код заміни передостаннього значення має працювати для масивів будь-якої довжини.
// Видаліть перше значення масиву і виведіть його на консоль.
// Додайте в початок значення «Реп» і «Реггі».
// Максимум:
// 3. Створіть функцію find (arr, value), яка шукає в масиві arr значення value і повертає його номер, якщо знайдено, або -1, якщо не
// знайдено.
// 4.Створіть функцію filterRange (array, a, b), яка приймає масив чисел array і повертає новий масив, який містить тільки числа з array з
// діапазону від a до b → [a, b] - проміжки включаються.
// 5. Напишіть функцію camelize (str), яка перетворює такі рядки «my-short-string» в «myShortString».
// Тобто, дефіси видаляються, а всі слова після них отримують велику літеру.

//task1
var products = ['Apples', 'Bannans', 'Pickles'];
alert(products.length);

//task2
var styles = ['Джаз', 'Блюз']
styles.push('Рок-н-ролл');
var last = styles[styles.length-1];
styles.pop();
styles.push('Класика');
styles.push(last);

console.log(styles);
console.log(styles.shift());

styles.unshift('Реггі');
styles.unshift('Реп');
console.log(styles);

//task3
var arr = [13, 14, 18, 17];
var value = 17;

find(arr, value)
function find (arr, value) {
    var findc
    for (let i=0; i<arr.length; i++) {
        if (arr[i] == value) {
            findc = i+1;
        } else {
            findc = -1
        }
    }
    alert(findc);
}

//task 4
// let task4arr = [10, 11, 21, 31, 12, 17];
// let a = 11;
// let b = 12;
// var lastarr = [];
// console.log(filterRange(task4arr, a, b))
// function filterRange (arr, a, b) {
//     for (var i = a; i<=b; i++) {
//         lastarr.pus
//     }
//     return lastarr;
// }