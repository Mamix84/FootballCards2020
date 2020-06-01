import { Component, OnInit } from '@angular/core';
import { Campionato } from 'src/app/model/campionato';
import { SelectItem } from 'primeng/api/selectitem';
import { Team } from 'src/app/model/team';
import { CampionatoService } from 'src/app/services/campionato.service';
import { TeamsService } from 'src/app/services/teams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuovo-campionato-casuale',
  templateUrl: './nuovo-campionato-casuale.component.html',
  styleUrls: ['./nuovo-campionato-casuale.component.css'],
})
export class NuovoCampionatoCasualeComponent implements OnInit {
  campionato: Campionato;
  stagioni: SelectItem[];
  numeroSquadre: SelectItem[];
  listaTeams: SelectItem[];
  listaTeamsDaSelezionare: Array<Team>;
  listaTipologieTorneo: SelectItem[];

  constructor(
    private campionatoService: CampionatoService,
    private teamsService: TeamsService,
    private router: Router
  ) {
    this.stagioni = campionatoService.caricaStagioni();
    this.listaTipologieTorneo = campionatoService.caricaTipologieTorneo();
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

    //TIPOLOGIA
    xmin = Math.ceil(0);
    xmax = Math.floor(this.listaTipologieTorneo.length);
    let tipologia = Math.floor(Math.random() * (xmax - xmin)) + xmin;
    this.campionato.tipologia = this.listaTipologieTorneo[tipologia].value;
    this.campionato.descrizioneTipologia = this.listaTipologieTorneo[
      tipologia
    ].label;

    //STAGIONE
    xmin = Math.ceil(0);
    xmax = Math.floor(this.stagioni.length);
    this.campionato.stagione = this.stagioni[
      Math.floor(Math.random() * (xmax - xmin)) + xmin
    ].value;

    //NUMERO SQUADRE
    this.numeroSquadre = this.campionatoService.caricaNumeroSquadre(tipologia);
    xmin = Math.ceil(0);
    xmax = Math.floor(this.numeroSquadre.length);
    this.campionato.numeroTeams = this.numeroSquadre[
      Math.floor(Math.random() * (xmax - xmin)) + xmin
    ].value;

    //FORMAT
    let listaFormat = this.campionatoService.caricaFormatCampionato(
      tipologia,
      this.campionato.numeroTeams + ''
    );
    xmin = Math.ceil(0);
    xmax = Math.floor(listaFormat.length);
    this.campionato.format =
      listaFormat[Math.floor(Math.random() * (xmax - xmin)) + xmin].value;

    //SQUADRE
    for (let i = 0; i < this.campionato.numeroTeams; i++) {
      xmin = Math.ceil(0);
      xmax = Math.floor(this.listaTeams.length);
      let teamIndex = Math.floor(Math.random() * (xmax - xmin)) + xmin;
      this.campionato.listaTeams.push(this.listaTeams[teamIndex].value);
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
    this.router.navigate(['/gioca-campionato/' + this.campionato.id]);
  }
}
