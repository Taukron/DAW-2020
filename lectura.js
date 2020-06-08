function iniciar(){
   
    //alert("Iniciado");
    var lectura = document.getElementById("texto").value;
    //console.log(lecutra);
    var time = document.getElementById("time").value;
    console.log("Tiempo designado: " + time);
    palabras = lectura.split(" ");
    console.log("Palabras separadas: " + palabras);
    var n = 0;

    setInterval(() => {
        if(n < palabras.length){
            if(palabras[n].length > 1){
                mitad = Math.round(palabras[n].length/2);
                if(palabras[n].length > 3){ 
                    p1 = palabras[n].substring(0,mitad);
                    p2 = palabras[n].substring(mitad, mitad+1);         
                    p3 = palabras[n].substring(mitad+1, palabras[n].length);
                }else{
                    p1 = palabras[n].substring(0,1);
                    p2 = palabras[n].substring(1,2);
                    p3 = palabras[n].substring(2,palabras[n].length);
                }
                //console.log("-" + p1 + " -" +p2 + " -"+ p3)
                console.clear();
                console.log('%s%c%s%c'+p3, p1,'color:green',p2, 'color: none');
                
            }
            else{
                console.clear();
                console.log('%c'+ palabras[n], 'color:green');
               
            }
            n++;
        }
    }, time);
}
