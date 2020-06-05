import { Team } from './team';
import { Format, Classifica } from './classifica';

export class Campionato{
  id: string;
  stagione: string;
  denominazioneLega: string;
  listaGiornate: Array<Giornata>;
  numeroTeams: number;
  listaTeams: Array<Team> = [];
  tipologia: number;
  descrizioneTipologia: string;
  format: Format;
  classifica: Classifica;
  singolo: boolean;
  tipologiaRisultati: number;
  giornataCorrente: number;
}

export class Giornata{
  numeroGiornata: number;
  girone: string;
  listaEventi: Array<Evento>;
}

export class Evento{
  id: number;
  teamC:Team;
  teamFC: Team;
  goalC: number;
  goalFC: number;
}
