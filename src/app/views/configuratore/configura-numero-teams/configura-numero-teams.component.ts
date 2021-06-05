import { Component, OnInit } from '@angular/core';
import { NumeroTeams, TipologiaTorneo } from 'src/app/model/dominio';
import { NumeroTeamsDbService } from 'src/app/database/numero-teams-db.service';
import { SelectItem } from 'primeng/api';
import { TorneiDBService } from 'src/app/database/tornei-db.service';

@Component({
  selector: 'app-configura-numero-teams',
  templateUrl: './configura-numero-teams.component.html',
  styleUrls: ['./configura-numero-teams.component.css'],
})
export class ConfiguraNumeroTeamsComponent implements OnInit {
  lista: NumeroTeams[];
  clonedLista: { [s: string]: NumeroTeams } = {};
  create: boolean = false;
  tipologiaTorneo: number;
  listaTipologieTorneo: SelectItem[];

  constructor(
    private numeroTeamsDbService: NumeroTeamsDbService,
    private torneiDbService: TorneiDBService
  ) {}

  ngOnInit(): void {
    this.caricaTipologieTorneo();
  }

  caricaTipologieTorneo() {
    this.torneiDbService.readAll().then((data) => {
      data.subscribe((listaIn) => {
        let listaDB = listaIn.map((e) => {
          let torneo = e.payload.doc.data() as TipologiaTorneo;
          return {
            label: torneo.etichetta,
            value: torneo.valore,
          } as SelectItem;
        });

        var listaOrdinata: SelectItem[] = listaDB.sort((obj1, obj2) => {
          if (obj1.value === null) {
            return -1;
          }

          if (obj2.value === null) {
            return 1;
          }

          if (obj1.value < obj2.value) {
            return -1;
          } else if (obj1.value > obj2.value) {
            return 1;
          } else return 0;
        });

        this.listaTipologieTorneo = listaOrdinata;
        this.listaTipologieTorneo.unshift({
          label: 'Seleziona la tipologia torneo',
          value: null,
        });
      });
    });
  }

  caricaListaNumeroTeams() {
    this.numeroTeamsDbService
      .readAllByTipologiaTorneo(this.tipologiaTorneo)
      .then((data) => {
        data.subscribe((listaIn) => {
          let listaDB = listaIn.map((e) => {
            let torneo = e.payload.doc.data() as NumeroTeams;
            return {
              id: e.payload.doc.id,
              etichetta: torneo.etichetta,
              valore: torneo.valore,
            } as NumeroTeams;
          });

          this.lista = listaDB;
          this.ordinaLista();
        });
      });
  }

  ordinaLista() {
    var listaOrdinata: NumeroTeams[] = this.lista.sort((obj1, obj2) => {
      if (obj1.valore === null) {
        return -1;
      }

      if (obj2.valore === null) {
        return 1;
      }

      if (obj1.valore < obj2.valore) {
        return -1;
      } else if (obj1.valore > obj2.valore) {
        return 1;
      } else return 0;
    });
    this.lista = listaOrdinata;
  }

  aggiungiNuovaConfigurazione() {
    this.lista.unshift(new NumeroTeams());
    this.create = true;
  }

  onRowEditInit(item: NumeroTeams, index: number) {
    this.clonedLista[index] = { ...item };
  }

  onRowEditSave(item: NumeroTeams, index: number) {
    this.ordinaLista();

    item.etichetta = item.etichetta.toUpperCase();

    if (this.create === true) {
      this.numeroTeamsDbService.create({
        tipologiaTorneo: this.tipologiaTorneo,
        etichetta: item.etichetta,
        valore: item.valore,
      });
    } else {
      this.numeroTeamsDbService.update(item.id, {
        tipologiaTorneo: this.tipologiaTorneo,
        etichetta: item.etichetta,
        valore: item.valore,
      });
    }
    this.create = false;

    this.caricaListaNumeroTeams();
  }

  onRowEditCancel(item: NumeroTeams, index: number) {
    this.numeroTeamsDbService.delete(item.id);
    this.lista.splice(index, 1);
    this.create = false;
  }
}
