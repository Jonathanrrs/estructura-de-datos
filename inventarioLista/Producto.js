export default class Producto{
    constructor(producto) {
        this._id = producto.id;
        this._nombre = producto.nombre;
        this._precio = producto.precio;
        this._cantidad = producto.cantidad;
        this._descripcion = producto.descripcion;
        this._siguiente = null;
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

    get siguiente() {
        return this._siguiente;
    }

    set siguiente(valor) {
        this._siguiente = valor;
    }

    toString() {
        return `Código: ${this._id}, Nombre: ${this._nombre}, Precio: ${this._precio}, Cantidad: ${this._cantidad}, Descripción: ${this._descripcion}`;
    }
}