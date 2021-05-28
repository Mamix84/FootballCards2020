import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salvataggio } from 'src/app/model/files';
import { CampionatoService } from 'src/app/services/campionato.service';

@Component({
  selector: 'app-carica-campionato',
  templateUrl: './carica-campionato.component.html',
  styleUrls: ['./carica-campionato.component.css'],
})
export class CaricaCampionatoComponent implements OnInit {
  idFile: number;
  listaSalvataggi: Array<Salvataggio>;

  constructor(private router: Router, private campionatoService: CampionatoService) {}

  ngOnInit(): void {
    this.listaSalvataggi = this.campionatoService.caricaSalvataggi();
  }

  caricaCampionato(idCampionato: string) {
    this.router.navigate(['/gioca-campionato/'+idCampionato]);
  }

  eliminaSalvataggio(idCampionato: string) {
    this.campionatoService.eliminaCampionato(idCampionato);
    this.listaSalvataggi = this.campionatoService.caricaSalvataggi();
  }
}
