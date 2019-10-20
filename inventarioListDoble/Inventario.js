export default class Inventario {
  constructor() {
    this._inicio = null;
    this._ultimo = null;
    this.tamaño = 0;
    this._inventarioString = "";
  }

  get inventarioString() {
    return this._inventarioString;
  }

  /*getInventarioString(inicio) {
    if (inicio != null) {
      this._inventarioString += inicio.toString() + "<br>";
      if (inicio.siguiente != null) {
        this.getInventarioString(inicio.siguiente);
      }
    }
  }

  imprimirInventario() {
    this._inventarioString = "";
    this.getInventarioString(this._inicio);
  }*/

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


  /*agregarProducto(producto) {
    if(this._inicio) {
      producto.siguiente = this._inicio;
      this._inicio.anterior = producto;
      this._inicio = producto;
    }
    else{
      this._inicio = producto;
      this._ultimo = producto;
    }

    this.tamaño++;
  }*/

  agregarProducto(producto) {

    let actual = this._ultimo;
    if (this._inicio == null) {
      this._inicio = producto;
      this._ultimo = producto;
    }
    else {
      console.log(actual.id);
      if (Number(producto.id) > Number(actual.id)) {
        actual.siguiente = producto;
        producto.anterior = actual;
        this._ultimo = producto;
      }
      else {
        console.log(actual.anterior);
        if (actual.anterior == null) {
          this._inicio = producto;
          producto.siguiente = actual;
          this._ultimo = producto;


        }
        else {
          actual.anterior.siguiente = producto;
          actual.anterior = producto;
          producto.siguiente = actual;
          producto.anterior = actual.anterior.anterior;
          this._ultimo = actual;
        }
      }
    }
    this.tamaño++;
  }



  eliminarDeinicio() {
    if (!this._inicio) {
      return null;
    }

    let valorARgresar = this._inicio.producto;

    if (this._inicio === this._ultimo) {
      this._inicio = null;
      this._ultimo = null;
    } else {
      this._inicio = this._inicio.siguiente;
      this._inicio.anterior = null;
    }

    this.tamaño--;
    return valorARgresar;
  }

  eliminarDeFinal() {
    if (!this._ultimo) {
      return null;
    }

    let valorARgresar = this._ultimo.producto;

    if (this._inicio === this._ultimo) {
      this._inicio = null;
      this._ultimo = null;
    } else {
      this._ultimo = this._ultimo.anterior;
      this._ultimo.anterior = null;
    }
    this.tamaño--;
    return valorARgresar;
  }
  
  eliminarProducto(id) {
    console.log(id);
    
    let actual = this._inicio;
    let ant = null;
    while (actual !== null) {
      if (actual.id == id) {
        console.log("entra");
        if(!ant) {
          return this.eliminarDeinicio();
        }
        else if(!actual.siguiente) {
          return this.eliminarDeFinal();
        } else{
          ant.siguiente = actual.siguiente;
          actual.siguiente.anterior = ant;
        }
      }
      ant = actual;
      actual = actual.siguiente;
    }
    return null;
  }

  /*buscar(id) {
    let actual = this._inicio;
    let ant = null;
    while (actual !== null) {
      if (actual.id == id) {
        console.log("entra");
          ant.siguiente = actual.siguiente;
          actual.siguiente.anterior = ant;
      }
      ant = actual;
      actual = actual.siguiente;
    }
    return null;
  }*/


}