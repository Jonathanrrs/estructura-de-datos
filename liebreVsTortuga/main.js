import Liebre from "./Corredor.js";
import Carrera from "./Carrera.js";
class Main{
    constructor() {
        let liebre = new Liebre();
        let carrera = new Carrera();
        let i = 1;
        while(liebre.posicionTor < 90 && liebre.posicionLie < 90) {
            liebre.correrTortuga(liebre.dado());
            liebre.correrLiebre(liebre.dado());
            i++;
            console.log(i,liebre.posicionTor, liebre.posicionLie);
            if(carrera.finaCarrera(liebre.posicionTor, liebre.posicionLie) == true) {
                console.log(carrera.ganador(liebre.posicionTor, liebre.posicionLie));
                if(carrera.empate(liebre.posicionTor, liebre.posicionLie)==true) {
                    console.log("El resultado es empate");
                }
            }
        }
    }
}
let m = new Main();