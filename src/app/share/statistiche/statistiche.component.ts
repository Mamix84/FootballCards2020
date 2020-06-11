import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Campionato, Evento, Giornata } from 'src/app/model/campionato';
import { MessageService, SelectItem } from 'primeng/api';
import { StatisticheService } from 'src/app/services/statistiche.service';
import { Team } from 'src/app/model/team';

@Component({
  selector: 'app-statistiche',
  templateUrl: './statistiche.component.html',
  styleUrls: ['./statistiche.component.css'],
})
export class StatisticheComponent implements OnInit, OnChanges {
  @Input() campionato: Campionato;
  @Input() index: Giornata;
  data: any;
  teamA_grafico: Team;
  teamB_grafico: Team;
  listaTeams: SelectItem[];
  listaEventi_A: Evento[];
  listaEventi_B: Evento[];

  constructor(
    private messageService: MessageService,
    private statisticheService: StatisticheService
  ) {
    this.teamA_grafico = new Team();
    this.teamB_grafico = new Team();
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.aggiornaAndamentoGrafico();
  }

  ngOnInit(): void {
    this.listaTeams = [];
    if (this.campionato.listaTeams.length >= 4) {
      for (let i = 0; i < this.campionato.listaTeams.length; i++) {
        this.listaTeams.push({
          label: this.campionato.listaTeams[i].nome,
          value: this.campionato.listaTeams[i],
        });
      }

      this.teamA_grafico = this.listaTeams[0].value;
      this.teamB_grafico = this.listaTeams[1].value;

      this.aggiornaAndamentoGrafico();
    }
  }

  aggiornaAndamentoGrafico() {
    this.data = this.statisticheService.preparaAndamentoClassifica(
      this.teamA_grafico,
      this.teamB_grafico,
      this.campionato
    );

    this.listaEventi_A = [];
    this.listaEventi_B = [];

    if (this.teamA_grafico != undefined && this.teamB_grafico != undefined) {
      for (let i = 0; i < this.campionato.listaGiornate.length; i++) {
        for (
          let j = 0;
          j < this.campionato.listaGiornate[i].listaEventi.length;
          j++
        ) {
          if (
            this.campionato.listaGiornate[i].listaEventi[j].teamC.id ===
              this.teamA_grafico.id ||
            this.campionato.listaGiornate[i].listaEventi[j].teamFC.id ===
              this.teamA_grafico.id
          ) {
            this.listaEventi_A.push(
              this.campionato.listaGiornate[i].listaEventi[j]
            );
          }

          if (
            this.campionato.listaGiornate[i].listaEventi[j].teamC.id ===
              this.teamB_grafico.id ||
            this.campionato.listaGiornate[i].listaEventi[j].teamFC.id ===
              this.teamB_grafico.id
          ) {
            this.listaEventi_B.push(
              this.campionato.listaGiornate[i].listaEventi[j]
            );
          }
        }
      }
    }
  }

  selectData(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Data Selected',
      detail: this.data.datasets[event.element._datasetIndex].data[
        event.element._index
      ],
    });
  }

  updateLogo(event: any, team: Team) {
    team.logo = '/assets/images/teams/no_logo.png';
  }
}
