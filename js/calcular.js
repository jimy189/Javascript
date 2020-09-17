/*
document.querySelector('.form').addEventListener('submit', function(event){
    var valor1 = parseFloat( document.querySelector("#txtValor1").value ); //parseFloat converte um texto para Float 15.50
    var valor2 = parseFloat( document.querySelector("#txtValor2").value );  
    var op     = document.querySelector("#txtOp").value;
    
    //cancelar a submit do formulario
    event.preventDefault();

    var calculo = 0;

    if(op == 1){
        //somar
        calculo = valor1 + valor2;
    }else if(op == 2){
        //subtrair
        calculo = valor1 - valor2;
    }else if(op == 3){
        //multiplicar
        calculo = valor1 * valor2;
    }else{
        //dividr
        calculo = valor1 / valor2;
    }
    alert('Calculo: '+calculo);
})
*/
document.getElementById("btnExecutar").addEventListener('click', function(event) {
    var valor1 = parseFloat(document.querySelector("#txtValor1").value);
    var valor2 = parseFloat(document.querySelector("#txtValor2").value);
    var op = parseInt(document.querySelector("#txtOp").value);
    var calculo = 0;

    preventDefault();
    switch (op) {
        case 1:
            calculo = valor1 + valor2;
            break;
        case 2:
            calculo = valor1 - valor2;
            break;
        case 3:
            calculo = valor1 * valor2;
            break;
        case 4:
            calculo = valor1 / valor2;
            break;
    }

    alert("Funcionnar");
    document.querySelector("#result").textContent = calculo;
    //document.writeln('Calculo: '+calculo);    

    // Tempo();
})

function Tempo() {
    setTimeout(function() {
        location.href = "../calc2.html";
    }, 3000);
}