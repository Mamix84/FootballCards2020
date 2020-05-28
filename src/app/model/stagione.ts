import { Campionato } from './campionato';

export class Stagione {
    id: string;
    denominazione: string;
    listaCampionati: Array<Campionato>;
    stagioneCorrente: string;
    format: string;
}
