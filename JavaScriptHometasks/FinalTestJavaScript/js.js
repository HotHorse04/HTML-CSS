
function plus() {
    let result;
    result = num1() + num2();
    return resultWhriter(result);
}
function min() {
    let result;
    result = num1() - num2();
    return resultWhriter(result);
}
function mnoz() {
    let result;
    result = num1() * num2();
    return resultWhriter(result);
}
function dill() {
    let result;
    if (num2()==0) {
        result = 'Невірно введені данні'
    } else {
    result = num1() / num2();
    }
    return resultWhriter(result);
}

function num1() {
    let num1 = Number(document.getElementById("firstNumber").value);
    return num1;
}
function num2() {
    let num2 = Number(document.getElementById("secondNumber").value);
    return num2;
}
function resultWhriter(result){
    document.getElementById("result").innerHTML = result;
}
