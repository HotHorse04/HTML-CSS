//.1. Реалізувати стрічковий буфер використовуючи функцію з
// наступним синтаксисом:
// Об'єкт буфера:
// var buffer = makeBuffer();
// Виклик makeBuffer повинен повертати таку функцію buffer, яка при
// виклику buffer(value) додасть значення в деяке внутрішнє сховище, а
// при виклику без аргументів buffer() - поверне всі значення сховища.

//3. Реалізуйте метод buffer.clear(), який буде очищати поточний вміст буфера:
// function makeBuffer () {
// ... ваш код ...
// }
// var buffer = makeBuffer ();
// buffer.add("Тест");
// buffer.add("тебе не з'їсть");
// alert(buffer.print()); // Тест тебе не з'їсть
// buffer.clear ();
// alert (buffer.print()); // ""



//task1 (тут я трошкі невмів читати і зробив все по своєму настпуне буде правильни спосіб)

function makeBufferNotRight(b) {
    var arr = [];
        return function pusher(b) {
            if (b != null) {
                arr.push(b);
                console.log(arr);
            } else {
                console.log(arr);
            }
    }
}
var buffer1 = makeBufferNotRight();
buffer1('5');
buffer1('6');
buffer1();

//task1 (Правильний спосіб напевно)
function Buffer () {
    let a = [];
        this.add = function (word){
            if (word) {
                a.push(word);
                return console.log(a.toString());
            } else {
                return console.log(a.toString());
            }
        }
        this.print = function (){
                return console.log(a.toString());
        }
        this.clear = function (){
            a.splice(0,300);
            return console.log("Буфер очищено успішно!")
        }
}
function makeBuffer(){
    return new Buffer();
}

var buffer = makeBuffer();
// додати значення до буферу
buffer.add('');
buffer.add( 'Вчити');
buffer.add( 'Потрібно!');
buffer.add('');
//
buffer.print();
buffer.clear();
buffer.print();
// JavaScript Вчити Потрібно

