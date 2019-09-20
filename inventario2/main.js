import Producto from "./Producto.js";
import Interfaz from "./Interfaz.js";

class Main {
    constructor() {
        let info = new Interfaz();
        document.querySelector("#btn").addEventListener("click", () => {
            let id = document.querySelector("#id").value;
            let nombre = document.querySelector("#nombre ").value;
            let precio = document.querySelector("#precio").value;
            let cantidad = document.querySelector("#cantidad").value;
            let descripcion = document.querySelector("#descripcion").value;
            

            let objProducto = {
                id: id,
                nombre: nombre,
                precio: precio,
                cantidad: cantidad,
                descripcion: descripcion
            };

            let producto = new Producto(objProducto);
            info.agregarProducto(producto)

        });

        document.querySelector("#btnBuscar").addEventListener("click", () => {
            info.buscar2();
        })

    }
}

let m = new Main();