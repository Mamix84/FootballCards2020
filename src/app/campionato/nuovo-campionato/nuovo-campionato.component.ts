import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Campionato } from 'src/app/model/campionato';
import { CampionatoService } from 'src/app/services/campionato.service';
import { SelectItem } from 'primeng/api/selectitem';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/model/team';
import { Router } from '@angular/router';
import { StagioniDBService } from 'src/app/database/stagioni-db.service';
import { TorneiDBService } from 'src/app/database/tornei-db.service';
import { TipologiaTorneo, NumeroTeams } from 'src/app/model/dominio';
import { NumeroTeamsDbService } from 'src/app/database/numero-teams-db.service';

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
  listaTeams: SelectItem[];
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
    private stagioniDbService: StagioniDBService,
    private torneiDbService: TorneiDBService,
    private numeroTeamsDbService: NumeroTeamsDbService
  ) {
    this.caricaStagioni();
    this.listaTeams = teamsService.caricaListaTeamItems();
    this.caricaTipologieTorneo();
    this.listaValoriTecnici = teamsService.caricaListaValoriTecnici();
    this.listaTipologieRisultati = campionatoService.caricaListaTipologiaRisultati();
    this.campionato = new Campionato();
    this.campionato.tipologiaRisultati = 2;
    this.listaTeamsDaSelezionare = new Array<Team>();
    for (let i = 0; i < this.campionato.numeroTeams; i++) {
      this.listaTeamsDaSelezionare[i] = new Team();
    }
  }

  ngOnInit(): void {
    this.preparaListaTeams();
  }

  preparaListaTeams() {
    this.caricaNumeroSquadre(this.campionato.tipologia);
    this.listaFormat = this.campionatoService.caricaFormatCampionato(
      this.campionato.tipologia,
      this.campionato.numeroTeams + ''
    );

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
    this.listaTemplateCampionato = this.campionatoService.caricaListaTemplateCampionato();
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
          this.listaTeams[j].value.valoreTecnico = this.campionato.listaTeams[
            i
          ].valoreTecnico;
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

  caricaStagioni() {
    this.stagioniDbService.readAll().then((data) => {
      data.subscribe((listaIn) => {
        let listaDB = listaIn.map((e) => {
          return e.payload.doc.data() as any;
        });

        this.stagioni = listaDB[0].listaStagioni;
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
        this.listaTipologieTorneo.unshift({
          label: 'Seleziona la tipologia torneo',
          value: null,
        });
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

          this.numeroSquadre = listaOrdinata;
        });
      });
  }
}
