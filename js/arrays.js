var arr = ["Anildo", "Nascimento", "Mattos", {pessoa: "29 anos"}];

var tamanho = arr.length;

document.writeln("Tamanho: "+tamanho);

for(var i = 0; i < arr.length; i++){
    document.writeln(arr[i]);
    document.writeln('<br/>');    
}
document.writeln(arr[3].pessoa);
