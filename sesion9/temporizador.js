var ciclo = true;
var n = 0;
var parar = false;
console.log("selecione una opcion");
console.log("1.- temporizador");
console.log("2.- cronometro");

function temporizador(){    
    let n = 0;
    console.log("indique el tiempo en segundos: ");
    var t = prompt("indique el tiempo en segundos: ");
    n = t
    var rep = setInterval(() => {
        n--;
        if (n>0) {
            
            console.clear();
            if (n > 10 ) {
                console.log("Tiempo: " + '%c%s' + "segundos", "color: green",n);
            }
            else if (n > 5){
                console.log("Tiempo: " + '%c%s' + "segundos", "color: yellow",n);
            }
            else{
                console.log("Tiempo: " + '%c%s' + "segundos", "color: red",n);
            }
            //console.log("Tiempo: " + n + "segundos");
            //console.log(parar);
            if(parar){
                n = 0;
                console.clear();
                clearInterval(rep);
                console.log("%cfin de la cuenta", "color: red");
            }
        }
        else{
            clearInterval(rep);
            console.clear();
            console.log("%cfin de la cuenta", "color: red");
        }
    }, 1000);   
}
function btnStop(){
    parar = true;
    
}
function cronometro(){
    
    alert("El tiempo correra si acepta");
    var rep = setInterval(() => {
        n++;
        console.clear();
        console.log("Tiempo transcurrido: " + n + " segundos");
        //console.log(parar);
        if(parar){
            n = 0;
            console.clear();
            clearTimeout(rep);
            console.log("%cfin de la cuenta", "color: red");
        }
    }, 1000);   
}
