import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Campionato } from 'src/app/model/campionato';
import { CampionatoService } from 'src/app/services/campionato.service';
import { SelectItem } from 'primeng/api/selectitem';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/model/team';
import { Router } from '@angular/router';
import { TorneiDBService } from 'src/app/database/tornei-db.service';
import {
  TipologiaTorneo,
  NumeroTeams,
  FormatDominio,
} from 'src/app/model/dominio';
import { NumeroTeamsDbService } from 'src/app/database/numero-teams-db.service';
import { FormatDbService } from 'src/app/database/format-db.service';
import { TeamsDBService } from 'src/app/database/teams-db.service';

@Component({
  selector: 'app-nuovo-campionato',
  templateUrl: './nuovo-campionato.component.html',
  styleUrls: ['./nuovo-campionato.component.css'],
})
export class NuovoCampionatoComponent implements OnInit {
  @Input() campionato: Campionato;
  @Input() singolo: boolean = true;
  stagioni: SelectItem[];
  numeroSquadre: SelectItem[];
  listaTeams: SelectItem[] = [];
  listaTeamsDaSelezionare: Array<Team>;
  listaTeamsSelezionati: Team[];
  listaTipologieTorneo: SelectItem[];
  listaFormat: SelectItem[];
  listaValoriTecnici: SelectItem[];
  listaTipologieRisultati: SelectItem[];
  visualizzaCaricaTemplate: boolean = false;
  listaTemplateCampionato: SelectItem[];

  @Output() campionatoPronto = new EventEmitter<any>();
  @Output() eliminaCampionatoEvent = new EventEmitter<any>();

  constructor(
    private campionatoService: CampionatoService,
    private teamsService: TeamsService,
    private router: Router,
    private torneiDbService: TorneiDBService,
    private numeroTeamsDbService: NumeroTeamsDbService,
    private formatDbService: FormatDbService,
    private teamsDbService: TeamsDBService
  ) {
    this.campionato = new Campionato();
    this.caricaListaTeamItems();
  }

  ngOnInit(): void {
    if (this.campionato != undefined) {
      this.preparaListaTeams();
    }
  }

  preparaListaTeams() {
    console.log('STAGIONE '+this.campionato.stagione);
    this.caricaNumeroSquadre(this.campionato.tipologia);
    this.caricaListaFormat();

    this.listaTeamsDaSelezionare = new Array<Team>();
    for (let i = 0; i < this.campionato.numeroTeams; i++) {
      this.listaTeamsDaSelezionare[i] = new Team();
    }

    this.listaTeamsSelezionati = new Array<Team>();
    for (let i = 0; i < this.campionato.numeroTeams; i++) {
      this.listaTeamsSelezionati[i] = null;
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
    if (this.campionato.listaTeams.length === 0) {
      for (let i = 0; i < this.listaTeamsSelezionati.length; i++) {
        this.campionato.listaTeams.push(this.listaTeamsSelezionati[i]);
      }
    }

    this.campionato.singolo = this.singolo;
    this.campionato.giornataCorrente = 0;

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

  caricaNumeroSquadre(tipologiaTorneo: number) {
    if (tipologiaTorneo === undefined) return;

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

          this.numeroSquadre = listaOrdinata;
          this.numeroSquadre.unshift({
            label: 'Seleziona il numero squadre',
            value: null,
          });
        });
      });
  }

  caricaListaFormat() {
    if (this.campionato === undefined) return;

    if (
      this.campionato.tipologia === undefined ||
      this.campionato.numeroTeams === undefined
    )
      return;

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

          this.listaFormat = listaDB;
          this.listaFormat.unshift({
            label: 'Seleziona il format del torneo',
            value: null,
          });
        });
      });
  }

  caricaListaTeamItems() {
    this.teamsDbService.readAll().then((data) => {
      data.subscribe((listaIn) => {
        let listaDB = listaIn.map((e) => {
          let team = e.payload.doc.data() as Team;
          return {
            idTecnico: e.payload.doc.id,
            id: team.id,
            nome: team.nome,
            logo:
              '/assets%2Fimages%2Fteams%2F' + team.nome.toLowerCase() + '.png',
            valoreTecnico: team.valoreTecnico,
          } as Team;
        });

        var listaTeamsOrdinata: Team[] = listaDB.sort((obj1, obj2) => {
          if (obj1.id === null) {
            return -1;
          }

          if (obj2.id === null) {
            return 1;
          }

          let year1 = obj1.id;
          let year2 = obj2.id;

          if (year1 < year2) {
            return -1;
          } else if (year1 > year2) {
            return 1;
          } else return 0;
        });

        let listaTeamsItems = [];

        listaTeamsItems.push({ label: 'Seleziona squadra', value: null });

        for (let i = 0; i < listaTeamsOrdinata.length; i++) {
          listaTeamsItems.push({
            label: listaTeamsOrdinata[i].nome,
            value: listaTeamsOrdinata[i],
          });
        }

        this.listaTeams = listaTeamsItems;

        this.listaValoriTecnici = this.teamsService.caricaListaValoriTecnici();
        this.listaTipologieRisultati =
          this.campionatoService.caricaListaTipologiaRisultati();
        this.campionato = new Campionato();
        this.campionato.tipologiaRisultati = 2;
        this.listaTeamsDaSelezionare = new Array<Team>();
        for (let i = 0; i < this.campionato.numeroTeams; i++) {
          this.listaTeamsDaSelezionare[i] = new Team();
        }
        this.preparaListaTeams();
      });
    });
  }
}
