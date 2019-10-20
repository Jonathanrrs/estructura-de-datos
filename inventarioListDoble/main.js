import Inventario from "./Inventario.js";
import Producto from "./Producto.js";

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
      m.eliminar(document.querySelector("#borrar").value);
      
    });
    
    btnBuscar.addEventListener("click", () => {
        m.buscarProducto(document.querySelector("#buscar").value);
   
        
     });
    class Main {
        constructor() {
            this._inventarioTotal = new Inventario();
          
        }
        extraerHtml() {
            let nuevoProducto = {
                id: document.querySelector("#id").value,
                nombre: document.querySelector("#nombre").value,
                precio: document.querySelector("#precio").value,
                cantidad: document.querySelector("#cantidad").value,
                descripcion: document.querySelector("#descripcion").value
            }

            let objNuevoProducto = new Producto(nuevoProducto);
            return objNuevoProducto;
        }

        agregarProductoNuevo(objNuevoProducto) {
            this._inventarioTotal.agregarProducto(objNuevoProducto);
            this.mostrarInventario();
        }
        reset() {
            document.querySelector("#formulario").reset();
        }
        
       mostrarInventario() {
           this._inventarioTotal.imprimir();
           divInventario.innerHTML = this._inventarioTotal.inventarioString;
       }
       mostrarInventarioInverso() {
        this._inventarioTotal.imprimirInverso();
        divInventario.innerHTML = this._inventarioTotal.inventarioString;
       }

       eliminar(id) {
           this._inventarioTotal.eliminarProducto(id);
           this.mostrarInventario();
       }

       buscarProducto(id) {
        this._inventarioTotal.buscar(id);
        this.mostrarInventario();
       }
       


    }

    let m = new Main();