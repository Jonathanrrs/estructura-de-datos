export default class Info {
    constructor(info) {
        this._info = info;
        this._izquierda = null;
        this._derecha = null;
    }

    get info() {
        return this._info;
    }

    get izquierda() {
        return this._izquierda;
    }

    get derecha() {
        return this._derecha;
    }

    set izquierda(info) {
        this._izquierda = info;
    }

    set derecha(info) {
        this._derecha = info;
    }

    toString() {
        return this._info + ",";
    }
}