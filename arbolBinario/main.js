import Inventario from "./Inventario.js";
import Producto from "./Producto.js";

let btnAgregar = document.querySelector("#btn"),
    btnBuscar = document.querySelector("#btnBuscar"),
    btnInOrder = document.querySelector("#btnIn"),
    btnPreOrder = document.querySelector("#btnIn"),
    btnPostOrder= document.querySelector("#btnIn"),
    divInventario = document.querySelector("#inventario");

    btnAgregar.addEventListener("click", () => {
        m.agregarProductoNuevo(m.extraerHtml());
        m.reset();
      
        console.log(m._inventarioTotal);
        
    });

    btnInOrder.addEventListener("click", () => {
        m.imprimirInOrden();
   
     });
     btnPreOrder.addEventListener("click", () => {
         m.imprimirPreOrder();
   
     });
     btnPostOrder.addEventListener("click", () => {
         m.imprimirPostOrder();
   
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
            this._inventarioTotal.agregar(objNuevoProducto);
            /*this.mostrarInventario();*/
        }
        reset() {
            document.querySelector("#formulario").reset();
        }
        imprimirInOrder() {
            this._inventarioTotal.inOrder();
            divInventario.innerHTML = this._inventarioTotal.inventarioString;
        }
        imprimirPreOrder() {
            this._inventarioTotal.preOrder();
            divInventario.innerHTML = this._inventarioTotal.inventarioString;
        }
        imprimirPostOrder() {
            this._inventarioTotal.postOrder();
            divInventario.innerHTML = this._inventarioTotal.inventarioString;
        }
       
    }

    let m = new Main();





