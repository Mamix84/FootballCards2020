import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CampionatoService } from 'src/app/services/campionato.service';
import { ClassificaService } from 'src/app/services/classifica.service';
import { Campionato, Giornata } from 'src/app/model/campionato';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api/selectitem';
import { Classifica } from 'src/app/model/classifica';

@Component({
  selector: 'app-gioca-campionato',
  templateUrl: './gioca-campionato.component.html',
  styleUrls: ['./gioca-campionato.component.css'],
})
export class GiocaCampionatoComponent implements OnInit {
  @Input() campionato: Campionato;
  giornataCorrente: Giornata;
  listaGiornate: SelectItem[];
  classifica: Classifica;

  @Output() aggiornaSalvataggioStagione = new EventEmitter<any>();
  @Output() proseguiStagioneEvent = new EventEmitter<any>();
  @Output() preparaSpareggiStagioneEvent = new EventEmitter<any>();

  constructor(
    private campionatoService: CampionatoService,
    private classificaService: ClassificaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.campionato === undefined) {
      let id = this.route.snapshot.paramMap.get('id');

      this.campionato = this.campionatoService.caricaCampionato(id);
    }
    this.giornataCorrente = this.campionato.listaGiornate[
      this.campionato.giornataCorrente
    ];

    this.classificaService.preparaClassifica(this.campionato.listaTeams);

    for (let i = 0; i < this.campionato.listaGiornate.length; i++) {
      this.classificaService.aggiornaClassifica(
        this.giornataCorrente.numeroGiornata,
        this.giornataCorrente.girone,
        this.campionato
      );
    }

    this.listaGiornate = [];
    for (let i = 0; i < this.campionato.listaGiornate.length; i++) {
      if (this.campionato.listaGiornate[i].girone === 'A') {
        this.listaGiornate.push({
          label: this.campionato.listaGiornate[i].numeroGiornata + '',
          value: this.campionato.listaGiornate[i].numeroGiornata - 1,
        });
      } else {
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
      }
    }
  }

  giornataPrecedente() {
    if (this.campionato.giornataCorrente > 0) {
      this.campionato.giornataCorrente--;
      this.giornataCorrente = this.campionato.listaGiornate[
        this.campionato.giornataCorrente
      ];
    }
  }

  giornataSuccessiva() {
    if (this.campionato.giornataCorrente < this.campionato.listaGiornate.length) {
      this.campionato.giornataCorrente++;
      this.giornataCorrente = this.campionato.listaGiornate[
        this.campionato.giornataCorrente
      ];
    }
  }

  caricaGiornata() {
    this.giornataCorrente = this.campionato.listaGiornate[this.campionato.giornataCorrente];
  }

  aggiornaSalvataggio() {
    this.campionato.classifica = this.classifica;

    this.campionatoService.aggiornaValoriTecnici(
      this.giornataCorrente.numeroGiornata,
      this.giornataCorrente.girone,
      this.campionato
    );
    this.campionatoService.salvaCampionato(this.campionato);
    this.aggiornaSalvataggioStagione.emit(null);
  }

  generaRisultati() {
    this.campionatoService.generaRisultatiCasuali(
      this.giornataCorrente.numeroGiornata,
      this.giornataCorrente.girone,
      this.campionato
    );
    this.classificaService.aggiornaClassifica(
      this.giornataCorrente.numeroGiornata,
      this.giornataCorrente.girone,
      this.campionato
    );
  }

  aggiornaClassifica() {
    if (this.giornataCorrente != undefined) {
      this.classifica = this.classificaService.aggiornaClassifica(
        this.giornataCorrente.numeroGiornata,
        this.giornataCorrente.girone,
        this.campionato
      );
    }
  }

  proseguiCampionato() {
    if (this.campionato.singolo === true) {
      this.router.navigate(['/prepara-campionato/' + this.campionato.id]);
    } else {
      this.proseguiStagioneEvent.emit(null);
    }
  }

  preparaSpareggi(){
    if (this.campionato.singolo === true) {
      this.router.navigate(['/nuovo-spareggio/' + this.campionato.id]);
    } else {
      this.preparaSpareggiStagioneEvent.emit(null);
    }
  }
}
