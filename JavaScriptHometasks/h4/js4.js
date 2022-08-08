//1.Створити масив чисел, де буде не менше 20 значень, серед них повиннні бути як
// позитивні так і негативні значення.
// Відсортувати даний масив
// а). від найменшого до найбільшого
// б). від найбільшого до найменшого
// 2. відфільтрувати лише позитивні (із нулем )та лише негативні в окремі масиви.
// 3) Створити масив із 10 об’єктів Student {
// age: <some data> ,
// groupName: <some data>
// }
// а) створити окремий масив який матиме лише groupName для всіх об’єктів
// б) порахувати сумарне значення age для всіх об'єктів
// в) визначити чи є неповнолітні студенти в групі і вивести відповідне повідомлення
// Пункти a,б,в - мають бути реалізованими через ФУНКЦІЇ


//task1 (a)
function sortByNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
var arr = [1, 12, 13, 21, 2, 32, 15, 62, 17, 10, 20, 30, 40, 70, 60, 80, 90, 76, 55, 99 ];
arr.sort(sortByNumeric);
console.log(arr);
arr.reverse();
//task1 (b)
console.log(arr);

//task2
function nonTen(a) {
    if (a%10===0) return true;
    if (a%10!==0) return false;
}
var positive = arr.filter(nonTen);
positive.reverse();
console.log(positive);

//task3

var Students = [{
    "age":23,
    "groupName":"Pedro"
},
    {
    "age":17,
    "groupName":"Vlad",
},
    {
        "age":17,
        "groupName":"Nikita",
}
]
//task 3 (a)
var Name = Students.map(item => item.groupName);
console.log(Name);
//task 3 (b)
var Age = Students.map(item =>item.age);
const sumWithInitial = Age.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue = 0
);
console.log(sumWithInitial)
//task 3 (c)
function ageCheker(a) {
    if (a <= 18) return -1;
    if (a => 18) return 1;
}
var smallStudents = Age.filter(ageCheker);
if (smallStudents === 0) {
    console.log("Всі студенти є повнолітні");
}
else (smallStudents !== 0 )
{
    console.log("Час прорідити стадо!");
}

