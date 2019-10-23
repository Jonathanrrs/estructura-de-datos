import Ruta from "./Ruta.js";
import Base from "./Base.js";

let btnAgregar = document.querySelector("#btn"),
    btnInvertir = document.querySelector("#btnInvertir"),
    btnBorrar = document.querySelector("#btnBorrar"),
    btnBuscar = document.querySelector("#btnBuscar"),
    divInventario = document.querySelector("#inventario");

    btnAgregar.addEventListener("click", () => {
        m.agregarProductoNuevo(m.extraerHtml());
        m.reset();
      
        //console.log(m._inventarioTotal);
        
    });

    btnInvertir.addEventListener("click", () => {
     m.mostrarInventarioInverso();
        
    });

    btnBorrar.addEventListener("click", () => {
     
      
    });
    
    btnBuscar.addEventListener("click", () => {

   
        
     });
    class Main {
        constructor() {
            this._RutaTotal = new Ruta();
          
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

        agregarBaseNuevo(objNuevoBase) {
            this._RutaTotal.agregarProducto(objNuevoBase);
            this.mostrarInventario();
        }
        reset() {
            document.querySelector("#formulario").reset();
        }
        
       mostrarInventario() {
           this._RutaTotal.imprimir();
           divInventario.innerHTML = this._RutaTotal.inventarioString;
       }
       mostrarInventarioInverso() {
        this._RutaTotal.imprimirInverso();
        divInventario.innerHTML = this._RutaTotal.inventarioString;
       }

     


    }

    let m = new Main();