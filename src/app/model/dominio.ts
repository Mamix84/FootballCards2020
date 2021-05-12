export class TipologiaTorneo {
  id: string;
  etichetta: string;
  valore: number;
}

export class NumeroTeams {
  id: string;
  tipologiaTorneo: number;
  etichetta: string;
  valore: number;
}

export class FormatDominio {
  id: string;
  label: string;
  tipologiaTorneo: number;
  numeroTeams: string;
  champions: number;
  europa: number;
  intertoto: number;
  promozione: number;
  retrocessione: number;
  playoff: number;
  playout: number;
}
