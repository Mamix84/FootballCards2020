import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Campionato, Giornata } from 'src/app/model/campionato';
import { ActivatedRoute, Router } from '@angular/router';
import { CampionatoService } from 'src/app/services/campionato.service';
import { SelectItem } from 'primeng/api';
import { ClassificaService } from 'src/app/services/classifica.service';

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

      this.campionato.giornataCorrente = 0;
      this.giornataCorrente = this.campionato.listaGiornateSpareggi[
        this.campionato.giornataCorrente
      ];
    }

    this.listaGiornate = [];
    this.listaGiornate.push({ label: 'SPAREGGI - ANDATA', value: 0 });
    this.listaGiornate.push({ label: 'SPAREGGI - RITORNO', value: 0 });
  }

  giornataPrecedente() {
    if (this.campionato.giornataCorrente > 0) {
      this.campionato.giornataCorrente--;
      this.giornataCorrente = this.campionato.listaGiornateSpareggi[
        this.campionato.giornataCorrente
      ];

      this.aggiornaClassifica();
    }
  }

  giornataSuccessiva() {
    if (
      this.campionato.giornataCorrente <
      this.campionato.listaGiornateSpareggi.length
    ) {
      this.campionato.giornataCorrente++;
      this.giornataCorrente = this.campionato.listaGiornateSpareggi[
        this.campionato.giornataCorrente
      ];

      this.aggiornaClassifica();
    }
  }

  caricaGiornata() {
    this.giornataCorrente = this.campionato.listaGiornateSpareggi[
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
      // this.campionato.classifica = this.classificaService.aggiornaClassificaSpareggi(
      //   this.giornataCorrente.numeroGiornata,
      //   this.giornataCorrente.girone,
      //   this.campionato
      // );

      this.visualizzaProsegui = this.classificaService.checkConclusioneSpareggi(
        this.campionato.listaGiornateSpareggi
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
