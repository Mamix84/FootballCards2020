import { Component, OnInit, Input } from '@angular/core';
import { Coppa } from 'src/app/model/coppa';
import { SelectItem } from 'primeng/api';
import { Giornata } from 'src/app/model/campionato';
import { ActivatedRoute } from '@angular/router';
import { CoppaService } from 'src/app/services/coppa.service';
import { Team } from 'src/app/model/team';

@Component({
  selector: 'app-gioca-coppa',
  templateUrl: './gioca-coppa.component.html',
  styleUrls: ['./gioca-coppa.component.css'],
})
export class GiocaCoppaComponent implements OnInit {
  @Input() coppa: Coppa;
  faseCorrente: Giornata;
  listaFasi: SelectItem[];
  visualizzaVincitoreCoppa: boolean = false;
  vincitore: Team;

  constructor(
    private route: ActivatedRoute,
    private coppaService: CoppaService
  ) {
    this.listaFasi = [];
    this.faseCorrente = new Giornata();
    this.vincitore = new Team();
  }

  ngOnInit(): void {
    if (this.coppa === undefined) {
      let id = this.route.snapshot.paramMap.get('id');

      this.coppa = this.coppaService.caricaCoppa(id);
    }

    this.faseCorrente = this.coppa.listaFasi[this.coppa.faseCorrente];

    this.listaFasi = this.coppaService.preparaListaFasi(this.coppa);
  }

  fasePrecedente() {
    if (this.coppa.faseCorrente > 0) {
      this.coppa.faseCorrente--;
      this.faseCorrente = this.coppa.listaFasi[this.coppa.faseCorrente];
    }
  }

  caricaFase() {
    this.faseCorrente = this.coppa.listaFasi[this.coppa.faseCorrente];
  }

  faseSuccessiva() {
    if (this.coppa.faseCorrente < this.coppa.listaFasi.length) {
      this.coppa.faseCorrente++;
      this.faseCorrente = this.coppa.listaFasi[this.coppa.faseCorrente];
    }
  }

  aggiornaSalvataggio() {
    this.coppaService.salvaCoppa(this.coppa);
  }

  aggiornaTabellone() {
    if (this.checkPresenzaPareggi() === false)
      this.coppaService.generaIncontriFaseSuccessiva(
        this.faseCorrente,
        this.coppa
      );

    this.checkVincitore();
  }

  checkPresenzaPareggi(): boolean {
    let check = false;

    for (let i = 0; i < this.faseCorrente.listaEventi.length; i++) {
      if (
        this.faseCorrente.listaEventi[i].goalC ===
        this.faseCorrente.listaEventi[i].goalFC
      )
        return true;
    }

    return check;
  }

  checkVincitore() {
    if (this.coppa.faseCorrente === this.listaFasi.length - 1) {
      if (
        this.faseCorrente.listaEventi[0].goalC >
        this.faseCorrente.listaEventi[0].goalFC
      ) {
        this.vincitore = this.faseCorrente.listaEventi[0].teamC;
      } else if (
        this.faseCorrente.listaEventi[0].goalC <
        this.faseCorrente.listaEventi[0].goalFC
      ) {
        this.vincitore = this.faseCorrente.listaEventi[0].teamFC;
      }

      this.visualizzaVincitoreCoppa = true;
    }
  }
}
