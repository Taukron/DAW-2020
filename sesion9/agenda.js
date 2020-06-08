/*var contacto = new Object();
*
*contacto.nombre = "fer";
*contacto.numero = "442772";
*contacto.dir = "jofrito";
*
*console.log(contacto);
*
*/
//comentario

//agenda de contactos:
var nombre, numero, correo, direccion;
var nombres = [];
var numeros = [];
var correos = [];
var direcciones = [];
var nC = 0;

menu();

function nuevoContacto(){
    console.log("Registrar nuevo contacto: ");
    nombre = prompt("nombre");
    numero = prompt("numero")
    correo = prompt("correo");
    direccion = prompt("direccion");
    nC++;
    nombres.push(nombre);
    numeros.push(numero);
    correos.push(correo);
    direcciones.push(direccion);
}

function verContactos(){
    console.log("Todos los contactos:");
    if(!(nC > 0)){
        console.log("No hay contactos para mostrar");
    }
    for (let index = 0; index < nC; index++) {
        console.log("Nombre: " + nombres[index] +
        "\nNumero:" + numeros[index] +
        "\nCorreo:" + correos[index] +
        "\nDirecion:" + direcciones[index]+        
        "\n\n---------------------------------"
        );
    }
}
function verContacto(nombre){
    console.log("Ver contacto");
    for (let index = 0; index < nC; index++) {
        if(nombres[index] == nombre){
            console.log("Nombre: " + nombres[index] +
            "\nNumero:" + numeros[index] +
            "\nCorreo:" + correos[index] +
            "\nDirecion:" + direcciones[index]+        
            "\n\n---------------------------------"
            );
        }
        
    }
}

function menu(){
    var ciclo = true;
     do{
        console.log("Elija una opcion")
        console.log("1.- Registrar nuevo contacto");
        console.log("2.- Ver todos los contactos");
        console.log("3.- buscar contacto");
        console.log("4.- Salir");
        var opcion = prompt("Opcion");
        
        switch(opcion){
            case "1":
                nuevoContacto(); 
                break;
            case "2":
                console.log("ver contactos");
                verContactos();
                break;
            case "3":
                n = prompt("Nombre del contacto a buscar");
                verContacto(n);
                break;
            default:
                ciclo = false;
                break;
    
        }
     }while(ciclo);
       
}
