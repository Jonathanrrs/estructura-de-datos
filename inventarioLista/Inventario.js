export default class Inventario {
  constructor() {
    this._inicio = null;
    this._ultimo = null;
    this._inventarioString = "";
  }

  get inventarioString() {
    return this._inventarioString;
  }



  agregarProducto(producto) {
    console.log(producto);

    if (this.buscar(producto.id, this._inicio) == -1) {
      if (this._inicio == null) {
        this._inicio = producto;
      }
      else if (this._ultimo == null) {
        this._inicio.siguiente = producto;
        this._ultimo = producto;
      }
      else {
        this._ultimo.siguiente = producto;
        this._ultimo = producto;
      }
    }
  }


  getInventarioString(inicio) {
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
  }

  imprimirInventarioInverso() {
    this._inventarioString = "";
    this.invertir(this._inicio);
  }

  buscar(id, inicio) {
    while (inicio != null) {
      if (inicio.id == id) {
        return inicio;
      }
      inicio = inicio.siguiente;
    }
    return -1;
  }

  buscarProducto(id) {
   let producto = this.buscar(id, this._inicio);
   if(producto == -1) {
    return alert("No se encontró");
   }
   else{
     return alert(producto.toString());
   }
  }

 
  invertir(inicio) {
    if(inicio != null) {
      if(inicio.siguiente != null) {
        this.invertir(inicio.siguiente);
      }
      this._inventarioString += inicio.toString() + "<br>";
    }
  }

  borrar(id) {
    if(this._inicio.id == id) {
      this._inicio = this._inicio.siguiente;
    }
    else{
      let producto = this.buscarSiguiente(id, this._inicio);
      if(producto == -1) {
        return alert("No encontrado");
      }
      else{
        if(producto.siguiente.id == this._ultimo.id) {
          this._ultimo = producto;
        }
        producto.siguiente = producto.siguiente.siguiente;
      }
    }
  }

  buscarSiguiente(id, inicio) {
    while(inicio.siguiente != null) {
      if(inicio.siguiente.id == id) {
        return inicio;
      }
      inicio = inicio.siguiente;
    }
    return -1;
  }

  buscarAnterior(posicion, inicio) {
    for (let i = 1; i < posicion + 1; i++) {
      if(i == posicion - 1) {
        return inicio;
      }
      inicio = inicio.siguiente;
      
    }
  }

  agregarProductoEnPosicion(producto, posicion) {
    if(this.buscar(producto.id, this._inicio) == -1) {
      if(posicion == 1) {
        producto.siguiente = this._inicio;
        this._inicio = producto;
      }
      else{
        let productoAnterior = this.buscarAnterior(posicion, this._inicio);
        if(productoAnterior.siguiente == null) {
          this._ultimo = producto;
        }
        producto.siguiente = productoAnterior.siguiente;
        productoAnterior.siguiente = producto;
      }
    }
  }
  
}