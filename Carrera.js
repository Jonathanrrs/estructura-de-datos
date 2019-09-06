export default class Carrera{
    
    ganador(tortuga, liebre) {
        if(tortuga>liebre) {
            return "Ganó la tortuga, felicidades";
        }
        else if(tortuga<liebre){
            return "Ganó la liebre, felicidades"
        }
    }

    empate(tortuga, liebre) {
        if(tortuga==liebre) {
            return true;
        }
        else{
            return false;
        }
    }

    finaCarrera(tortuga, liebre) {
        if(tortuga >=90 || liebre >= 90) {
            return true;
        }
        else{
            return false;
        }
    }
}
