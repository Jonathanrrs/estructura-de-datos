import Inventario from "./Inventario.js";
import Producto from "./Producto.js";

let btnAgregar = document.querySelector("#btn"),
    btnInvertir = document.querySelector("#btnInvertir"),
    btnBorrar = document.querySelector("#btnBorrar"),
    btnBuscar = document.querySelector("#btnBuscar"),
    divInventario = document.querySelector("#inventario");

    btnAgregar.addEventListener("click", () => {
        m.agregarProductoNuevo();
        m.reset();
        console.log(m._inventarioTotal);
        
    });

    btnInvertir.addEventListener("click", () => {
        m.invertirLista();
        
    });

    btnBorrar.addEventListener("click", () => {
       m.borrarDeInventario(document.querySelector("#borrar").value);
    });
    
    btnBuscar.addEventListener("click", () => {
        m.buscarProductoInv(document.querySelector("#buscar").value);
     });
    class Main {
        constructor() {
            this._inventarioTotal = new Inventario();
          
        }
        extraerHtml() {
            let objNuevoProducto = {
                id: document.querySelector("#id").value,
                nombre: document.querySelector("#nombre").value,
                precio: document.querySelector("#precio").value,
                cantidad: document.querySelector("#cantidad").value,
                descripcion: document.querySelector("#descripcion").value
            }
            return objNuevoProducto;
        }

        agregarProductoNuevo() {
            let producto = new Producto(this.extraerHtml());
            this._inventarioTotal.agregarProducto(producto);
            this.mostrarInventario();
        }
        reset() {
            document.querySelector("#formulario").reset();
        }
        
       mostrarInventario() {
           this._inventarioTotal.imprimirInventario();
           divInventario.innerHTML = this._inventarioTotal.inventarioString;
       }
       
       invertirLista() {
           invertir(producto);
           this.mostrarInventario();
       }

       borrarDeInventario(id) {
           this._inventarioTotal.borrar(id);
           this.mostrarInventario();
       }

       buscarProductoInv(id) {
           this._inventarioTotal.buscarProducto(id);
       }
       

    }

    let m = new Main();