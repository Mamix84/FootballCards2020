import { Component, OnInit } from '@angular/core';
import { Stagione } from 'src/app/model/stagione';
import { Campionato } from 'src/app/model/campionato';
import { SelectItem } from 'primeng/api/selectitem';
import { Team } from 'src/app/model/team';
import { CampionatoService } from 'src/app/services/campionato.service';
import { TeamsService } from 'src/app/services/teams.service';
import { Router } from '@angular/router';
import { StagioneService } from 'src/app/services/stagione.service';
import { StagioniDBService } from 'src/app/database/stagioni-db.service';
import { NumeroTeamsDbService } from 'src/app/database/numero-teams-db.service';
import {
  FormatDominio,
  NumeroTeams,
  TipologiaTorneo,
} from 'src/app/model/dominio';
import { FormatDbService } from 'src/app/database/format-db.service';
import { TorneiDBService } from 'src/app/database/tornei-db.service';

@Component({
  selector: 'app-nuova-stagione-casuale',
  templateUrl: './nuova-stagione-casuale.component.html',
  styleUrls: ['./nuova-stagione-casuale.component.css'],
})
export class NuovaStagioneCasualeComponent implements OnInit {
  stagione: Stagione;
  stagioni: SelectItem[];
  listaTeams: SelectItem[];
  numeroCampionati: number;

  constructor(
    private campionatoService: CampionatoService,
    private stagioneService: StagioneService,
    private teamsService: TeamsService,
    private router: Router,
    private stagioniDbService: StagioniDBService,
    private numeroTeamsDbService: NumeroTeamsDbService,
    private formatDbService: FormatDbService,
    private torneiDbService: TorneiDBService
  ) {
    this.listaTeams = teamsService.caricaListaTeamItems();
    this.stagione = new Stagione();
    this.stagione.listaCampionati = [];
  }

  ngOnInit(): void {
    this.preparaStagione();
  }

  preparaStagione() {
    this.stagioniDbService.readAll().then((data) => {
      data.subscribe((listaIn) => {
        let listaDB = listaIn.map((e) => {
          return e.payload.doc.data() as any;
        });

        this.stagioni = listaDB[0].listaStagioni;

        let xmin = Math.ceil(2);
        let xmax = Math.floor(4);
        this.numeroCampionati = Math.floor(Math.random() * (xmax - xmin)) + xmin;

        //DESCRIZIONE STAGIONE
        let descrzione = [
          'LEGA SUPER',
          'SUPER CAMPIONATO',
          'TORNEO DEI CAMPIONI',
          'SCAPOLI CONTRO AMMOGLIATI',
          'TORNEO DILETTANTI',
          'TORNEO ESTIVO',
        ];
        xmin = Math.ceil(0);
        xmax = Math.floor(5);
        this.stagione.denominazione =
          descrzione[Math.floor(Math.random() * (xmax - xmin)) + xmin];

        //STAGIONE
        xmin = Math.ceil(0);
        xmax = Math.floor(this.stagioni.length);
        this.stagione.stagioneCorrente = this.stagioni[
          Math.floor(Math.random() * (xmax - xmin)) + xmin
        ].value;

        //FORMAT
        this.stagione.format = '0';

        for (let i = 0; i < this.numeroCampionati; i++) {
          let campionato = new Campionato();
          campionato.singolo = false;
          campionato.tipologiaRisultati = 0;
          campionato.giornataCorrente = 0;
          campionato.stagione = this.stagione.stagioneCorrente;
          campionato.listaTeams = new Array<Team>();

          //DESCRIZIONE
          let descrzione = [
            'LEGA SERIE A',
            'LEGA SERIE B',
            'LEGA PRO',
            'SERIE C',
            'CAMPIONATO DILETTANTI',
            'TORNEO ESTIVO',
          ];
          xmin = Math.ceil(0);
          xmax = Math.floor(5);
          campionato.denominazioneLega =
            descrzione[Math.floor(Math.random() * (xmax - xmin)) + xmin];

          this.caricaTipologieTorneo(campionato);
        }
      });
    });
  }

  caricaTipologieTorneo(campionato: Campionato) {
    this.torneiDbService.readAll().then((data) => {
      data.subscribe((listaIn) => {
        let listaDB = listaIn.map((e) => {
          let torneo = e.payload.doc.data() as TipologiaTorneo;
          return {
            label: torneo.etichetta,
            value: torneo.valore,
          } as SelectItem;
        });

        var listaOrdinata: SelectItem[] = listaDB.sort((obj1, obj2) => {
          if (obj1.value === null) {
            return -1;
          }

          if (obj2.value === null) {
            return 1;
          }

          if (obj1.value < obj2.value) {
            return -1;
          } else if (obj1.value > obj2.value) {
            return 1;
          } else return 0;
        });

        let listaTipologieTorneo = listaOrdinata;

        //TIPOLOGIA
        let xmin = Math.ceil(0);
        let xmax = Math.floor(listaTipologieTorneo.length);
        let tipologia = Math.floor(Math.random() * (xmax - xmin)) + xmin;
        campionato.tipologia = listaTipologieTorneo[tipologia].value;
        campionato.descrizioneTipologia = listaTipologieTorneo[tipologia].label;

        //NUMERO SQUADRE
        this.caricaNumeroSquadre(campionato);
      });
    });
  }

  caricaNumeroSquadre(campionato: Campionato) {
    this.numeroTeamsDbService
      .readAllByTipologiaTorneo(campionato.tipologia)
      .then((data) => {
        data.subscribe((listaIn) => {
          let listaDB = listaIn.map((e) => {
            let numero = e.payload.doc.data() as NumeroTeams;
            return {
              label: numero.etichetta,
              value: numero.valore,
            } as SelectItem;
          });

          let numeroSquadre = listaDB;

          //NUMERO SQUADRE
          let xmin = Math.ceil(0);
          let xmax = Math.floor(numeroSquadre.length);
          campionato.numeroTeams =
            numeroSquadre[
              Math.floor(Math.random() * (xmax - xmin)) + xmin
            ].value;

          //FORMAT
          this.formatDbService
            .readAllByFilters(campionato.tipologia, campionato.numeroTeams + '')
            .then((data) => {
              data.subscribe((listaIn) => {
                let listaDB = listaIn.map((e) => {
                  let format = e.payload.doc.data() as FormatDominio;
                  return {
                    label: format.label,
                    value: {
                      tipologiaTorneo: format.tipologiaTorneo,
                      numeroTeams: format.numeroTeams,
                      champions: format.champions,
                      europa: format.europa,
                      intertoto: format.intertoto,
                      promozione: format.promozione,
                      retrocessione: format.retrocessione,
                      playoff: format.playoff,
                      playout: format.playout,
                    },
                  } as SelectItem;
                });

                let listaFormat = listaDB;

                if(listaFormat.length === 0)
                return;

                xmin = Math.ceil(0);
                xmax = Math.floor(listaFormat.length);
                console.log(listaFormat.length+' '+xmin+' '+xmax);
                campionato.format =
                  listaFormat[
                    Math.floor(Math.random() * (xmax - xmin)) + xmin
                  ].value;

                //SQUADRE
                for (let i = 0; i < campionato.numeroTeams; i++) {
                  xmin = Math.ceil(0);
                  xmax = Math.floor(this.listaTeams.length);
                  let teamIndex =
                    Math.floor(Math.random() * (xmax - xmin)) + xmin;
                  campionato.listaTeams.push(this.listaTeams[teamIndex].value);
                  this.listaTeams.splice(teamIndex, 1);
                }

                campionato.singolo = true;
                campionato.giornataCorrente = 0;
                campionato.tipologiaRisultati = 0;

                campionato.listaGiornate = this.campionatoService.generaCalendario(
                  campionato,
                  campionato.listaTeams
                );

                let date = new Date();
                campionato.id =
                  campionato.denominazioneLega.trim() +
                  '_' +
                  date.getTime().toString();

                this.stagione.listaCampionati.push(campionato);

                if(this.numeroCampionati === this.stagione.listaCampionati.length){
                  this.stagioneService.inizializzaStagione(this.stagione);

                  let date = new Date();
                  this.stagione.id =
                    this.stagione.denominazione.trim() + '_' + date.getTime().toString();
                  this.stagioneService.salvaStagione(this.stagione);
                  this.router.navigate(['/gioca-stagione/' + this.stagione.id]);
                }
              });
            });
        });
      });
  }
}
