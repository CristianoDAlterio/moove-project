export class Utente {
    constructor(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    prenotaMezzo(mezzo) {
        if (this.mezzoCorrente) {
            console.log(`⚠️ ${this.nome} ha già un mezzo prenotato.`);
            return;
        }
        mezzo.assegnaUtente(this);
        this.mezzoCorrente = mezzo;
    }
}
