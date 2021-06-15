import { Component, OnInit } from '@angular/core';
import { Coppa } from 'src/app/model/coppa';
import { CoppaService } from 'src/app/services/coppa.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Team } from 'src/app/model/team';
import { TeamsService } from 'src/app/services/teams.service';
import { StagioniDBService } from 'src/app/database/stagioni-db.service';
import { TeamsDBService } from 'src/app/database/teams-db.service';

@Component({
  selector: 'app-nuova-coppa',
  templateUrl: './nuova-coppa.component.html',
  styleUrls: ['./nuova-coppa.component.css'],
})
export class NuovaCoppaComponent implements OnInit {
  coppa: Coppa;

  listaStagioni: SelectItem[];
  listaTipologieCoppa: SelectItem[];
  listaNumeroSquadre: SelectItem[];
  listaFormat: SelectItem[];
  listaTeamsDaSelezionare: Array<Team>;
  listaTeamsSelezionati: Array<Team>;
  listaValoriTecnici: SelectItem[];
  listaTeams: SelectItem[];

  constructor(
    private coppaService: CoppaService,
    private router: Router,
    private teamsService: TeamsService,
    private stagioniDbService: StagioniDBService,
    private teamsDbService: TeamsDBService
  ) {
    this.caricaStagioni();
    this.listaTipologieCoppa = coppaService.caricaListaTipologieCoppa();
    this.listaTeamsDaSelezionare = [];
    this.listaTeamsSelezionati = [];
    this.listaValoriTecnici = teamsService.caricaListaValoriTecnici();
    this.caricaListaTeamItems();

    this.coppa = new Coppa();
  }

  ngOnInit(): void {
    this.coppa.tipologiaRisultati = 2;
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

  preparaListaTeams() {
    this.listaNumeroSquadre = this.coppaService.caricaListaNumeroSquadre(
      this.coppa.tipologia
    );
    this.listaFormat = this.coppaService.caricaFormatCoppa(
      this.coppa.tipologia,
      this.coppa.numeroTeams + ''
    );

    this.listaTeamsDaSelezionare = new Array<Team>();
    for (let i = 0; i < this.coppa.numeroTeams; i++) {
      this.listaTeamsDaSelezionare[i] = new Team();
    }

    this.listaTeamsSelezionati = new Array<Team>();
    for (let i = 0; i < this.coppa.numeroTeams; i++) {
      this.listaTeamsSelezionati[i] = null;
    }
  }

  checkCoppaCompleta(): boolean {
    if (this.listaTeamsSelezionati === undefined) return true;

    if (this.listaTeamsSelezionati.length === 0) return true;

    for (let i = 0; i < this.listaTeamsSelezionati.length; i++) {
      if (this.listaTeamsSelezionati[i] === null) return true;
    }

    return false;
  }

  preparaCoppa() {
    for (let i = 0; i < this.listaTeamsSelezionati.length; i++) {
      this.coppa.listaTeams.push(this.listaTeamsSelezionati[i]);
    }

    this.coppa.faseCorrente = 0;
    this.coppaService.generaIncontri(this.coppa);

    let date = new Date();
    this.coppa.id =
      this.coppa.denominazioneCoppa.trim() + '_' + date.getTime().toString();

    this.coppaService.salvaCoppa(this.coppa);

    this.router.navigate(['/gioca-coppa/' + this.coppa.id]);
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
            logo: '/assets%2Fimages%2Fteams%2F' + team.nome.toLowerCase() + '.png',
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
      });
    });
  }
}
