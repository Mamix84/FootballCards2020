import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { Subscription } from 'rxjs';
import { Evento } from 'src/app/model/campionato';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() buttonLabel: string;
  @Output() risultato = new EventEmitter<any>();
  xpos: number = 0;
  ypos: number = 0;
  x: number = 0;
  y: number = 0;
  start: boolean = false;
  subscription: Subscription;
  tipologiaImmediata: Subscription;
  evento: Evento;
  listaRisultatiPossibili: number[];

  constructor(private cardsService: CardsService) {
    this.listaRisultatiPossibili = [];

    this.subscription = cardsService.copriCarte$.subscribe((evento) => {
      this.evento = evento;
      this.start = false;
    });

    this.subscription = cardsService.giocaCarte$.subscribe((evento) => {
      this.evento = evento;
      this.start = true;
      this.gioca();
    });
  }

  ngOnInit(): void {}

  gioca() {
    this.listaRisultatiPossibili = this.cardsService.calcolaListaRisultatiPossibili(
      this.evento,
      this.buttonLabel
    );

    let xmin = Math.ceil(0);
    let xmax = Math.floor(this.listaRisultatiPossibili.length);
    let index = Math.floor(Math.random() * (xmax - xmin)) + xmin;
    let carta = this.listaRisultatiPossibili[index];

    this.xpos = carta * -211;

    let ymin = Math.ceil(0);
    let ymax = Math.floor(4);
    let seme = Math.floor(Math.random() * (ymax - ymin)) + ymin;
    this.ypos = seme * -361;

    this.start = true;

    this.risultato.emit(this.cardsService.trascodificaValoriCarte(carta));
  }
}
