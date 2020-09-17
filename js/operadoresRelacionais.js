/*
== igual
!= diferente
=== igual, e do mesmo tipo
!== diferente, ,mais do mesmo tipo
> maior
< menor
>= maior igual
<= menor igual
*/
var x = 10;
var y = "10";

if(x == y){
    document.writeln('valores iguais (x == y)');
}
document.writeln('<br/>');
if(x === y){
    document.writeln('x igual e do mesmo tipo (x === y)');
}
document.writeln('<br/>');
if(x != y){
    document.writeln('o valor de x é != de y');
}
document.writeln('<br/>');
if(x !== y){
    document.writeln('o valor x é diferente de y, e os tipos são diferentes');
}
document.writeln('<br/>');
if(x >= y){
    document.writeln('x é >= y');
}
document.writeln('<br/>');
if(x <= y){
    document.writeln('x é <= y');
}

var idade = 20;
document.writeln('<br/>');
if(idade >= 0 && idade <= 10){
    document.writeln('Infantil');
}else if(idade >= 11 && idade <= 17){
    document.writeln('Jovem');
}else if(idade >= 18){
    document.writeln('Adulto');
}else{
    document.writeln('Idade fora do intervalo');
}
/*
    && AND e
    || OR  
    !  NOT 
*/
//Tabela VERDADE
/*Condiçao 1  &&  Condição 2
   V        &&     V     =    V (só sera verdadeora se ambas forem verdadeiras)
   V        &&     F     =    F
   F        &&     V     =    F
   F        &&     F     =    F
*/
/*
Condicao 1 ||  Condicao 2
    V      ||      V    =   V
    V      ||      F    =   V
    F      ||      V    =   V
    F      ||      F    =   F (só sera falso se ambos forem falsos)
*/

/*
    condicao 1
        ! (V)  =  F
        ! (F)  =  V 
*/


var dia = 10;
var resp = '';
switch(dia){
    case 1:
        resp = 'Domingo';
        break;
    case 2:
        resp = 'Segunda';
        break;
    case 3:
        resp = 'Terça';
        break;
    case 4:
        resp = 'Quarta';
        break;
    default:        
        resp = 'Dia fora do intervalo';   
        break;    
}
document.writeln('<br/>');
document.writeln('Dia da Semana: ',resp);