export default class Base{
    constructor(base) {
        this._id = base.id;
        this._nombre = base.nombre;
        this._minutos = base.minutos;
        this._siguiente = null;
        this._anterior = null;
    }

    get id() {
        return this._id;
    }

    get nombre() {
        return this._nombre;
    }

    get minutos() {
        return this._minutos;
    }
    get siguiente() {
        return this._siguiente;
    }
    get anterior() {
        return this._anterior;
    }

    set siguiente(valor) {
        this._siguiente = valor;
    }

    set anterior(valor) {
        this._anterior = valor;
    }

    toString() {
        return `Código: ${this._id}, Minutos de la última base: ${this._minutos}`;
    }
}