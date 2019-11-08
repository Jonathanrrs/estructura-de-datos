import Azar from "./Azar.js";
import Proceso from "./Proceso.js";

class main {
    constructor() {
        this._inicio;
        this._suma = [];
        this._numAtendidos = 0;
        this._ciclosVacios = 0;
        this.iniciarCiclos();
    }

    iniciarCiclos() {
        for (let i = 1; i <= 300; i++) {
            if(this._inicio) {
                this._inicio.ciclos--;
                if(this._inicio.ciclos == 0) {
                    let actual = this._inicio;
                    this._inicio = actual.siguiente;
                    this._numAtendidos++;
                }
            }
            else{
                this._ciclosVacios++;
            }
            let prob = new Azar();
            let a = prob.probabilidad();
            if(a >= 0 && a <=39) {
                let azar = new Azar();
                let nuevoProceso = new Proceso(azar.azar());
                if(!this._inicio) {
                    this._inicio = nuevoProceso;
                }
                else{
                    let actual = this._inicio;
                    while(actual.siguiente) {
                        actual = actual.siguiente;
                    }
                    actual.siguiente = nuevoProceso;
                }
            }
            let actual = this._inicio;
            let s = 0;
            while(actual) {
                this._suma[s] = parseInt(actual.ciclos);
                actual = actual.siguiente;
                s++;
            }
            console.log("Procesos activos en ciclo número: " + i);
            console.log(this._suma);   
        }
        console.log("Cantidad de procesos pendientes: " + this._suma.length);
        console.log("Ciclos pendientes: " + this.sumaVectores());
        console.log("Procesos antendidos: " + this._numAtendidos);
        console.log("Ciclos vacios: " + (this._ciclosVacios - 1));
    }

    sumaVectores() {
        let sum = 0;
        for (let i = 0; i < this._suma.length; i++) {
            sum += this._suma[i];
        }

        return sum;
    }
}

let m = new main();