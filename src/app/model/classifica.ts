import { Team } from './team';

export class Classifica {
  listaTeams: Array<ClassificaItem> = [];
  listaPromosse: Array<Team> = [];
  listaRetrocesse: Array<Team> = [];
}

export class ClassificaItem {
  verdetto: string;
  team: Team = new Team();
  partiteGiocate: number;
  vinte: number;
  perse: number;
  pareggiate: number;
  golFatti: number;
  golSubiti: number;
  golFattiC: number;
  golSubitiC: number;
  golFattiFC: number;
  golSubitiFC: number;
  punti: number;
}

export class Format {
  champions: number;
  europa: number;
  intertoto: number;
  promozione: number;
  retrocessione: number;
  playoff: number;
  playout: number;
}
