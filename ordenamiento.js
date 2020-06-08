//capturar numeros por prompt

console.log("Ordenamiento de mayor a menor");

console.log("Ingrese los numeros que desee separados por comas");

var numeros = prompt();
var n = [];
var cadena = "";
for (let index = 0; index < numeros.length; index++) {
    n = numeros.split(",");
    
}
console.log("Orden original: " + n);
// ordenamiento:
cambios = true;
ciclo = true;
while(cambios){
    var temp = n[0];
    cambios = false;
    for (let i = 0; i < n.length-1; i++) {
        //console.log("El mayor es: " + temp);
        if(temp > n[i+1]){
            //console.log(n[i+1] + " es menor que " + temp);
            //entonces va antes que temp
            cambios = true;
            n[i] = n[i+1];
            n[i+1] = temp;
            //console.log(n);
        }
        //sino
        else{
            temp = n[i+1];
        }

    }
} 


console.log( "Numero ordenados: ");
for (let index = 0; index < n.length; index++) {
    //console.log(n[index]);

    if(index != n.length-1){
        cadena= cadena + n[index] + ","; 
    }
    else{
        cadena = cadena + n[index];
    }
}
console.log(cadena);


