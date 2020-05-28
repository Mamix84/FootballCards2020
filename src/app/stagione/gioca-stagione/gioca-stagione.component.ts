import { Component, OnInit } from '@angular/core';
import { Stagione } from 'src/app/model/stagione';
import { ActivatedRoute, Router } from '@angular/router';
import { StagioneService } from 'src/app/services/stagione.service';

@Component({
  selector: 'app-gioca-stagione',
  templateUrl: './gioca-stagione.component.html',
  styleUrls: ['./gioca-stagione.component.css'],
})
export class GiocaStagioneComponent implements OnInit {
  stagione: Stagione;
  campionatiCompleti: number;

  constructor(
    private route: ActivatedRoute,
    private stagioneService: StagioneService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.stagione = this.stagioneService.caricaStagione(id);

    this.campionatiCompleti = 0;
  }

  aggiornaStagione() {
    this.stagioneService.salvaStagione(this.stagione);
  }

  proseguiStagione() {
    this.campionatiCompleti++;
    if(this.campionatiCompleti === this.stagione.listaCampionati.length){
    this.router.navigate(['/prepara-stagione/' + this.stagione.id]);
    }
  }
}
