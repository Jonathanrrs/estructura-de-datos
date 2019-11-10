import Ruta from "./Ruta.js";
import Base from "./Base.js";

let btnAgregar = document.querySelector("#btn"),
    btnBorrar = document.querySelector("#btnBorrar"),
    btnBuscar = document.querySelector("#btnBuscar"),
    divBase = document.querySelector("#inventario"),
    horaInicio = document.querySelector("#horaInicio"),
    horaFin = document.querySelector("#horaFin"),
    minUltiumaBase = document.querySelector("#minutos")

    btnAgregar.addEventListener("click", () => {
        m.agregarBaseNueva(m.extraerHtml());
        m.reset();
      
        //console.log(m._inventarioTotal);
        
    });


    btnBorrar.addEventListener("click", () => {
     m.borrar(document.querySelector("#borrar"))
    });
    
    btnBuscar.addEventListener("click", () => {
        m.busqueda(document.querySelector("#buscar").value);
   
        
     });
    class Main {
        constructor() {
            this._rutaTotal = new Ruta();
          
        }
        extraerHtml() {
            let nuevoBase = {
                id: document.querySelector("#id").value,
                nombre: document.querySelector("#nombre").value,
                minutos: document.querySelector("#minutos").value
            }

            let objNuevoBase = new Base(nuevoBase);
            return objNuevoBase;
        }

        agregarBaseNueva(objNuevoBase) {
            this._rutaTotal.agregarBase(objNuevoBase);
            this.mostrarBase();
        }
        reset() {
            document.querySelector("#formulario").reset();
        }
        
       mostrarBase() {
           this._rutaTotal.imprimir();
           divBase.innerHTML = this._rutaTotal.baseString;
       }

       busqueda(nombre) {
           this._rutaTotal.buscarBase(nombre);
       }
       borrar(nombre) {
           this._rutaTotal.borrarBase(nombre);
           this.mostrarBase;
       }
      

     


    }

    let m = new Main();