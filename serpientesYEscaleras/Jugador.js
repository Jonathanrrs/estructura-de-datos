export default class Jugador{
    constructor(posicion=0) {
        this._posicion = posicion;
    }
    get posicion() {
        return this._posicion;
    }

    dado() {
        return Math.floor(Math.random() * 6 + 1);
    }

    escalera() {
        if(this._posicion==7) {
            return this._posicion = 15;
        }
        if(this._posicion==28) {
            return this._posicion = 32;
        }
        if(this._posicion==24) {
            return this._posicion = 43;
        }
        if(this._posicion==39) {
            return this._posicion = 56;
        }
        if(this._posicion==45) {
            return this._posicion = 62;
        }
        if(this._posicion==58) {
            return this._posicion = 77;
        }
        if(this._posicion==64) {
            return this._posicion = 81;
        }
        if(this._posicion==79) {
            return this._posicion = 96;
        }
    }

    serpiente() {
        if(this._posicion==20) {
            return this._posicion = 4;
        }
        if(this._posicion==26) {
            return this._posicion = 18;
        }
        if(this._posicion==44) {
            return this._posicion = 36;
        }
        if(this._posicion==60) {
            return this._posicion = 40;
        }
        if(this._posicion==66) {
            return this._posicion = 30;
        }
        if(this._posicion==69) {
            return this._posicion = 61;
        }
        if(this._posicion==75) {
            return this._posicion = 57;
        }
        if(this._posicion==98) {
            return this._posicion = 86;
        }
    }
    avanzar(dado) {
        this._posicion+=dado;
    }
}





