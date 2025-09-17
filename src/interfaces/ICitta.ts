import type { IMezzo } from "./IMezzo";

export interface ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];

  aggiungiMezzo(mezzo: IMezzo): void;
}
