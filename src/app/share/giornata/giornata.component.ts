import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Giornata, Evento } from 'src/app/model/campionato';
import { ClassificaService } from 'src/app/services/classifica.service';
import { Classifica } from 'src/app/model/classifica';
import { Team } from 'src/app/model/team';
import { Router } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-giornata',
  templateUrl: './giornata.component.html',
  styleUrls: ['./giornata.component.css'],
})
export class GiornataComponent implements OnInit, OnChanges {
  @Input() giornata: Giornata;
  @Input() classifica: Classifica;
  @Input() tipologiaRisultati: number;

  giornataCorrente: number;
  idEventoCorrente: number;
  eventoCorrent: Evento;

  @Output() aggiornaSalvataggio = new EventEmitter<any>();
  @Output() aggiornaClassificaEvent = new EventEmitter<any>();

  constructor(
    private cardService: CardsService,
  ) {
    this.giornata = new Giornata();
  }
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    if (this.giornata != undefined) {
      if (this.classifica != undefined) {
        this.giornataCorrente =
          this.giornata.girone === 'A'
            ? this.giornata.numeroGiornata
            : this.giornata.numeroGiornata +
              this.classifica.listaTeams.length -
              1;
      }
    } else {
      this.giornata = new Giornata();
    }
  }

  ngOnInit(): void {
  }

  inviaRisultatoCasa(risultato: number) {
    for (let i = 0; i < this.giornata.listaEventi.length; i++) {
      if (this.idEventoCorrente === this.giornata.listaEventi[i].id) {
        if (this.giornata.listaEventi[i].goalC != null) {
          return;
        } else {
          this.giornata.listaEventi[i].goalC = risultato;
        }
      }
    }

    this.checkGiornataCompleta();
  }

  inviaRisultatoFuoriCasa(risultato: number) {
    for (let i = 0; i < this.giornata.listaEventi.length; i++) {
      if (this.idEventoCorrente === this.giornata.listaEventi[i].id) {
        if (this.giornata.listaEventi[i].goalFC != null) {
          return;
        } else {
          this.giornata.listaEventi[i].goalFC = risultato;
        }
      }
    }

    this.checkGiornataCompleta();
  }

  eventoCorrente(idEvento: number) {
    this.idEventoCorrente = idEvento;

    if (this.tipologiaRisultati === 1) {
      for (let i = 0; i < this.giornata.listaEventi.length; i++) {
        if (this.idEventoCorrente === this.giornata.listaEventi[i].id) {
          this.eventoCorrent = this.giornata.listaEventi[i];
          this.cardService.giocaCarteImmediata(this.giornata.listaEventi[i]);
        }
      }

      this.checkGiornataCompleta();
    }

    if (this.tipologiaRisultati === 0) {
      for (let i = 0; i < this.giornata.listaEventi.length; i++) {
        let listaRisulatiC = this.cardService.calcolaListaRisultatiPossibili(
          this.giornata.listaEventi[i],
          'CASA'
        );
        let xmin = Math.ceil(0);
        let xmax = Math.floor(listaRisulatiC.length);
        let index = Math.floor(Math.random() * (xmax - xmin)) + xmin;
        let carta = listaRisulatiC[index];
        this.giornata.listaEventi[
          i
        ].goalC = this.cardService.trascodificaValoriCarte(carta);

        let listaRisulatiFC = this.cardService.calcolaListaRisultatiPossibili(
          this.giornata.listaEventi[i],
          'FUORI CASA'
        );
        xmax = Math.floor(listaRisulatiFC.length);
        index = Math.floor(Math.random() * (xmax - xmin)) + xmin;
        carta = listaRisulatiFC[index];
        this.giornata.listaEventi[
          i
        ].goalFC = this.cardService.trascodificaValoriCarte(carta);
      }

      this.checkGiornataCompleta();
    }
  }

  checkGiornataCompleta() {
    let completa: boolean = true;
    for (let i = 0; i < this.giornata.listaEventi.length; i++) {
      if (this.giornata.listaEventi[i].goalC == null) {
        completa = false;
      }
      if (this.giornata.listaEventi[i].goalFC == null) {
        completa = false;
      }
    }

    if (completa) {
      this.aggiornaClassifica();
    }
  }

  aggiornaClassifica() {
    this.aggiornaClassificaEvent.emit(null);
    this.aggiornaSalvataggio.emit(null);
  }

}
