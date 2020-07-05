import { Component, OnInit } from '@angular/core';
import { Stagione } from 'src/app/model/stagione';
import { Campionato } from 'src/app/model/campionato';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api/selectitem';
import { StagioneService } from 'src/app/services/stagione.service';
import { NuovoCampionatoCasualeComponent } from 'src/app/campionato/nuovo-campionato-casuale/nuovo-campionato-casuale.component';
import { StagioniDBService } from 'src/app/database/stagioni-db.service';

@Component({
  selector: 'app-nuova-stagione',
  templateUrl: './nuova-stagione.component.html',
  styleUrls: ['./nuova-stagione.component.css'],
})
export class NuovaStagioneComponent implements OnInit {
  stagione: Stagione;
  listaStagioni: SelectItem[];
  listaFormatStagione: SelectItem[];
  campionatiPronti: boolean[];

  constructor(
    private router: Router,
    private stagioneService: StagioneService,
    private stagioniDbService: StagioniDBService
  ) {
    this.stagione = new Stagione();
    this.campionatiPronti = [];
  }

  ngOnInit(): void {
    this.caricaStagioni();
    this.listaFormatStagione = this.stagioneService.caricaListaFormatStagioni();
  }

  caricaStagioni() {
    this.stagioniDbService.readAll().then((data) => {
      data.subscribe((listaIn) => {
        let listaDB = listaIn.map((e) => {
          return e.payload.doc.data() as any;
        });

        this.listaStagioni = listaDB[0].listaStagioni;
      });
    });
  }

  aggiungiCampionato() {
    this.campionatiPronti.push(false);

    if (!this.stagione.listaCampionati) {
      this.stagione.listaCampionati = [];
    }

    let campionato: Campionato = new Campionato();
    campionato.stagione = this.stagione.stagioneCorrente;
    campionato.singolo = false;
    campionato.tipologiaRisultati = 2;
    this.stagione.listaCampionati.push(campionato);
  }

  giocaStagione() {
    this.stagioneService.inizializzaStagione(this.stagione);

    let date = new Date();
    this.stagione.id =
      this.stagione.denominazione.trim() + '_' + date.getTime().toString();
    this.stagioneService.salvaStagione(this.stagione);
    this.router.navigate(['/gioca-stagione/' + this.stagione.id]);
  }

  checkGioca(): boolean {
    let check = false;

    if (this.campionatiPronti.length === 0) return true;

    for (let i = 0; i < this.campionatiPronti.length; i++) {
      if (this.campionatiPronti[i] === false) return true;
    }

    return check;
  }

  checkCampionatiPronti(campionato: Campionato, index: number) {
    this.campionatiPronti[index] = true;
    this.stagione.listaCampionati[index] = campionato;
  }

  eliminaCampionato(index: number) {
    this.campionatiPronti.splice(index, 1);
    this.stagione.listaCampionati.splice(index, 1);
  }

  preparaTemplate() {
    switch (this.stagione.format) {
      case '0':
        this.stagione.listaCampionati = [];
        break;
      case '1': {
        this.stagione.listaCampionati = [];

        let campionatoA = new Campionato();
        campionatoA.denominazioneLega = 'SERIE A';
        campionatoA.stagione = this.stagione.stagioneCorrente;
        campionatoA.tipologia = 0;
        campionatoA.tipologiaRisultati = 2;

        this.stagione.listaCampionati.push(campionatoA);

        let campionatoB = new Campionato();
        campionatoB.denominazioneLega = 'SERIE B';
        campionatoB.stagione = this.stagione.stagioneCorrente;
        campionatoB.tipologia = 1;
        campionatoB.tipologiaRisultati = 2;

        this.stagione.listaCampionati.push(campionatoB);

        let campionatoCA = new Campionato();
        campionatoCA.denominazioneLega = 'SERIE C - Girone A';
        campionatoCA.stagione = this.stagione.stagioneCorrente;
        campionatoCA.tipologia = 2;
        campionatoCA.tipologiaRisultati = 2;

        this.stagione.listaCampionati.push(campionatoCA);

        let campionatoCB = new Campionato();
        campionatoCB.denominazioneLega = 'SERIE C - Girone B';
        campionatoCB.stagione = this.stagione.stagioneCorrente;
        campionatoCB.tipologia = 2;
        campionatoCB.tipologiaRisultati = 2;

        this.stagione.listaCampionati.push(campionatoCB);
        break;
      }
      case '2':
        this.stagione.listaCampionati = [];
        break;
      case '3': {
        this.stagione.listaCampionati = [];

        let campionatoA = new Campionato();
        campionatoA.denominazioneLega = 'SERIE A';
        campionatoA.stagione = this.stagione.stagioneCorrente;
        campionatoA.tipologia = 0;
        campionatoA.tipologiaRisultati = 2;

        this.stagione.listaCampionati.push(campionatoA);

        let campionatoB = new Campionato();
        campionatoB.denominazioneLega = 'SERIE B';
        campionatoB.stagione = this.stagione.stagioneCorrente;
        campionatoB.tipologia = 1;
        campionatoB.tipologiaRisultati = 2;

        this.stagione.listaCampionati.push(campionatoB);

        let campionatoCA = new Campionato();
        campionatoCA.denominazioneLega = 'SERIE C - Girone A';
        campionatoCA.stagione = this.stagione.stagioneCorrente;
        campionatoCA.tipologia = 2;
        campionatoCA.tipologiaRisultati = 2;

        this.stagione.listaCampionati.push(campionatoCA);

        let campionatoCB = new Campionato();
        campionatoCB.denominazioneLega = 'SERIE C - Girone B';
        campionatoCB.stagione = this.stagione.stagioneCorrente;
        campionatoCB.tipologia = 2;
        campionatoCB.tipologiaRisultati = 2;

        this.stagione.listaCampionati.push(campionatoCB);

        let campionatoDA = new Campionato();
        campionatoDA.denominazioneLega = 'SERIE D - Girone A';
        campionatoDA.stagione = this.stagione.stagioneCorrente;
        campionatoDA.tipologia = 3;
        campionatoDA.tipologiaRisultati = 2;

        this.stagione.listaCampionati.push(campionatoDA);

        let campionatoDB = new Campionato();
        campionatoDB.denominazioneLega = 'SERIE D - Girone B';
        campionatoDB.stagione = this.stagione.stagioneCorrente;
        campionatoDB.tipologia = 3;
        campionatoDB.tipologiaRisultati = 2;

        this.stagione.listaCampionati.push(campionatoDB);

        let campionatoDC = new Campionato();
        campionatoDC.denominazioneLega = 'SERIE D - Girone C';
        campionatoDC.stagione = this.stagione.stagioneCorrente;
        campionatoDC.tipologia = 3;
        campionatoDC.tipologiaRisultati = 2;

        this.stagione.listaCampionati.push(campionatoDC);

        let campionatoDD = new Campionato();
        campionatoDD.denominazioneLega = 'SERIE D - Girone D';
        campionatoDD.stagione = this.stagione.stagioneCorrente;
        campionatoDD.tipologia = 3;
        campionatoDD.tipologiaRisultati = 2;

        this.stagione.listaCampionati.push(campionatoDD);
        break;
      }
    }
  }
}
