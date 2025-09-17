import type { IMezzo } from "./IMezzo";

export interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: "carta" | "paypal" | "abbonamento";
  mezzoCorrente?: IMezzo | undefined;

  prenotaMezzo(mezzo: IMezzo): void;
}
