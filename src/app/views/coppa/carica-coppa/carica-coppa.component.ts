import { Component, OnInit } from '@angular/core';
import { Salvataggio } from 'src/app/model/files';
import { Router } from '@angular/router';
import { CampionatoService } from 'src/app/services/campionato.service';
import { CoppaService } from 'src/app/services/coppa.service';

@Component({
  selector: 'app-carica-coppa',
  templateUrl: './carica-coppa.component.html',
  styleUrls: ['./carica-coppa.component.css'],
})
export class CaricaCoppaComponent implements OnInit {
  idFile: number;
  listaSalvataggi: Array<Salvataggio>;

  constructor(private router: Router, private coppaService: CoppaService) {}

  ngOnInit(): void {
    this.listaSalvataggi = this.coppaService.caricaSalvataggi();
  }

  caricaCoppa(idCoppa: string) {
    this.router.navigate(['/gioca-coppa/' + idCoppa]);
  }

  eliminaSalvataggio(idCampionato: string) {
    this.coppaService.eliminaCoppa(idCampionato);
    this.listaSalvataggi = this.coppaService.caricaSalvataggi();
  }
}
