export default class Azar {
    numeroAzar() {
        return Math.trunc(Math.random() *10 + 4);
    }

    probabilidad() {
        return Math.trunc(Math.random() * 100);
    }
}