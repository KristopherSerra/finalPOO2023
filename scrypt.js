//Var Posicion Actual.
let posActual = 0;
//Var Cantidad Acertadas.
let cantidadAcertadas = 0;
function pantallaInicial() {
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
}

function VolverAlIndex() {
    window.location.href = "index.html";
}
//Inicia el Juego.
function comenzarJuego() {
    //Reset de Variables.
    posActual = 0;
    cantidadAcertadas = 0;
    //Cambio de Pantalla de Inicio a Juego
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";

    cargarPregunta();
}

//Funcion Preguntas
function cargarPregunta() {
    //¿Se terminaron las preguntas?
    if (preguntas.length <= posActual) {
        terminarJuego();
    }
    else {
        //Carga las Opciones.
        //Limpiamos las clases que se asignaron
        limpiarOpciones();
        document.getElementById("imgPregunta").src = "img/" + imgPreguntas[posActual];
        document.getElementById("Preguntas").innerHTML = preguntas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0]; //A
        document.getElementById("n1").innerHTML = opciones[posActual][1]; //B
        document.getElementById("n2").innerHTML = opciones[posActual][2]; //C
        document.getElementById("n3").innerHTML = opciones[posActual][3]; //D
    }
}

function limpiarOpciones() {
    document.getElementById("n0").className = "respuesta"; //Respuesta A
    document.getElementById("n1").className = "respuesta"; //Respuesta B
    document.getElementById("n2").className = "respuesta"; //Respuesta C
    document.getElementById("n3").className = "respuesta"; //Respuesta D

    document.getElementById("l0").className = "letra"; //Letra A
    document.getElementById("l1").className = "letra"; //Letra B
    document.getElementById("l2").className = "letra"; //Letra C
    document.getElementById("l3").className = "letra"; //Letra D
}

//Verificación
function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[posActual]) {
        // Si Acertó, pinta de Verde la opcion y blanco la letra
        document.getElementById("n" + opElegida).className = "respuesta respuestaAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else {
        //Si No Acerto, pinta de Rojo la opcion marcada y Verde la correcta
        document.getElementById("n" + opElegida).className = "respuesta respuestaNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        //Opcion Correcta
        document.getElementById("n" + correcta[posActual]).className = "respuesta respuestaAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar la siguiente imagen y sus opciones
    setTimeout(cargarPregunta, 1000);
}


function terminarJuego() {
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = (cantidadAcertadas * 100) / 10;

    var final = (cantidadAcertadas * 100) / 10;
    if (final <= 0) {
        document.getElementById("imgFinal").src = "img/0.gif";
    } else {
        if (final >= 10 && final <= 30) {
            document.getElementById("imgFinal").src = "img/1.gif";
        }
        else {
            if (final >= 40 && final <= 90) {
                document.getElementById("imgFinal").src = "img/2.gif";
            } else {
                document.getElementById("imgFinal").src = "img/3.gif";
            }
        }
    }
}

function volverAlInicio() {
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}

function redirectFacil() {
    window.location.href = "Facil.html";
    //Arreglo de Imagenes.
}
function redirectMedio() {
    window.location.href = "Medio.html";
    //Arreglo de Imagenes.
}
function redirectDificil() {
    window.location.href = "Dificil.html";
    //Arreglo de Imagenes.
}