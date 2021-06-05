import { Component, OnInit } from '@angular/core';
import { Stagione } from 'src/app/model/stagione';
import { ActivatedRoute, Router } from '@angular/router';
import { StagioneService } from 'src/app/services/stagione.service';
import { Team } from 'src/app/model/team';

@Component({
  selector: 'app-prepara-stagione',
  templateUrl: './prepara-stagione.component.html',
  styleUrls: ['./prepara-stagione.component.css'],
})
export class PreparaStagioneComponent implements OnInit {
  stagione: Stagione;
  checkProsegui: boolean = true;
  countCampionati: number = 0;
  listaPromosse: Array<Team[]>;
  listaRetrocesse: Array<Team[]>;

  constructor(
    private route: ActivatedRoute,
    private stagioneService: StagioneService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.stagione = this.stagioneService.caricaStagione(id);

    this.listaPromosse = [];
    this.listaRetrocesse = [];

    for (let i = 0; i < this.stagione.listaCampionati.length; i++) {
      this.listaPromosse.push(new Array<Team>());
      this.listaRetrocesse.push(new Array<Team>());
    }

    if (
      this.stagione.format === '0' &&
      this.stagione.listaCampionati.length > 1
    ) {
      for (let i = 0; i < this.stagione.listaCampionati.length; i++) {
        if (i == 0) {
          this.listaRetrocesse[i] = [];
          this.listaPromosse[i] = this.stagione.listaCampionati[
            i + 1
          ].classifica.listaPromosse;
        } else if (i > 0 && i < this.stagione.listaCampionati.length - 1) {
          this.listaRetrocesse[i] = this.stagione.listaCampionati[
            i - 1
          ].classifica.listaRetrocesse;
          this.listaPromosse[i] = this.stagione.listaCampionati[
            i + 1
          ].classifica.listaPromosse;
        } else {
          this.listaRetrocesse[i] = this.stagione.listaCampionati[
            i - 1
          ].classifica.listaRetrocesse;
          this.listaPromosse[i] = [];
        }
      }
    } else if (this.stagione.format === '1') {
      //SERIE A
      this.listaRetrocesse[0] = [];
      this.listaPromosse[0] = this.stagione.listaCampionati[1].classifica.listaPromosse;

      //SERIE B
      this.listaRetrocesse[1] = this.stagione.listaCampionati[0].classifica.listaRetrocesse;
      this.listaPromosse[1] = this.stagione.listaCampionati[2].classifica.listaPromosse.concat(
        this.stagione.listaCampionati[3].classifica.listaPromosse
      );

      //SERIE CA
      this.listaRetrocesse[2] = this.stagione.listaCampionati[1].classifica.listaRetrocesse.slice(
        0,
        2
      );
      this.listaPromosse[2] = [];

      //SERIE CB
      this.listaRetrocesse[3] = this.stagione.listaCampionati[1].classifica.listaRetrocesse.slice(
        2,
        4
      );
      this.listaPromosse[3] = [];
    } else if (this.stagione.format === '2') {
      for (let i = 0; i < this.stagione.listaCampionati.length; i++) {
        this.listaPromosse[i] = [];
        this.listaRetrocesse[i] = [];
      }
    } else if (this.stagione.format === '3') {
      //SERIE A
      this.listaRetrocesse[0] = [];
      this.listaPromosse[0] = this.stagione.listaCampionati[1].classifica.listaPromosse;

      //SERIE B
      this.listaRetrocesse[1] = this.stagione.listaCampionati[0].classifica.listaRetrocesse;
      this.listaPromosse[1] = this.stagione.listaCampionati[2].classifica.listaPromosse.concat(
        this.stagione.listaCampionati[3].classifica.listaPromosse
      );

      //SERIE CA
      this.listaRetrocesse[2] = this.stagione.listaCampionati[1].classifica.listaRetrocesse.slice(
        0,
        2
      );
      this.listaPromosse[2] = this.stagione.listaCampionati[4].classifica.listaPromosse.concat(
        this.stagione.listaCampionati[5].classifica.listaPromosse
      );

      //SERIE CB
      this.listaRetrocesse[3] = this.stagione.listaCampionati[1].classifica.listaRetrocesse.slice(
        2,
        4
      );
      this.listaPromosse[3] = this.stagione.listaCampionati[6].classifica.listaPromosse.concat(
        this.stagione.listaCampionati[7].classifica.listaPromosse
      );

      //SERIE DA
      this.listaRetrocesse[4] = this.stagione.listaCampionati[2].classifica.listaRetrocesse.slice(
        0,
        2
      );
      this.listaPromosse[4] = [];

      //SERIE DB
      this.listaRetrocesse[5] = this.stagione.listaCampionati[2].classifica.listaRetrocesse.slice(
        2,
        4
      );
      this.listaPromosse[5] = [];

      //SERIE DC
      this.listaRetrocesse[6] = this.stagione.listaCampionati[3].classifica.listaRetrocesse.slice(
        0,
        2
      );
      this.listaPromosse[6] = [];

      //SERIE DD
      this.listaRetrocesse[7] = this.stagione.listaCampionati[3].classifica.listaRetrocesse.slice(
        2,
        4
      );
      this.listaPromosse[7] = [];
    }
  }

  checkStagionePronta() {
    this.countCampionati++;
    if (this.countCampionati === this.stagione.listaCampionati.length) {
      this.checkProsegui = false;
    }
  }

  proseguiStagione() {
    this.stagioneService.inizializzaStagione(this.stagione);

    //Avanzamento stagione
    let stagione = this.stagione.stagioneCorrente;
    let annoPartenza = stagione.slice(0, 4);
    let annoFine = stagione.slice(5, 9);
    stagione = parseInt(annoPartenza) + 1 + '/' + (parseInt(annoFine) + 1);
    this.stagione.stagioneCorrente = stagione;

    let date = new Date();
    this.stagione.id =
      this.stagione.denominazione.trim() + '_' + date.getTime().toString();
    this.stagioneService.salvaStagione(this.stagione);
    this.router.navigate(['/gioca-stagione/' + this.stagione.id]);
  }
}
