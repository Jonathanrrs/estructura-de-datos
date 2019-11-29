import Info from "./Info.js";
export default class Arbol{
    constructor() {
        this._raiz = null;
        this._nodos = null;
        this._vNodos = [];
        this._string = "";
    }

    separar(expresion) {
        expresion = expresion.split("");
        for(let i = 0; i < expresion.length; i++) {
            if(expresion[i] == "*" || expresion[i] == "/" || expresion[i] == "+" || expresion[i] == "-") {
                let info = new Info(expresion[i]);
                this._vNodos[i] = info;
            }
            else{
                let info = new Info(parseInt(expresion[i]));
                this._vNodos[i] = info;
            }
        }
    }

    arbolBinario() {
        for(let i = 0; i < this._vNodos.length; i++) {
            if(this._vNodos[i].info == "*" || this._vNodos[i].info == "/") {
                this._raiz = this._vNodos[i];
                this._raiz.izquierda = this._vNodos[i-1];
                this._raiz.derecha = this._vNodos[i+1];
                this._vNodos.splice(i-1, 1);
                this._vNodos.splice(i, 1);
                i--;
            }
        }

        for(let i= 0; i < this._vNodos.length; i++) {
            if(this._vNodos[i].info == "+" || this._vNodos[i].info == "-") {
                this._raiz = this._vNodos[i];
                this._raiz.izquierda = this._vNodos[i-1];
                this._raiz.derecha = this._vNodos[i+1];
                this._vNodos.splice(i-1, 1);
                this._vNodos.splice(i, 1);
                i--;
            }
        }
        this._raiz = this._vNodos[0];
        console.log(this._raiz);
    }

    preOrder() {
        this._string = "";
        this._preOrder(this._raiz);
        return this._string;

    }

    _preOrder(raiz) {
        if(raiz == null) {
            return;
        }
        else{
            this._string += raiz.toString();
            this._preOrder(raiz.izquierda);
            this._preOrder(raiz.derecha);
        }
    }

    postOrder() {
        this._string = "";
        this._postOrder(this._raiz);
        return this._string;
    }

    _postOrder(raiz) {
        if(raiz == null) {
            return;
        }
        else{
            this._postOrder(raiz.izquierda);
            this._postOrder(raiz.derecha);
            this._string += raiz.toString();
        }
    }
}