export default class Inventario {
    constructor() {
        this._raiz = null;
        this._inventarioString = "";
    }
    get inventarioString() {
        return this._inventarioString;
    }

    agregar(producto) {
        if (this._raiz == null) {
            this._raiz = producto;
        }
        else {
           this._agregar(producto, this._raiz);
        }


    }

    _agregar(producto, raiz) {
        if (producto.id < raiz.id) {
            if (raiz.izquierda == null) {
                raiz.izquierda = producto;
            }
            else {
                this._agregar(producto, raiz.izquierda);
            }
        }
        else{
            if(raiz.derecha == null) {
                raiz.derecha = producto;
            }
            else{
                this._agregar(producto, raiz.derecha);
            }
        }
    }
}