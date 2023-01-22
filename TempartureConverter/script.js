const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fehrenheit");

function celToFar(){
    let output = (parseFloat(celsius.value) * 9/5) + 32;
    console.log(output);
    fahrenheit.value = parseFloat(output.toFixed(2));
    console.log(output);
}
function farToCel(){
    let output = (parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}