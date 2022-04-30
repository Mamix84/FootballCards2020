import { Component, Input, OnInit } from '@angular/core';
import { StagioneService } from 'src/app/services/stagione.service';
import { Router } from '@angular/router';
import { SalvataggioStagione } from 'src/app/model/files';

@Component({
  selector: 'app-carica-stagione',
  templateUrl: './carica-stagione.component.html',
  styleUrls: ['./carica-stagione.component.css'],
})
export class CaricaStagioneComponent implements OnInit {
  @Input() light = false;
  idFile: number;
  listaSalvataggi: Array<SalvataggioStagione>;

  constructor(
    private router: Router,
    private stagioneService: StagioneService
  ) {}

  ngOnInit(): void {
    this.listaSalvataggi = this.stagioneService.caricaSalvataggi();
  }

  caricaStagione(idStagione: string) {
    this.router.navigate(['/gioca-stagione/' + idStagione]);
  }

  eliminaSalvataggio(idStagione: string) {
    this.stagioneService.eliminaStagione(idStagione);
    this.listaSalvataggi = this.stagioneService.caricaSalvataggi();
  }
}
