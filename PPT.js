var Udf = prompt("¿Piedra, papel o tijera?");
var Ud = Udf.toUpperCase()

var aleatorio = function() {
    var numero =  Math.floor((Math.random()*3)+1);
    var respuesta;
    if (numero == 1) {
        respuesta = "PIEDRA";
    } else if (numero == 2) {
        respuesta = "PAPEL";
    } else {
        respuesta = "TIJERA";
    }
    return respuesta;
};
console.log(Udf + " : " + Ud)

var Od = aleatorio();

var logicaJuego = function(Ud, Od) {
    if (Ud == Od) {
        return console.log("Empate, los dos eligieron " +Ud);
    } else {
        if (Ud == "PIEDRA" && Od == "PAPEL") {
            console.log(""+Ud +" vs " +Od + ", gana el ordenador.");
        }
        if (Ud == "PIEDRA" && Od == "TIJERA") {
            console.log(""+Ud +" vs " +Od + ", gana el usuario");
        }
        if (Ud == "PAPEL" && Od == "TIJERA") {
            console.log(""+Ud +" vs " +Od + ", gana el ordenador.");
         }
        if (Ud == "PAPEL" && Od == "PIEDRA"){
            console.log(""+Ud +" vs " +Od + ", gana el usuario");
        }
       if (Ud == "TIJERA" && Od == "PIEDRA") {
          console.log(""+Ud +" vs " +Od + ", gana el ordenador.");
          }
       if (Ud == "TIJERA" && Od == "Papel") {
          console.log(""+Ud +" vs " +Od + ", gana el usuario");
      }
    }
};

console.log ("Usuario: " +Ud + ", Ordenador: " +Od);

logicaJuego(Ud, Od);
