import type { ICitta } from "../interfaces/ICitta";
import type { IMezzo } from "../interfaces/IMezzo";

export class Citta implements ICitta {
  mezziDisponibili: IMezzo[] = [];

  constructor(public nome: string) {}

  aggiungiMezzo(mezzo: IMezzo): void {
    this.mezziDisponibili.push(mezzo);
  }
}
