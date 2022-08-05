
// 1) Створіть порожній об'єкт user.
// ● Додайте властивість name зі значенням ПИЛИП.
// ● Додайте властивість surname зі значенням ШЕВЧЕНКО.
// ● Поміняйте значення name на СЕРГІЙ.
// ● Видаліть властивість name з об'єкта.
// 2) Є об'єкт employeeSalaries із зарплатами працівників.
// Напишіть код, який виведе суму всіх зарплат працівників . Якщо об'єкт порожній, то
// результат повинен бути 0.
// 3) Напишіть функцію, яка прийматиме два числа і тип операції над ними (множення ділення,
//     додавання віднімання). Передбачити відловлювання exceptions за умови некоретних
// вхідних даних
// task 1
var user = new Object();
user.name = 'Пилип';
user.surname = 'Шевченко';
console.log(user.name, user.surname)
user.name = 'сергій';
console.log(user.name)
delete user.name;

//task2
var i;
var employeeSalaries = new Object()
employeeSalaries.moneyOfSergiy = 130;
employeeSalaries.moneyOfNatasha = 150;
employeeSalaries.moneyOfDasha = 100;
    console.log(i = employeeSalaries.moneyOfNatasha + employeeSalaries.moneyOfDasha + employeeSalaries.moneyOfSergiy);
        if (employeeSalaries == 0 || employeeSalaries == NaN || employeeSalaries == null) {
            console.log("Зарплати дорівнюють нулю");
        }
//task 3
function twoNumbers (a, b, v) {
            a = parseFloat(a);
            b = parseFloat(b);
            if (v == '+') {
                d = a + b;
            } else if (v == '-') {
                d = a-b;
            } else if (v == '*') {
                d = a*b;
            } else if (v == '/') {
                d = a/b;
            }
            alert(d);
}
        try {
            a = prompt("Введіть перше число: ");
            b = prompt("Введіть друге число: ");
            v = prompt("Введіть операцю яку ви бажаєте здійснити: ");
            twoNumbers(a, b, v);
        } catch (NaN) {
                throw alert("некоректно введенні данні");
        }
         finally {
            alert("Перезавантажте сторінку");
        }