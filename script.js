document.getElementById("btnCalcular").addEventListener("click", calcularBMI);

function calcularBMI() {
    let peso = document.getElementById("campoPeso").value;
    let altura = document.getElementById("campoAltura").value;
    console.log(peso);
    console.log(altura);

    let imc = Number(peso)/Math.pow(Number(altura), 2);
    console.log(imc);

    let resultado = "";
    if (imc < 18.5) {
        resultado = "Bajo de peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = "Sobrepeso";
    } else if (imc >= 30) {
        resultado = "Obeso";
    }


    document.getElementById("resultado").innerHTML =  resultado;
    /*document.getElementById("resultado").classList.add(clase);*/
}

