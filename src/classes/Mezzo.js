export class Mezzo {
    constructor(id, tipo) {
        this.id = id;
        this.tipo = tipo;
        this.stato = "disponibile";
    }
    assegnaUtente(utente) {
        if (this.stato === "disponibile") {
            this.utenteAssegnato = utente;
            this.stato = "in uso";
        }
    }
    rilascia() {
        if (this.stato === "in uso") {
            this.utenteAssegnato = undefined;
            this.stato = "disponibile";
        }
    }
}
