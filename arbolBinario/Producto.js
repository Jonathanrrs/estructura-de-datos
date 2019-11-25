export default class Producto{
    constructor(producto) {
        this._id = producto.id;
        this._nombre = producto.nombre;
        this._precio = producto.precio;
        this._cantidad = producto.cantidad;
        this._descripcion = producto.descripcion;
        this._izquierda = null;
        this._derecha = null;
    }

    get id() {
        return this._id;
    }

    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }
    
    get cantidad() {
        return this._cantidad;
    }

    get descripcion() {
        return this._descripcion;
    }

    get izquierda() {
        return this._izquierda;
    }

    get derecha() {
        return this._derecha;
    }

    set izquierda(valor) {
        this._izquierda = valor;
    }

    set derecha(valor) {
        this._derecha = valor;
    }

    toString() {
        return `Código: ${this._id}, Nombre: ${this._nombre}, Precio: ${this._precio}, Cantidad: ${this._cantidad}, Descripción: ${this._descripcion}`;
    }
}