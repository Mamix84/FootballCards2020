import { Injectable } from '@angular/core';
import { Giornata } from '../model/campionato';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GiornataService {
  private giornataCorrente = new Subject<Giornata>();
  giornataCorrente$ = this.giornataCorrente.asObservable();
  giornata: Giornata;

  private eventoCompleto = new Subject<boolean>();
  eventoCompleto$ = this.eventoCompleto.asObservable();

  constructor() {}

  caricaGiornataCorrente(giornata: Giornata) {
    this.giornata = giornata;
    this.giornataCorrente.next(giornata);
  }

  bloccaEvento() {
    this.eventoCompleto.next(true);
  }
}
