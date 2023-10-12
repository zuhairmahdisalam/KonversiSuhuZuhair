const convert = () =>{
    var Celcius = parseFloat(document.querySelector("#Celcius").value);

    var farenheitResult = (1.8 * Celcius)+32;
    var a = farenheitResult.toFixed(2);

    document.querySelector("#Celcius").value = Celcius;
    document.querySelector("#farenheit").value = a;
}
const reset = () =>{
    document.querySelector("#Celcius").value = " ";
    document.querySelector("Farenheit").value = " ";
}