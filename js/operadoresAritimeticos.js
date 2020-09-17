/*
    comenta multiplas linhas
    + soma
    - subtração
    * multiplicação
    / divisão
*/

var soma  = 5 + 10;
var sub   = 10 - 3;
var mult  = 15 * 15;
var div   = 10 / 2;
var vetor = [1,2,3,4,5,6]; 

document.writeln('Soma: '+soma);


//Operadores abreviados
var x = 10;
x++; //incremento, adiciono mais 1 a minha variavel

document.writeln('Incremento: '+x);

x--; // drecremento, tira 1 da variavel
document.writeln('Decremento: '+x);

x = x + 10;

document.writeln('Novo x: '+x);

x += 10;

/*
    -= subtrai
    *= multiplicar
    /= dividir
    += somar
*/
var somatorio = 0;
for(var i = 0; i < vetor.length; i++){
    somatorio += vetor[i];
}
document.writeln('<br/>');
document.writeln('Soma do vetor: '+somatorio);

var cont = 0;
for(var i = 0; i < vetor.length; i++){
    cont = cont + 1;
}
document.writeln('<br/>');
document.writeln('Total do vetor: '+cont);
