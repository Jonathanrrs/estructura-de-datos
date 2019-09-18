class Corredor {
    constructor(posicionTor=0, posicionLie=0) {
        this._posicionTor = posicionTor;
        this._posicionLie = posicionLie;
    }

    get posicionTor() {
        return this._posicionTor;
    }

    get posicionLie() {
        return this._posicionLie;
    }

    dado() {
        return Math.floor(Math.random() * 100 + 1);
    }
}

class Tortuga extends Corredor {
    constructor(posicionTor, posicionLie) {
        super(posicionTor, posicionLie);
    }

   
    correrTortuga(dado) {
        if (dado >= 0 && dado <= 50) {
            this._posicionTor += 3;
        }
        else if (dado >= 51 && dado <= 70) {
            this._posicionTor -= 6;
        }
        else if (dado >= 71 && dado <= 100) {
            this._posicionTor += 1;
        }
    }
}

export default class Liebre extends Tortuga {
    constructor(posicionTor, posicionLie) {
        super(posicionTor, posicionLie);
        
    }

    correrLiebre(dado) {
        if (dado >= 0 && dado <= 20) {
            this._posicionLie +=0;
        }
        else if (dado >= 21 && dado <= 40) {
            this._posicionLie +=9;
        }
        else if (dado >= 41 && dado <= 50) {
            this._posicionLie -=12;
        }
        else if (dado >= 51 && dado <= 85) {
            this._posicionLie +=1;
        }
        else if (dado >= 86 && dado <= 100) {
            this._posicionLie -=2;
        }
    }

}


