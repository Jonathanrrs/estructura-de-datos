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
        else {
            if (raiz.derecha == null) {
                raiz.derecha = producto;
            }
            else {
                this._agregar(producto, raiz.derecha);
            }
        }
    }

    inOrder() {
        this._inventarioString = "";
        this._inOrder(this._raiz);
        return this._inventarioString;
    }

    _inOrder(raiz) {
        if(raiz ==null) {
            return;
        }
        else{
            this._inOrder(raiz.izquierda);
            this.inventarioString += raiz.toString();
            this._inOrder(raiz.derecha);
        }
    }

    preOrder() {
        this._inventarioString = "";
        this._preOrder(this._raiz);
        return this._inventarioString ;

    }

    _preOrder(raiz) {
        if(raiz == null) {
            return;
        }
        else{
            this._inventarioString += raiz.toString();
            this._preOrder(raiz.izquierda);
            this._preOrder(raiz.derecha);
        }
    }

    
    postOrder() {
        this._inventarioString = "";
        this._postOrder(this._raiz);
        return this._inventarioString ;

    }

    _postOrder(raiz) {
        if(raiz == null) {
            return;
        }
        else{
            this._preOrder(raiz.izquierda);
            this._preOrder(raiz.derecha);
            this._inventarioString += raiz.toString(); 
        }
    }
    
}