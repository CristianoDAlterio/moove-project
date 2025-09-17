import type { IUtente } from "./IUtente";

export interface IMezzo {
  id: string;
  tipo: "bici" | "scooter" | "monopattino";
  stato: "disponibile" | "in uso";
  utenteAssegnato?: IUtente | undefined;

  assegnaUtente(utente: IUtente): void;
  rilascia(): void;
}
