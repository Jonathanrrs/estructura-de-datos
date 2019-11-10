export default class Proceso {
    constructor(ciclos) {
        this._ciclos = ciclos;
        this._siguiente = null;
    }

    get ciclos() {
        return this._ciclos;
    }

    get siguiente() {
        return this._siguiente;
    }

    set ciclos(valor) {
        this._ciclos = valor;
    }

    set siguiente(valor) {
        this._siguiente = valor;
    }
}