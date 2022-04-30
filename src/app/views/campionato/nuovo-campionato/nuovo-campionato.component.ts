import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Campionato } from 'src/app/model/campionato';
import { CampionatoService } from 'src/app/services/campionato.service';
import { SelectItem } from 'primeng/api/selectitem';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/model/team';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuovo-campionato',
  templateUrl: './nuovo-campionato.component.html',
  styleUrls: ['./nuovo-campionato.component.css'],
})
export class NuovoCampionatoComponent implements OnInit {
  @Input() campionato: Campionato;
  @Input() singolo: boolean = true;
  listaTeams: SelectItem[] = [];
  listaTeamsDaSelezionare: Array<Team>;
  listaTeamsSelezionati: Team[];
  listaValoriTecnici: SelectItem[];
  visualizzaCaricaTemplate: boolean = false;
  listaTemplateCampionato: SelectItem[];

  @Output() campionatoPronto = new EventEmitter<any>();
  @Output() eliminaCampionatoEvent = new EventEmitter<any>();

  constructor(
    private campionatoService: CampionatoService,
    private teamsService: TeamsService,
    private router: Router
  ) {
    this.campionato = new Campionato();
    this.campionato.tipologiaRisultati = 2;
  }

  ngOnInit(): void {
    this.caricaListaTeamItems();
    this.listaValoriTecnici = this.teamsService.caricaListaValoriTecnici();

    if (this.campionato != undefined) {
      this.preparaListaTeams();
    }

    this.campionato.singolo = this.singolo;
  }

  preparaListaTeams() {
    this.listaTeamsDaSelezionare = new Array<Team>();
    for (let i = 0; i < this.campionato.numeroTeams; i++) {
      this.listaTeamsDaSelezionare[i] = new Team();
    }

    this.listaTeamsSelezionati = new Array<Team>();
    for (let i = 0; i < this.campionato.numeroTeams; i++) {
      this.listaTeamsSelezionati[i] = null;
    }
  }

  preparaCampionato() {
    this.campionato = this.campionatoService.preparaCampionato(
      this.campionato,
      this.listaTeamsSelezionati
    );

    this.campionatoPronto.emit(this.campionato);

    if (this.singolo === true)
      this.router.navigate(['/gioca-campionato/' + this.campionato.id]);
  }

  checkCampionatoCompleto(): boolean {
    if (this.listaTeamsSelezionati === undefined) return true;

    if (this.listaTeamsSelezionati.length === 0) return true;

    for (let i = 0; i < this.listaTeamsSelezionati.length; i++) {
      if (this.listaTeamsSelezionati[i] === null) return true;
    }

    return false;
  }

  eliminaCampionato() {
    this.eliminaCampionatoEvent.emit(null);
  }

  visualizzaCaricaTemplateDialog() {
    this.listaTemplateCampionato =
      this.campionatoService.caricaListaTemplateCampionato();
    this.visualizzaCaricaTemplate = true;
  }

  nascondiVisualizzaCaricaTemplate() {
    this.preparaListaTeams();

    for (let i = 0; i < this.campionato.listaTeams.length; i++) {
      this.listaTeamsSelezionati[i] = this.campionato.listaTeams[i];

      for (let j = 0; j < this.listaTeams.length; j++) {
        if (
          this.listaTeams[j].value != null &&
          this.listaTeams[j].value.id === this.campionato.listaTeams[i].id
        ) {
          this.listaTeams[j].value.valoreTecnico =
            this.campionato.listaTeams[i].valoreTecnico;
        }
      }
    }

    this.visualizzaCaricaTemplate = false;
  }

  selezionaSquadreCasuali() {
    for (let i = 0; i < this.listaTeamsSelezionati.length; i++) {
      let xmin = Math.ceil(0);
      let xmax = Math.floor(this.listaTeams.length);
      let index = Math.floor(Math.random() * (xmax - xmin)) + xmin;
      this.listaTeamsSelezionati[i] = this.listaTeams[index].value;
    }
  }

  caricaListaTeamItems() {
    this.teamsService
      .caricaListaTeam()
      .then((data: SelectItem<Team>[]) => (this.listaTeams = data));
  }
}
