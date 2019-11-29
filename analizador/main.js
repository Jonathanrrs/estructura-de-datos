import Arbol from "./Arbol.js";

class main{
    constructor() {
        let arbolBin = new Arbol();
        document.querySelector("#btn").addEventListener("click", () => {
            let expresion = document.querySelector("#expresion").value;
            arbolBin.separar(expresion);
            arbolBin.arbolBinario();
        });
        document.querySelector("#btnPre").addEventListener("click", () => {
            arbolBin.preOrder();
            console.log(arbolBin.preOrder());
        });
        document.querySelector("#btnPost").addEventListener("click", () => {
            arbolBin.postOrder();
            console.log(arbolBin.postOrder());
        });
    }
}
let m = new main();