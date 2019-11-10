export default class Ruta {
  constructor() {
    this._inicio = null;
    this.tamaño = 0;
    this._baseString = "";
    this._rutaString = "";
  }

  get baseString() {
    return this._baseString;
  }

  get rutaString() {
    return this._rutaString;
  }


  agregarBase(base) {
   if(this._inicio == null) {
     this._inicio = base;
     this._inicio.siguiente = this._inicio;
     this._inicio.anterior = this._inicio;
     this.tamaño++;
   }
   else if(this._inicio.siguiente == this._inicio) {
     this._inicio.siguiente = base;
     this._inicio.anterior = base;
     base.siguiente = this._inicio;
     base.anterior = this._inicio;
     this.tamaño++;
   }
   else{
     this.insertarAntes(base, this._inicio);
     this.tamaño++;
   }
  }

  insertarAntes(base,antBase) {
    base.anterior = antBase.anterior;
    base.siguiente = antBase;
    antBase.anterior.siguiente = base;
    antBase.anterior = base;
  }

  buscarAnteriorProducto(posicion, inicio) {
    let i = 1;
    do {
      if(i == posicion) {
        return inicio;
      }
      inicio = inicio.siguiente;
      i++;
    }
    while(inicio != this._inicio);
  }

  buscar(nombre) {
    if(this._inicio.nombre == nombre) {
      return this._inicio.toString();
    }
    else{
      let base = this.buscarBase(nombre, this._inicio.siguiente);
      if(base == null) {
        return alert("No encontrado");
      }
      else{
        return alert(base.toString());
      }
    }
    
  }

  borrarBase(nombre) {
    if(this._inicio.nombre == nombre) {
      if(this._inicio.siguiente == this._inicio) {
        this._inicio = null;
        this.tamaño--;
      }
      else if(this._inicio != null) {
        this._inicio.anterior.siguiente = this._inicio.siguiente;
        this._inicio.siguiente.anterior = this._inicio.anterior;
        this._inicio = this._inicio.siguiente;
        this.tamaño--;
      }
      else{
        this._encontrarBaseEliminar(nombre);
      }
    }
  }

  encontrarBaseEliminar(nombre) {
    let base = this.buscarBase(nombre, this._inicio.siguiente);
    if(base == null) {
      return;
    }
    else{
      this.baseString.siguiente.anterior = base.anterior;
      base.anterior.siguiente = base.siguiente;
      this.tamaño--;
    }
  }

  buscarBase(nombre, inicio) {
    while(inicio != this._inicio) {
      if(inicio.nombre == nombre) {
        return inicio;
      }
      inicio = inicio.siguiente;
    }

    return null;
  }

  recorrido(nombre, horaInicio, horaFin) {
    if(this._inicio != null) {
      let inicioBase = null;
      if(this._inicio.nombre == nombre) {
        inicioBase = this._inicio;
      }
      else{
        inicioBase = this.buscarBase(nombre, this.inicio.siguiente);
      }

      if(inicioBase != null) {
        this._crearRecorrido(inicioBase, horaInicio, horaFin);
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }

  crearRecorrido(base, horaInicio, horaFin) {
    this._baseString = "";
    horaInicio = this.covertirMilisegundos(horaInicio);
    horaFin = this.covertirMilisegundos(horaFin);

    if(horaInicio < horaFin) {
      this.rutaString += `Hora actual: ${this.convertirFormato(horaInicio)}, Base actual: ${base.nombre}` + "<br>";
      base = base.siguiente;
      do {
        let agregarMinutos = this.convertirMinAMilisegundos(base.minutos);
        horaInicio += agregarMinutos;
        this._rutaString += `Hora actual: ${this.convertirFormato(horaInicio)}, Base actual: ${base.nombre}` + "<br>";
        base = base.siguiente;
      }
      while(horaInicio < horaFin);
    }else{
      let c = 0;
      horaLimite = this.covertirMilisegundos("23:59");
      this._rutaString += `Hora actual: ${this.convertirFormato(horaInicio)}, Base actual: ${base.nombre}` + "<br>";
      base = base.siguiente;
      do{
        let agregarMinutos = this.convertirMinAMilisegundos(base.minutos);
        horaInicio += agregarMinutos;
        if(horaInicio > horaLimite) {
          horaInicio -= (horaLimite + 60000);
          c++;
        }
        this._rutaString += `Hora actual: ${this.convertirFormato(horaInicio)}, Base actual: ${base.nombre}` + "<br>";
      base = base.siguiente;
      }
      while((horaInicio<horaFin) || (c == 0));
    }
    
  }

  covertirMilisegundos(hora) {
    hora = hora.split(":");
    let horas = hora[0];
    let minutos = hora[1];
    let milisegundos = (horas * 3600000) + (minutos*60000);
    return milisegundos;
  }

  convertirMinAMilisegundos(minutos) {
    let milisegundos = minutos * 60000;
    return milisegundos;
  }

  convertirFormato(milisegundos) {
    let minutos = parseInt((milisegundos / (1000 * 60))) % 60;
    let horas = parseInt((milisegundos / (1000 * 60))) % 24;
    if(horas < 10) {
      horas = "0" + horas;
    }
    if(minutos < 10) {
      minutos = "0" + minutos;
    }
    return horas + "0" + minutos;
  }

  imprimir() {
    this._baseString = "";
    if(this._inicio != null) {
      this._baseString += this._inicio.toString() + "<br>";
      this._basesString(this._inicio.siguiente);
    }
  }

  baseString(inicio) {
    if(inicio != this._inicio) {
      this._basesString += inicio.toString() + "<br>";
      this._basesString(inicio.siguiente);
    }
  }




  /*imprimir() {
    let actual = this._inicio;
      this._baseString = "";
      while (actual !== actual) {
        this._baseString += actual.toString() + " <br> ";
        actual = actual.siguiente;
      }
      //return this._inventarioString += " X ";
    }
  
    imprimirInverso() {
      let actual = this._ultimo;
      this._baseString = "";
      while (actual) {
        this._baseString += actual.toString() + " <br> ";
        actual = actual.anterior;
      }
      //return this._inventarioString += " X ";
    }*/

}