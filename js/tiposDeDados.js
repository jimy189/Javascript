var inteiro   = 10; //valor inteiro
var flutuante = 15.50; //valor flutuante
var texto     = 'Anildo'; 
var boleano   = true;

var objeto    = {nome: 'Anildo', idade: 34, sexo: 'M'};
var vetor     = [1,2,3,4,5,6];                 

document.writeln('Valor inteiro: '+inteiro);   
document.writeln('<br/>');             
document.writeln('Valor flutuante: '+flutuante);
document.writeln('<br/>');             
document.writeln('Valor texto: '+texto);
document.writeln('<br/>');             
document.writeln('Valor Boleano: '+boleano);
document.writeln('<br/>');             
document.writeln('Nome: '+objeto.nome+' '+objeto.idade+' '+objeto.sexo);
document.writeln('<br/>');             
document.writeln('Vetor: '+vetor[0]);
                        6
for(var i = 0; i < vetor.length; i++){
    document.writeln('Vetor ['+i+'] '+vetor[i]);    
    document.writeln('<br/>');             
}

