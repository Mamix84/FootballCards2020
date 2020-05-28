import { Component, OnInit } from '@angular/core';
import { Stagione } from 'src/app/model/stagione';
import { Campionato } from 'src/app/model/campionato';
import { SelectItem } from 'primeng/api/selectitem';
import { Team } from 'src/app/model/team';
import { CampionatoService } from 'src/app/services/campionato.service';
import { TeamsService } from 'src/app/services/teams.service';
import { Router } from '@angular/router';
import { StagioneService } from 'src/app/services/stagione.service';

@Component({
  selector: 'app-nuova-stagione-casuale',
  templateUrl: './nuova-stagione-casuale.component.html',
  styleUrls: ['./nuova-stagione-casuale.component.css'],
})
export class NuovaStagioneCasualeComponent implements OnInit {
  stagione: Stagione;
  stagioni: SelectItem[];
  numeroSquadre: SelectItem[];
  listaTeams: SelectItem[];
  listaTeamsDaSelezionare: Array<Team>;
  listaTipologieTorneo: SelectItem[];

  constructor(
    private campionatoService: CampionatoService,
    private stagioneService: StagioneService,
    private teamsService: TeamsService,
    private router: Router
  ) {
    this.stagioni = campionatoService.caricaStagioni();
    this.listaTipologieTorneo = campionatoService.caricaTipologieTorneo();
    this.listaTeams = teamsService.caricaListaTeamItems();
    this.stagione = new Stagione();
    this.stagione.listaCampionati = [];
  }

  ngOnInit(): void {
    this.preparaStagione();
  }

  preparaStagione() {
    let xmin = Math.ceil(1);
    let xmax = Math.floor(3);
    let numeroCampionati = Math.floor(Math.random() * (xmax - xmin)) + xmin;

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

    for (let i = 0; i < numeroCampionati; i++) {
      let campionato = new Campionato();
      campionato.singolo = false;
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

      //TIPOLOGIA
      xmin = Math.ceil(0);
      xmax = Math.floor(this.listaTipologieTorneo.length);
      let tipologia = Math.floor(Math.random() * (xmax - xmin)) + xmin;
      campionato.tipologia = this.listaTipologieTorneo[tipologia].value;
      campionato.descrizioneTipologia = this.listaTipologieTorneo[
        tipologia
      ].label;

      //STAGIONE
      xmin = Math.ceil(0);
      xmax = Math.floor(this.stagioni.length);
      campionato.stagione = this.stagioni[
        Math.floor(Math.random() * (xmax - xmin)) + xmin
      ].value;

      //NUMERO SQUADRE
      this.numeroSquadre = this.campionatoService.caricaNumeroSquadre(
        tipologia
      );
      xmin = Math.ceil(0);
      xmax = Math.floor(this.numeroSquadre.length);
      campionato.numeroTeams = this.numeroSquadre[
        Math.floor(Math.random() * (xmax - xmin)) + xmin
      ].value;

      //FORMAT
      let listaFormat = this.campionatoService.caricaFormatCampionato(
        tipologia,
        campionato.numeroTeams + ''
      );
      xmin = Math.ceil(0);
      xmax = Math.floor(listaFormat.length);
      campionato.format =
        listaFormat[Math.floor(Math.random() * (xmax - xmin)) + xmin].value;

      //SQUADRE
      for (let i = 0; i < campionato.numeroTeams; i++) {
        xmin = Math.ceil(0);
        xmax = Math.floor(this.listaTeams.length);
        let teamIndex = Math.floor(Math.random() * (xmax - xmin)) + xmin;
        campionato.listaTeams.push(this.listaTeams[teamIndex].value);
        this.listaTeams.splice(teamIndex, 1);
      }

      campionato.listaGiornate = this.campionatoService.generaCalendario(
        campionato,
        campionato.listaTeams
      );

      let date = new Date();
      campionato.id =
        campionato.denominazioneLega.trim() + '_' + date.getTime().toString();

      this.stagione.listaCampionati.push(campionato);
    }

    this.stagioneService.inizializzaStagione(this.stagione);

    let date = new Date();
    this.stagione.id =
      this.stagione.denominazione.trim() + '_' + date.getTime().toString();
    this.stagioneService.salvaStagione(this.stagione);
    this.router.navigate(['/gioca-stagione/' + this.stagione.id]);
  }
}
