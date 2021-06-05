import { Component, OnInit } from '@angular/core';
import { Stagione } from 'src/app/model/stagione';
import { StagioneService } from 'src/app/services/stagione.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gioca-spareggio-stagione',
  templateUrl: './gioca-spareggio-stagione.component.html',
  styleUrls: ['./gioca-spareggio-stagione.component.css'],
})
export class GiocaSpareggioStagioneComponent implements OnInit {
  stagione: Stagione;

  constructor(
    private stagioneService: StagioneService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.stagione = this.stagioneService.caricaStagione(id);
  }

  aggiornaStagione() {
    this.stagioneService.salvaStagione(this.stagione);
  }

  proseguiStagione() {
    this.router.navigate(['/prepara-stagione/' + this.stagione.id]);
  }
}
