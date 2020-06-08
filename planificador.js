

var lunes = [];
var martes = [];
var miercoles = [];
var jueves = [];
var viernes = [];
var sabado = [];
var domingo = [];

var ciclo = true;

do {
    console.log("1.- agrega tarea al día");
    console.log("2.- ver tareas de la semana");
    console.log("3.- ver tareas del día");
    console.log("4.- Salir");
    let op = prompt("Ingrese opcion: ");
    
    switch (op) {
        case "1":
            agregarDia();
            break;
        case "2":
            verSemana();
            break;
        case "3":
            console.log("Indique on un numero el día de la semana que desea ver; el lunes es el 1 y el domingo el 7");
            let diaVer = prompt("dia: ");
            if (diaVer < 8) {
                verDia(diaVer);
            } else {
                console.log("Dia invalido");
            }
            break;
        default:
            ciclo = false;
            break;
    }
} while (ciclo);
function verDia(dia) {
    
    switch (dia) {
        case "1":
            console.table(lunes);
            break;
        case "2":
            console.table(martes);
            break;
        case "3":
            console.table(miercoles);
            break;
        case "4":
            console.table(jueves);
            break;
        case "5":
            console.table(viernes);
            break;
        case "6":
            console.table(sabado);
            break;
        case "7":
            console.table(domingo);
            break;
        default:
            console.log("busqueda no coincide");
            break;
    }
}
function verSemana(params) {
    console.log("Lunes");
    console.table(lunes);
    console.log("martes");
    console.table(martes);
    console.log("miercoles");
    console.table(miercoles);
    console.log("jueves");
    console.table(jueves);
    console.log("viernes");
    console.table(viernes);
    console.log("sabado");
    console.table(sabado);
    console.log("domingo");
    console.table(domingo);

}
function agregarDia() {
    var tarea;
    var prioridad;
    console.log("seleccione un día de la semana expresado en numero, iniciando en lunes = 1");
            let dia = prompt("dia: "); 
            switch (dia) {
                case "1":
                    if(lunes.length < 5){
                        console.log("Ingrese tarea para el día lunes");
                        tarea = prompt("tarea: ");
                        console.log("Ingrese prioridad");
                        prioridad = prompt("prioridad con numero entre el 1 y el 5: ");
                        if(prioridad < 6 && prioridad > 0){
                            lunes.push([tarea, "prioridad: " +parseInt(prioridad)]);
                        }
                    }
                   
                    break;
                case "2":
                    if(martes.length < 5){
                        console.log("Ingrese tarea para el día martes");
                        tarea = prompt("tarea: ");
                        console.log("Ingrese prioridad");
                        prioridad = prompt("prioridad con numero entre el 1 y el 5: ");
                        if(prioridad < 6 && prioridad > 0){
                            martes.push([tarea, "prioridad: " +parseInt(prioridad)]);
                        }
                    }
                   
                    break;
                case "3":
                    if(miercoles.length < 5){
                        console.log("Ingrese tarea para el día miercoles");
                        tarea = prompt("tarea: ");
                        console.log("Ingrese prioridad");
                        prioridad = prompt("prioridad con numero entre el 1 y el 5: ");
                        if(prioridad < 6 && prioridad > 0){
                            miercoles.push([tarea, "prioridad: " +parseInt(prioridad)]);
                        }
                    }
                   
                    break;
                case "4":
                    if(jueves.length < 5){
                        console.log("Ingrese tarea para el día jueves");
                        tarea = prompt("tarea: ");
                        console.log("Ingrese prioridad");
                        prioridad = prompt("prioridad con numero entre el 1 y el 5: ");
                        if(prioridad < 6 && prioridad > 0){
                            jueves.push([tarea, "prioridad: " +parseInt(prioridad)]);
                        }
                    }
                   
                    break;
                case "5":
                    if(viernes.length < 5){
                        console.log("Ingrese tarea para el día viernes");
                        tarea = prompt("tarea: ");
                        console.log("Ingrese prioridad");
                        prioridad = prompt("prioridad con numero entre el 1 y el 5: ");
                        if(prioridad < 6 && prioridad > 0){
                            viernes.push([tarea, "prioridad: " +parseInt(prioridad)]);
                        }
                        
                    }
                   
                     break;
                case "6":
                    if(sabado.length < 5){
                        console.log("Ingrese tarea para el día sabado");
                        tarea = prompt("tarea: ");
                        console.log("Ingrese prioridad");
                        prioridad = prompt("prioridad con numero entre el 1 y el 5: ");
                        if(prioridad < 6 && prioridad > 0){
                            sabado.push([tarea, "prioridad: " +parseInt(prioridad)]);
                        }
                    }
                   
                    break;
                case "7":
                    if(domingo.length < 5){
                        console.log("Ingrese tarea para el día domingo");
                        tarea = prompt("tarea: ");
                        console.log("Ingrese prioridad");
                        prioridad = prompt("prioridad con numero entre el 1 y el 5: ");
                        if(prioridad < 6 && prioridad > 0){
                            domingo.push([tarea, "Prioridad: " +parseInt(prioridad)]);
                        }
                    }
                   
                    break;
                
                default:
                    break;
            }
}