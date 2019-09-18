import Jugador from "./Jugador.js";

class Main{
    constructor() {
        let jugador1 = new Jugador();
        let jugador2 = new Jugador();
        let i = 0;
        while(jugador1.posicion <100 && jugador2.posicion <100) {
            jugador1.avanzar(jugador1.dado(jugador1.serpiente(), jugador1.escalera()));
            jugador2.avanzar(jugador2.dado(jugador2.serpiente(),jugador2.serpiente(),));
            i++;
            console.log(i, "jugador 1:", jugador1.posicion, "jugador 2:",jugador2.posicion);
        }
        if(jugador1.posicion >100 && jugador2.posicion >100) {
            console.log("Empate");
        }
        else if(jugador1.posicion > jugador2.posicion) {
            console.log("Ganador jugador 1");
        }
        else if(jugador1.posicion < jugador2.posicion) {
            console.log("Ganador jugador 2");
            
        }
    }
}
let m = new Main();