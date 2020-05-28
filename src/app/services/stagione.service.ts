import { Injectable } from '@angular/core';
import lista_stagioni from '../../assets/json/lista_stagioni.json';
import { SelectItem } from 'primeng/api/selectitem';
import { Stagione } from '../model/stagione';
import { StorageService } from './storage.service';
import { SalvataggioStagione } from '../model/files';
import lista_format from '../../assets/json/lista_format.json';

@Injectable({
  providedIn: 'root',
})
export class StagioneService {
  stagione: Stagione;

  constructor(private storageService: StorageService) {}

  inizializzaStagione(stagione: Stagione) {
    this.stagione = stagione;
  }

  caricaListaStagioni(): SelectItem[] {
    let listaStagioni = lista_stagioni.listaStagioni;

    return listaStagioni;
  }

  caricaStagione(idStagione: string): Stagione {
    this.stagione = JSON.parse(this.storageService.get(idStagione));

    return this.stagione;
  }

  salvaStagione(stagione: Stagione) {
    if (this.storageService.get(stagione.id) === null) {
      //Primo salvataggio
      let listaSalvataggi: Array<SalvataggioStagione> = JSON.parse(
        this.storageService.get('salvataggi-stagione')
      );

      if (listaSalvataggi === null) {
        //Primo salvataggio
        let salvataggio = new SalvataggioStagione();
        salvataggio.idStagione = stagione.id;
        salvataggio.descrizione = stagione.denominazione;
        salvataggio.numeroCampionati = stagione.listaCampionati.length;
        salvataggio.stagione = stagione.stagioneCorrente;
        salvataggio.dataCreazione = new Date();
        salvataggio.dataUltimoSalvataggio = new Date();

        listaSalvataggi = new Array<SalvataggioStagione>();
        listaSalvataggi.push(salvataggio);

        this.storageService.set(
          'salvataggi-stagione',
          JSON.stringify(listaSalvataggi)
        );
      } else {
        //Salvataggi successivi

        let aggiornato = false;
        for (let i = 0; i < listaSalvataggi.length; i++) {
          if (listaSalvataggi[i].idStagione === stagione.id) {
            listaSalvataggi[i].dataUltimoSalvataggio = new Date();
            aggiornato = true;
          }
        }

        if (aggiornato === false) {
          let salvataggio = new SalvataggioStagione();
          salvataggio.idStagione = stagione.id;
          salvataggio.descrizione = stagione.denominazione;
          salvataggio.numeroCampionati = stagione.listaCampionati.length;
          salvataggio.stagione = stagione.stagioneCorrente;
          salvataggio.dataCreazione = new Date();
          salvataggio.dataUltimoSalvataggio = new Date();

          listaSalvataggi.push(salvataggio);
        }

        this.storageService.remove('salvataggi-stagione');
        this.storageService.set(
          'salvataggi-stagione',
          JSON.stringify(listaSalvataggi)
        );
      }

      this.storageService.set(this.stagione.id, JSON.stringify(this.stagione));
    } else {
      //Aggiornameto
      this.storageService.remove(stagione.id);

      this.storageService.set(this.stagione.id, JSON.stringify(this.stagione));
    }
  }

  caricaSalvataggi(): Array<SalvataggioStagione> {
    return JSON.parse(this.storageService.get('salvataggi-stagione'));
  }

  eliminaStagione(idStagione: string) {
    this.storageService.remove(idStagione);

    let listaSalvataggi: Array<SalvataggioStagione> = JSON.parse(
      this.storageService.get('salvataggi-stagione')
    );

    for (let i = 0; i < listaSalvataggi.length; i++) {
      if (listaSalvataggi[i].idStagione === idStagione) {
        listaSalvataggi.splice(i, 1);
      }
    }

    this.storageService.remove('salvataggi-stagione');
    this.storageService.set(
      'salvataggi-stagione',
      JSON.stringify(listaSalvataggi)
    );
  }

  caricaListaFormatStagioni(): SelectItem[]{
    let listaFormat = lista_format.listaFormat;

    return listaFormat;
  }
}
