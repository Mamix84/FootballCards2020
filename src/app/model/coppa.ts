import { Team } from './team';

export class Coppa {
  id: string;
  stagione: string;
  denominazioneCoppa: string;
  numeroTeams: number;
  listaTeams: Array<Team> = [];
  tipologia: number;
  descrizioneTipologia: string;
  format: FormatCoppa;
  tipologiaRisultati: number;
}


export class FormatCoppa {
  diretta: boolean;
  ar: boolean;
  gironi: boolean;
}
