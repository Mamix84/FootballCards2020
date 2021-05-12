import { Component, OnInit } from '@angular/core';
import { Campionato } from 'src/app/model/campionato';
import { SelectItem } from 'primeng/api/selectitem';
import { Team } from 'src/app/model/team';
import { CampionatoService } from 'src/app/services/campionato.service';
import { TeamsService } from 'src/app/services/teams.service';
import { Router } from '@angular/router';
import { StagioniDBService } from 'src/app/database/stagioni-db.service';
import { TorneiDBService } from 'src/app/database/tornei-db.service';
import {
  TipologiaTorneo,
  NumeroTeams,
  FormatDominio,
} from 'src/app/model/dominio';
import { NumeroTeamsDbService } from 'src/app/database/numero-teams-db.service';
import { FormatDbService } from 'src/app/database/format-db.service';

@Component({
  selector: 'app-nuovo-campionato-casuale',
  templateUrl: './nuovo-campionato-casuale.component.html',
  styleUrls: ['./nuovo-campionato-casuale.component.css'],
})
export class NuovoCampionatoCasualeComponent implements OnInit {
  campionato: Campionato;
  stagioni: SelectItem[];
  listaTeams: SelectItem[];
  listaTeamsDaSelezionare: Array<Team>;
  listaTipologieTorneo: SelectItem[];

  constructor(
    private campionatoService: CampionatoService,
    private teamsService: TeamsService,
    private router: Router,
    private stagioniDbService: StagioniDBService,
    private torneiDbService: TorneiDBService,
    private numeroTeamsDbService: NumeroTeamsDbService,
    private formatDbService: FormatDbService
  ) {
    this.listaTeams = teamsService.caricaListaTeamItems();
    this.campionato = new Campionato();
    this.campionato.listaTeams = new Array<Team>();
  }

  ngOnInit(): void {
    this.preparaCampionato();
  }

  preparaListaTeams() {
    this.listaTeamsDaSelezionare = new Array<Team>();
    for (let i = 0; i < this.campionato.numeroTeams; i++) {
      this.listaTeamsDaSelezionare[i] = new Team();
    }
  }

  aggiungiSquadra(event) {
    let index = event.value.id;
    if (
      index >= 0 &&
      !this.campionato.listaTeams.includes(this.listaTeams[index + 1].value)
    ) {
      this.campionato.listaTeams.push(this.listaTeams[index].value);
    }
  }

  preparaCampionato() {
    this.caricaStagioni();
    this.caricaTipologieTorneo();

    //DESCRIZIONE
    let descrzione = [
      'LEGA SERIE A',
      'LEGA SERIE B',
      'LEGA PRO',
      'SERIE C',
      'CAMPIONATO DILETTANTI',
      'TORNEO ESTIVO',
    ];
    let xmin = Math.ceil(0);
    let xmax = Math.floor(5);
    this.campionato.denominazioneLega =
      descrzione[Math.floor(Math.random() * (xmax - xmin)) + xmin];
  }

  caricaStagioni() {
    this.stagioniDbService.readAll().then((data) => {
      data.subscribe((listaIn) => {
        let listaDB = listaIn.map((e) => {
          return e.payload.doc.data() as any;
        });

        this.stagioni = listaDB[0].listaStagioni;

        //STAGIONE
        let xmin = Math.ceil(1);
        let xmax = Math.floor(this.stagioni.length);
        this.campionato.stagione = this.stagioni[
          Math.floor(Math.random() * (xmax - xmin)) + xmin
        ].value;
      });
    });
  }

  caricaTipologieTorneo() {
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

        this.listaTipologieTorneo = listaOrdinata;

        //TIPOLOGIA
        let xmin = Math.ceil(0);
        let xmax = Math.floor(this.listaTipologieTorneo.length);
        let tipologia = Math.floor(Math.random() * (xmax - xmin)) + xmin;
        this.campionato.tipologia = this.listaTipologieTorneo[tipologia].value;
        this.campionato.descrizioneTipologia = this.listaTipologieTorneo[
          tipologia
        ].label;

        //NUMERO SQUADRE
        this.caricaNumeroSquadre(this.campionato.tipologia);
      });
    });
  }

  caricaNumeroSquadre(tipologiaTorneo: number) {
    this.numeroTeamsDbService
      .readAllByTipologiaTorneo(tipologiaTorneo)
      .then((data) => {
        data.subscribe((listaIn) => {
          let listaDB = listaIn.map((e) => {
            let numero = e.payload.doc.data() as NumeroTeams;
            return {
              label: numero.etichetta,
              value: numero.valore,
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

          let numeroSquadre = listaOrdinata;

          //NUMERO SQUADRE
          let xmin = Math.ceil(0);
          let xmax = Math.floor(numeroSquadre.length);
          this.campionato.numeroTeams =
            numeroSquadre[
              Math.floor(Math.random() * (xmax - xmin)) + xmin
            ].value;

          //FORMAT
          this.formatDbService
            .readAllByFilters(
              this.campionato.tipologia,
              this.campionato.numeroTeams + ''
            )
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

                xmin = Math.ceil(0);
                xmax = Math.floor(listaFormat.length);
                this.campionato.format =
                  listaFormat[
                    Math.floor(Math.random() * (xmax - xmin)) + xmin
                  ].value;

                //SQUADRE
                for (let i = 0; i < this.campionato.numeroTeams; i++) {
                  xmin = Math.ceil(0);
                  xmax = Math.floor(this.listaTeams.length);
                  let teamIndex =
                    Math.floor(Math.random() * (xmax - xmin)) + xmin;
                  this.campionato.listaTeams.push(
                    this.listaTeams[teamIndex].value
                  );
                  this.listaTeams.splice(teamIndex, 1);
                }

                this.campionato.singolo = true;
                this.campionato.giornataCorrente = 0;
                this.campionato.tipologiaRisultati = 0;

                this.campionato.listaGiornate = this.campionatoService.generaCalendario(
                  this.campionato,
                  this.campionato.listaTeams
                );

                let date = new Date();
                this.campionato.id =
                  this.campionato.denominazioneLega.trim() +
                  '_' +
                  date.getTime().toString();

                if (this.campionato.singolo === true) {
                  this.campionatoService.salvaCampionato(this.campionato);
                }
                this.router.navigate([
                  '/gioca-campionato/' + this.campionato.id,
                ]);
              });
            });
        });
      });
  }
}
