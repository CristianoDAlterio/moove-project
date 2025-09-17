import type { IMezzo } from "../interfaces/IMezzo";
import type { IUtente } from "../interfaces/IUtente";

export class Mezzo implements IMezzo {
  stato: "disponibile" | "in uso" = "disponibile";
  utenteAssegnato?: IUtente | undefined;

  constructor(
    public id: string,
    public tipo: "bici" | "scooter" | "monopattino"
  ) {}

  assegnaUtente(utente: IUtente): void {
    if (this.stato === "disponibile") {
      this.utenteAssegnato = utente;
      this.stato = "in uso";
    }
  }

  rilascia(): void {
    if (this.stato === "in uso") {
      this.utenteAssegnato = undefined;
      this.stato = "disponibile";
    }
  }
}
