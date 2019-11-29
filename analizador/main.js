import Arbol from "./Arbol.js";

let resultadoPre = document.querySelector("#resultadoPre");
let resultadoPost = document.querySelector("#resultadoPost");
let resultadoPreOperacion = document.querySelector("#resultadoPreOperacion");
class main {
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
            resultadoPre.innerHTML = "PreOrder: " + arbolBin.preOrder();
            let operacion = arbolBin.preOrder().split(",");
            let pila = [];
            operacion.pop();
            let inicio = 0;
            for (let o = operacion.length - 1; i >= 0; i--) {
                switch (operacion[i]) {
                    case "*":
                        inicio = pila.pop();
                        inicio = inicio * pila.pop();
                        pila.push(inicio);
                        break;
                    case "/":
                        inicio = pila.pop();
                        inicio = inicio / pila.pop();
                        pila.push(inicio);
                        break;
                    case "+":
                        inicio = pila.pop();
                        inicio = inicio + pila.pop();
                        pila.push(inicio);
                        break;
                    case "-":
                        inicio = pila.pop();
                        inicio = inicio - pila.pop();
                        pila.push(inicio);
                        break;
                    default:
                        pila.push(parseInt(operacion[i]));
                        break;
                }
            }
            resultadoPreOperacion.innerHTML("Resultado: " + pila[0]);
        });
        document.querySelector("#btnPost").addEventListener("click", () => {
            arbolBin.postOrder();
            console.log(arbolBin.postOrder());
            resultadoPost.innerHTML = "PostOrder: " + arbolBin.postOrder();
        });
    }
}
let m = new main();