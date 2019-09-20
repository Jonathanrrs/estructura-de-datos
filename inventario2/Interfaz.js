
export default class Interfaz {
    constructor(info) {
        this._info = info;
        this._productos = [];
        
        
    }

    agregaraInterfaz(producto) {
        let info = document.querySelector("#info");
        let elemento = document.createElement("div");
        elemento.innerHTML = `
              <div class="card text-center mb-4">
                   <div class="card-body tarjeta">
                        <strong>ID</strong>: ${producto.id}
                        <strong>Nombre</strong>: ${producto.nombre}
                        <strong>Precio</strong>: ${producto.precio}
                        <strong>Cantidad</strong>: ${producto.cantidad}
                        <strong>Descripcion</strong>: ${producto.descripcion}
                  </div>
              </div>
        `;
        info.appendChild(elemento);

        let objProducto = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: producto.cantidad,
            descripcion: producto.descripcion
        };

        this._productos[this._productos.length] = objProducto;
        
    }

    resetForm() {
        document.querySelector("#formulario").reset();
    }

    agregarProducto(producto) {
        this.agregaraInterfaz(producto);
        this.resetForm();

    }
}