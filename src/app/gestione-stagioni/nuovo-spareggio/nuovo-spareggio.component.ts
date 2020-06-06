import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampionatoService } from 'src/app/services/campionato.service';
import { Campionato, Evento } from 'src/app/model/campionato';
import { SelectItem } from 'primeng/api';
import { Team } from 'src/app/model/team';

@Component({
  selector: 'app-nuovo-spareggio',
  templateUrl: './nuovo-spareggio.component.html',
  styleUrls: ['./nuovo-spareggio.component.css'],
})
export class NuovoSpareggioComponent implements OnInit {
  @Input() campionato: Campionato;
  listaTeams: SelectItem[];
  listaTeams_C: Team[];
  listaTeams_FC: Team[];
  listaEventi: Evento[];
  disabledConferma: boolean = false;

  @Output() confermaSpareggiEvent = new EventEmitter<any>();

  constructor(
    private route: ActivatedRoute,
    private campionatoService: CampionatoService,
    private router: Router
  ) {
    this.listaTeams_C = [];
    this.listaTeams_FC = [];
    this.listaEventi = [];
  }

  ngOnInit(): void {
    if (this.campionato === undefined) {
      let id = this.route.snapshot.paramMap.get('id');
      this.campionato = this.campionatoService.caricaCampionato(id);
    }

    if (this.campionato != undefined) {
      this.listaTeams = [];
      this.listaTeams.push({ label: 'Seleziona la squadra', value: null });
      if (this.campionato.listaTeams.length >= 4) {
        for (let i = 0; i < this.campionato.listaTeams.length; i++) {
          this.listaTeams.push({
            label: this.campionato.listaTeams[i].nome,
            value: this.campionato.listaTeams[i],
          });
        }

        for (
          let i = 0;
          i < this.campionato.listaGiornate[0].listaEventi.length;
          i++
        ) {
          this.listaEventi.push(new Evento());
        }
      }
    }
  }

  confermaSpareggi() {
    this.disabledConferma = true;
    //this.listaEventi = [];
    let listaEventiCalendario = [];
    for (let i = 0; i < this.listaTeams_C.length; i++) {
      if (this.listaTeams_C[i] != null && this.listaTeams_FC[i] != null) {
        let evento = new Evento();
        evento.teamC = this.listaTeams_C[i];
        evento.teamFC = this.listaTeams_FC[i];
        listaEventiCalendario.push(evento);
      }
    }

    if (listaEventiCalendario.length > 0) {
      this.campionato.listaGiornate = this.campionato.listaGiornate.concat(
        this.campionatoService.generaCalendarioSpareggi(
          this.campionato.listaTeams.length - 1,
          listaEventiCalendario
        )
      );
    }

    this.campionatoService.salvaCampionato(this.campionato);

    if (this.campionato.singolo === true) {
      this.router.navigateByUrl('/gioca-spareggio/' + this.campionato.id);
    }

    this.confermaSpareggiEvent.emit(null);
  }
}
