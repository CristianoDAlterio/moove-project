import type { IUtente } from "../interfaces/IUtente";
import type { IMezzo } from "../interfaces/IMezzo";

export class Utente implements IUtente {
  mezzoCorrente?: IMezzo | undefined;

  constructor(
    public nome: string,
    public cognome: string,
    public email: string,
    public metodoPagamento: "carta" | "paypal" | "abbonamento"
  ) {}

  prenotaMezzo(mezzo: IMezzo): void {
    if (this.mezzoCorrente) {
      console.log(`⚠️ ${this.nome} ha già un mezzo prenotato.`);
      return;
    }
    mezzo.assegnaUtente(this);
    this.mezzoCorrente = mezzo;
  }
}
