import Inventario from "./Inventario.js";
import Producto from "./Producto.js";

let btnAgregar = document.querySelector("#btn"),
    btnInvertir = document.querySelector("#btnInvertir"),
    btnBorrar = document.querySelector("#btnBorrar"),
    btnBuscar = document.querySelector("#btnBuscar"),
    divInventario = document.querySelector("#inventario"),
    btnPosicion = document.querySelector("#btnPosicion");

    btnAgregar.addEventListener("click", () => {
        m.agregarProductoNuevo(m.extraerHtml());
        m.reset();
          
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

     btnPosicion.addEventListener("click", () => {
         let datos = m.extraerHtml();
         let posicion = document.querySelector("#posicion").value;
         m.insertarProducto(datos, posicion);
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

        agregarProductoNuevo(objNuevoproducto) {
            this._inventarioTotal.agregarProducto(objNuevoproducto);
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
           this._inventarioTotal.imprimirInventarioInverso();
           divInventario.innerHTML = this._inventarioTotal.inventarioString;
       }

       borrarDeInventario(id) {
           this._inventarioTotal.borrar(id);
           this.mostrarInventario();
       }

       buscarProductoInv(id) {
           this._inventarioTotal.buscarProducto(id);
       }
       
       insertarProducto(producto, posicion) {

           this._inventarioTotal.agregarProductoEnPosicion(producto, posicion);
           this.mostrarInventario();
       }

    }

    let m = new Main();