import { Component, OnInit } from '@angular/core';
import { Stagione } from 'src/app/model/stagione';
import { Router, ActivatedRoute } from '@angular/router';
import { StagioneService } from 'src/app/services/stagione.service';

@Component({
  selector: 'app-nuovo-spareggio-stagione',
  templateUrl: './nuovo-spareggio-stagione.component.html',
  styleUrls: ['./nuovo-spareggio-stagione.component.css'],
})
export class NuovoSpareggioStagioneComponent implements OnInit {
  stagione: Stagione;
  campionatiCompleti: number;
  disabledProsegui: boolean = true;

  constructor(
    private router: Router,
    private stagioneService: StagioneService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.stagione = this.stagioneService.caricaStagione(id);

    this.campionatiCompleti = 0;
  }

  confermaSpareggi(idCampionato: number) {
    this.campionatiCompleti++;
    if (this.campionatiCompleti === this.stagione.listaCampionati.length) {
      this.disabledProsegui = false;
    }
  }

  prosegui() {
    this.stagioneService.salvaStagione(this.stagione);
    this.router.navigate(['/gioca-spareggio-stagione/' + this.stagione.id]);
  }
}
