import Inventario from "./Inventario.js";

let btnAgregar = document.querySelector("#btn"),
    btnBorrar = document.querySelector("#btnBorrar"),
    btnBuscar = document.querySelector("#btnBuscar"),
    divInventario = document.querySelector("#inventario");

    btnAgregar.addEventListener("click", () => {
        m.registrarNuevoProducto(m.extraerHtml())
    });
    
    btnBorrar.addEventListener("click", () => {
        m.borrarDelInventario(document.querySelector("#borrar").value);
    });

    btnBuscar.addEventListener("click", () => {
        m.hacerBusqueda(document.querySelector("#buscar").value);
    });

    class Main {
        constructor() {
            this._inventarioTotal = new Inventario();
        }
        
        registrarNuevoProducto(objNuevoProducto) {
            this._inventarioTotal.registrarProducto(objNuevoProducto);
            this.mostrarInventario();
        }

        hacerBusqueda(id) {
            alert(this._inventarioTotal.buscarProducto(id));
        }

        extraerHtml() {
            let objNuevoProducto = {
                id: document.querySelector("#id").value,
                nombre: document.querySelector("#nombre ").value,
                precio: document.querySelector("#precio").value,
                cantidad: document.querySelector("#cantidad").value,
                descripcion: document.querySelector("#descripcion").value
            }
            return objNuevoProducto;
        }

        borrarDelInventario(id) {
            this._inventarioTotal.borrar(id);
            this.mostrarInventario();
        }

        mostrarInventario() {
         this._inventarioTotal.getInventarioString();
         divInventario.innerHTML = this._inventarioTotal.inventarioString;
        }

    }

    let m = new Main();