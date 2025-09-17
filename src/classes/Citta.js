export class Citta {
    constructor(nome) {
        this.nome = nome;
        this.mezziDisponibili = [];
    }
    aggiungiMezzo(mezzo) {
        this.mezziDisponibili.push(mezzo);
    }
}
