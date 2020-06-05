import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Campionato, Giornata } from 'src/app/model/campionato';
import { ActivatedRoute, Router } from '@angular/router';
import { CampionatoService } from 'src/app/services/campionato.service';
import { SelectItem } from 'primeng/api';
import { ClassificaService } from 'src/app/services/classifica.service';
import { Team } from 'src/app/model/team';

@Component({
  selector: 'app-gioca-spareggio',
  templateUrl: './gioca-spareggio.component.html',
  styleUrls: ['./gioca-spareggio.component.css'],
})
export class GiocaSpareggioComponent implements OnInit {
  @Input() campionato: Campionato;
  giornataCorrente: Giornata;
  listaGiornate: SelectItem[];
  visualizzaProsegui: boolean = false;
  vincitore: Team = new Team();

  @Output() aggiornaSalvataggioStagione = new EventEmitter<any>();
  @Output() proseguiStagioneEvent = new EventEmitter<any>();

  constructor(
    private route: ActivatedRoute,
    private campionatoService: CampionatoService,
    private classificaService: ClassificaService,
    private router: Router
  ) {
    this.giornataCorrente = new Giornata();
  }

  ngOnInit(): void {
    if (this.campionato === undefined) {
      let id = this.route.snapshot.paramMap.get('id');
      this.campionato = this.campionatoService.caricaCampionato(id);

      this.giornataCorrente = this.campionato.listaGiornate[
        this.campionato.giornataCorrente
      ];
    }

    this.listaGiornate = [];
    for (let i = 0; i < this.campionato.listaGiornate.length; i++) {
      if (this.campionato.listaGiornate[i].girone === 'A') {
        this.listaGiornate.push({
          label: this.campionato.listaGiornate[i].numeroGiornata + '',
          value: this.campionato.listaGiornate[i].numeroGiornata - 1,
        });
      } else if (this.campionato.listaGiornate[i].girone === 'R') {
        this.listaGiornate.push({
          label:
            this.campionato.listaTeams.length -
            1 +
            this.campionato.listaGiornate[i].numeroGiornata +
            '',
          value:
            this.campionato.listaTeams.length -
            1 +
            this.campionato.listaGiornate[i].numeroGiornata -
            1,
        });
      } else if (this.campionato.listaGiornate[i].girone === 'AS') {
        this.listaGiornate.push({
          label: 'SPAREGGI - ANDATA',
          value:
          this.campionato.listaTeams.length -
          1 +
          this.campionato.listaGiornate[i].numeroGiornata -
          1,
        });
      } else {
        this.listaGiornate.push({
          label: 'SPAREGGI - RITORNO',
          value:
            this.campionato.listaTeams.length -
            1 +
            this.campionato.listaGiornate[i].numeroGiornata,
        });
      }
    }
  }

  giornataPrecedente() {
    if (this.campionato.giornataCorrente > 0) {
      this.campionato.giornataCorrente--;
      this.giornataCorrente = this.campionato.listaGiornate[
        this.campionato.giornataCorrente
      ];

      this.aggiornaClassifica();
    }
  }

  giornataSuccessiva() {
    if (
      this.campionato.giornataCorrente < this.campionato.listaGiornate.length
    ) {
      this.campionato.giornataCorrente++;
      this.giornataCorrente = this.campionato.listaGiornate[
        this.campionato.giornataCorrente
      ];

      this.aggiornaClassifica();
    }
  }

  caricaGiornata() {
    this.giornataCorrente = this.campionato.listaGiornate[
      this.campionato.giornataCorrente
    ];
  }

  aggiornaSalvataggio() {
    this.campionatoService.aggiornaValoriTecnici(this.campionato);
    if (this.campionato.singolo === true) {
      this.campionatoService.salvaCampionato(this.campionato);
    }

    this.aggiornaSalvataggioStagione.emit(null);
  }

  aggiornaClassifica() {
    if (this.giornataCorrente != undefined) {
      this.campionato.classifica = this.classificaService.aggiornaClassifica(
        this.giornataCorrente.numeroGiornata,
        this.giornataCorrente.girone,
        this.campionato
      );

      let team = this.classificaService.checkVincitore(
        this.campionato.listaGiornate.length,
        this.campionato.classifica
      );

      this.visualizzaProsegui = this.classificaService.checkConclusioneSpareggi(
        this.campionato.listaGiornate
      );
    }
  }

  terminaCampionato() {
    this.router.navigate(['/']);
  }

  proseguiCampionato() {
    if (this.campionato.singolo === true) {
      this.router.navigate(['/prepara-campionato/' + this.campionato.id]);
    } else {
      this.proseguiStagioneEvent.emit(null);
    }
  }
}
