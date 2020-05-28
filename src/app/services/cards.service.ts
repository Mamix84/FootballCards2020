import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Evento } from '../model/campionato';
import prob_rapp_tecnico from '../../assets/json/prob_rapp_tecnico.json';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private copriCarte = new Subject<Evento>();
  copriCarte$ = this.copriCarte.asObservable();

  private giocaCarte = new Subject<Evento>();
  giocaCarte$ = this.giocaCarte.asObservable();

  constructor() {}

  prossimaGiocata(evento: Evento) {
    this.copriCarte.next(evento);
  }

  giocaCarteImmediata(evento: Evento) {
    this.giocaCarte.next(evento);
  }

  trascodificaValoriCarte(carta: number): number{
    let valore = 0;

    switch (carta) {
      case 0:
        valore = 1;
        break;
      case 1:
        valore = 2;
        break;
      case 2:
        valore = 3;
        break;
      case 3:
        valore = 4;
        break;
      case 4:
        valore = 5;
        break;
      case 5:
        valore = 6;
        break;
      case 6:
        valore = 7;
        break;
      case 7:
        valore = 0;
        break;
      case 8:
        valore = 0;
        break;
      case 9:
        valore = 0;
        break;
    }

    return valore;
  }

  calcolaListaRisultatiPossibili(evento: Evento, buttonLabel: string) {
    let listaRisultatiPossibili = [];

    if (buttonLabel === 'CASA') {
      let rapportoTecnico =
        evento.teamC.valoreTecnico / evento.teamFC.valoreTecnico;
      let fattoreCasa = 1.05;
      rapportoTecnico = rapportoTecnico * fattoreCasa;

      let listaProbCasa = prob_rapp_tecnico.CASA;

      if (rapportoTecnico <= 0.85) {
        listaRisultatiPossibili = this.generaListaRisultati('0', listaProbCasa);
      } else if (rapportoTecnico > 0.85 && rapportoTecnico <= 0.95) {
        listaRisultatiPossibili = this.generaListaRisultati('1', listaProbCasa);
      } else if (rapportoTecnico > 0.95 && rapportoTecnico <= 1.15) {
        listaRisultatiPossibili = this.generaListaRisultati('2', listaProbCasa);
      } else if (rapportoTecnico > 1.15 && rapportoTecnico <= 1.3) {
        listaRisultatiPossibili = this.generaListaRisultati('3', listaProbCasa);
      } else if (rapportoTecnico > 1.3 && rapportoTecnico <= 1.5) {
        listaRisultatiPossibili = this.generaListaRisultati('4', listaProbCasa);
      } else if (rapportoTecnico > 1.5 && rapportoTecnico <= 5.0) {
        listaRisultatiPossibili = this.generaListaRisultati('5', listaProbCasa);
      } else if (rapportoTecnico > 5.0) {
        listaRisultatiPossibili = this.generaListaRisultati('6', listaProbCasa);
      }
    } else if (buttonLabel === 'FUORI CASA') {
      let rapportoTecnico =
        evento.teamFC.valoreTecnico / evento.teamC.valoreTecnico;
      let fattoreTrasferta = 0.95;
      rapportoTecnico = rapportoTecnico * fattoreTrasferta;

      let listaProbTrasferta = prob_rapp_tecnico.TRASFERTA;

      if (rapportoTecnico <= 0.78) {
        listaRisultatiPossibili = this.generaListaRisultati(
          '0',
          listaProbTrasferta
        );
      } else if (rapportoTecnico > 0.78 && rapportoTecnico <= 0.86) {
        listaRisultatiPossibili = this.generaListaRisultati(
          '1',
          listaProbTrasferta
        );
      } else if (rapportoTecnico > 0.86 && rapportoTecnico <= 1.02) {
        listaRisultatiPossibili = this.generaListaRisultati(
          '2',
          listaProbTrasferta
        );
      } else if (rapportoTecnico > 1.02 && rapportoTecnico <= 1.15) {
        listaRisultatiPossibili = this.generaListaRisultati(
          '3',
          listaProbTrasferta
        );
      } else if (rapportoTecnico > 1.15 && rapportoTecnico <= 1.5) {
        listaRisultatiPossibili = this.generaListaRisultati(
          '4',
          listaProbTrasferta
        );
      } else if (rapportoTecnico > 1.5 && rapportoTecnico <= 5.0) {
        listaRisultatiPossibili = this.generaListaRisultati(
          '5',
          listaProbTrasferta
        );
      } else if (rapportoTecnico > 5.0) {
        listaRisultatiPossibili = this.generaListaRisultati(
          '6',
          listaProbTrasferta
        );
      }
    }

    return listaRisultatiPossibili;
  }

  generaListaRisultati(fascia: string, probabilita: any[]): number[] {
    let risultati = [];

    for (let i = 0; i < probabilita.length; i++) {
      for (let j = 0; j < probabilita[i].valori.length; j++) {
        if (probabilita[i].indice === fascia) {
          for (let k = 0; k < probabilita[i].valori[j]; k++) {
            risultati.push(j);
          }
        }
      }
    }

    return risultati;
  }
}
