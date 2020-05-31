import { Component, OnInit, Input } from '@angular/core';
import { Campionato } from 'src/app/model/campionato';
import { ActivatedRoute } from '@angular/router';
import { CampionatoService } from 'src/app/services/campionato.service';

@Component({
  selector: 'app-gioca-spareggio',
  templateUrl: './gioca-spareggio.component.html',
  styleUrls: ['./gioca-spareggio.component.css'],
})
export class GiocaSpareggioComponent implements OnInit {
  @Input() campionato: Campionato;

  constructor(
    private route: ActivatedRoute,
    private campionatoService: CampionatoService
  ) {}

  ngOnInit(): void {
    if (this.campionato === undefined) {
      let id = this.route.snapshot.paramMap.get('id');
      this.campionato = this.campionatoService.caricaCampionato(id);
    }
  }
}
