import { Team } from './team';
import { TreeNode } from 'primeng/api';
import { Giornata } from './campionato';

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
  tabellone: TreeNode[];
  faseCorrente: number;
  descrizioneFase: string;
  listaFasi: Array<Giornata> = [];
}


export class FormatCoppa {
  diretta: boolean;
  ar: boolean;
  gironi: boolean;
}
