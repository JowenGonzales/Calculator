equation = "";
calculator_display = "";
var calculator__display = document.getElementById("calculator__display");
operations = ["+", "-", "/", "*" , "%"];


function addToCalculation(val) {


   
    

    if (val === "clear") {
        clearAll();
        return;
    } else {
        equation += val;
        calculator_display = equation;
        calculator__display.innerHTML = calculator_display;
        
        
    }
    
}
function clearAll() {
    equation = "";
    calculator_display = "0";
    calculator__display.innerHTML = calculator_display;
}
function solve() {
    try {

        calculator__display.innerHTML = eval(equation);
        equation = "";

    } catch (err) {
        calculator__display.innerHTML = "Err";
    }
}