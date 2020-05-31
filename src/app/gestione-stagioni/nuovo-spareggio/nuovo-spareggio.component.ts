import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampionatoService } from 'src/app/services/campionato.service';
import { Campionato, Evento } from 'src/app/model/campionato';
import { SelectItem } from 'primeng/api';
import { Team } from 'src/app/model/team';

@Component({
  selector: 'app-nuovo-spareggio',
  templateUrl: './nuovo-spareggio.component.html',
  styleUrls: ['./nuovo-spareggio.component.css'],
})
export class NuovoSpareggioComponent implements OnInit {
  campionato: Campionato;
  listaTeams: SelectItem[];
  listaTeams_C: Team[];
  listaTeams_FC: Team[];
  listaEventi: Evento[];

  constructor(
    private route: ActivatedRoute,
    private campionatoService: CampionatoService,
    private router: Router
  ) {
    this.listaTeams_C = [];
    this.listaTeams_FC = [];
    this.listaEventi = [];
  }

  ngOnInit(): void {
    if (this.campionato === undefined) {
      let id = this.route.snapshot.paramMap.get('id');
      this.campionato = this.campionatoService.caricaCampionato(id);

      this.listaTeams = [];
      this.listaTeams.push({ label: 'Seleziona la squadra', value: null });
      if (this.campionato.listaTeams.length >= 4) {
        for (let i = 0; i < this.campionato.listaTeams.length; i++) {
          this.listaTeams.push({
            label: this.campionato.listaTeams[i].nome,
            value: this.campionato.listaTeams[i],
          });
        }

        for (
          let i = 0;
          i < this.campionato.listaGiornate[0].listaEventi.length;
          i++
        ) {
          this.listaEventi.push(new Evento());
        }
      }
    }
  }

  confermaSpareggi() {
    if (this.campionato.singolo === true) {
      this.router.navigateByUrl('/gioca-spareggio/' + this.campionato.id);
    }
  }
}
