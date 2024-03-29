//Реалізувати у функціональному та прототипному стилі наступне задання:
// Створити клас Robot від якого унаслідувати класами CoffeRobot, RobotDancer, RobotCoocker його властивості. В
// Robot створити метод work() , в якому слід описати роботу яку буде виконувати кожен з роботів. (тобто, work()
// повинен бути пронаслідуваний)
// • Для Robot метод work() повинен виводити текст «Я Robot – я просто працюю».
// • Для CoffeRobot метод work() повинен виводити текст «Я CoffeRobot – я варю каву».
// • Для RobotDancer метод work() повинен виводити текст «Я RobotDancer – я просто танцюю».
// • Для RobotCoocker метод work() повинен виводити текст «Я RobotCoocker – я просто готую».
// • Створити екземпляри вищеописаних класів і викликати до кожного з них метод work().
// • Створити масив типу Robot, заповнити масив екземплярами вищеописаних класів.
// Циклом for пройтись по всіх елементах масиву і викликати в кожного метод work().
// Всі виводи проводити на консоль

function Robot () {
    this.work = function () {
        console.log("Я робот я процто працюю");
    }
}
function CoffeeRobot() {
    Robot.call(this);
    this.work = function (){
        console.log("Я CoffeRobot – я варю каву");
    }
}
function RobotDancer() {
    Robot.call(this);
    this.work= function () {
        console.log("Я RobotDancer – я просто танцюю");
    }
}
function RobotCoocker() {
    Robot.call(this);
    this.work= function () {
        console.log("Я RobotCoocker – я просто готую");
    }
}
 let robot = new Robot();
let coffeerobot = new CoffeeRobot();
let robotdancer = new RobotDancer();
let robotcooker = new RobotCoocker();
robot.work();
coffeerobot.work();
robotdancer.work();
robotcooker.work();

let robotArr = [robot, coffeerobot, robotdancer, robotcooker];
for (let i =0; i<robotArr.length; i++) {
    robotArr[i].work();
}
