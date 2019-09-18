export default class Carrera{
    
    ganador(jugador1, jugador2) {
        if(jugador1>jugador2) {
            return "Ganó jugador1, felicidades";
        }
        else if(tortuga<liebre){
            return "Ganó jugador2, felicidades"
        }
    }

    empate(jugador1, jugador2) {
        if(jugador1==jugador2) {
            return true;
        }
        else{
            return false;
        }
    }

    finaCarrera(jugador1, jugador2) {
        if(jugador1 >=100 || jugador2 >= 100) {
            return true;
        }
        else{
            return false;
        }
    }
}