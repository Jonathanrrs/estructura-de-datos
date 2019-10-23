export default class Ruta {
  constructor() {
    this._inicio = null;
    this._ultimo = null;
    this.tamaño = 0;
    this._inventarioString = "";
  }

  get inventarioString() {
    return this._inventarioString;
  }

  imprimir() {
    let actual = this._inicio;
    this._inventarioString = "";
    while (actual) {
      this._inventarioString += actual.toString() + " <br> ";
      actual = actual.siguiente;
    }
    //return this._inventarioString += " X ";
  }

  imprimirInverso() {
    let actual = this._ultimo;
    this._inventarioString = "";
    while (actual) {
      this._inventarioString += actual.toString() + " <br> ";
      actual = actual.anterior;
    }
    //return this._inventarioString += " X ";
  }




  agregarProducto(base) {

    let actual = this._ultimo;
    if (this._inicio == null) {
      console.log(base);
      this._inicio = base;
      this._ultimo = base;
    }
    else if(actual.siguiente == null) {
      actual.siguiente = base;
      this._ultimo = base;
      base.siguiente = actual;
    }
    this.tamaño++;
  }

}