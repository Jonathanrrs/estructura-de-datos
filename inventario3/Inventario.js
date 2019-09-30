import Producto from "./Producto.js";

export default class Inventario {
    constructor() {
        this._inventario = [];
        this._inventarioString = "";

    }

    get inventario() {
        return this._inventario;
    }

    get inventarioString() {
        return this._inventarioString;
    }

    buscar(id) {
        for (let i = 0; i < this._inventario.length; i++) {
            if(this._inventario[i].id == id) {
                return i;
            }
        }
        return -1;
    }

    registrarProducto(producto) {
        if(this.buscar(producto.id) == -1) {
            let nuevoProducto = new Producto(producto);
            this._inventario[this._inventario.length] = nuevoProducto;
        }
    }

    buscarProducto(id) {
        let index = this.buscar(id);
        if(index > -1) {
            return this._inventario[index].toString();
        }
        else{
            return "No encontrado"
        }
    }

    borrar(id) {
        let index = this.buscar(id);
        if(index >= 0) {
            for (let i = index + 1; i <= this._inventario.length; i++) {
                this._inventario[i-1] = this._inventario[i];
                
            }
        }
        let nuevoInventario = [];
        for (let i = 0; i < this._inventario.length - 1; i++) {
           nuevoInventario[i] = this._inventario[i];
            
        }
        this._inventario = nuevoInventario;  
    }

    inventarioAString() {
        this._inventarioString = "";
        for (let i = 0; i < this._inventario.length; i++) {
            this._inventarioString += this._inventario[i].toString() + "<br>";
        }
    }

    getInventarioString() {
        this.inventarioAString();
    }
}