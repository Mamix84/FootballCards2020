import { Component, OnInit } from '@angular/core';
import {
  FormatDominio,
  NumeroTeams,
  TipologiaTorneo,
} from 'src/app/model/dominio';
import { SelectItem } from 'primeng/api';
import { TorneiDBService } from 'src/app/database/tornei-db.service';
import { NumeroTeamsDbService } from 'src/app/database/numero-teams-db.service';
import { FormatDbService } from 'src/app/database/format-db.service';

@Component({
  selector: 'app-configura-format-campionato',
  templateUrl: './configura-format-campionato.component.html',
  styleUrls: ['./configura-format-campionato.component.css'],
})
export class ConfiguraFormatCampionatoComponent implements OnInit {
  lista: FormatDominio[];
  clonedLista: { [s: string]: FormatDominio } = {};
  create: boolean = false;
  tipologiaTorneo: number;
  listaTipologieTorneo: SelectItem[];
  numeroSquadre: SelectItem[];
  numeroTeams: string;

  constructor(
    private numeroTeamsDbService: NumeroTeamsDbService,
    private torneiDbService: TorneiDBService,
    private formatDbService: FormatDbService
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

  caricaNumeroSquadre(tipologiaTorneo: number) {
    this.numeroTeamsDbService
      .readAllByTipologiaTorneo(tipologiaTorneo)
      .then((data) => {
        data.subscribe((listaIn) => {
          let listaDB = listaIn.map((e) => {
            let numero = e.payload.doc.data() as NumeroTeams;
            return {
              label: numero.etichetta,
              value: numero.valore,
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

          this.numeroSquadre = listaOrdinata;
          this.numeroSquadre.unshift({
            label: 'Seleziona il numero di squadre',
            value: null,
          });
        });
      });
  }

  caricaListaFormat() {
    this.formatDbService
      .readAllByFilters(this.tipologiaTorneo, this.numeroTeams)
      .then((data) => {
        data.subscribe((listaIn) => {
          let listaDB = listaIn.map((e) => {
            let format = e.payload.doc.data() as FormatDominio;
            return {
              id: e.payload.doc.id,
              label: format.label,
              tipologiaTorneo: format.tipologiaTorneo,
              numeroTeams: format.numeroTeams,
              champions: format.champions,
              europa: format.europa,
              intertoto: format.intertoto,
              promozione: format.promozione,
              retrocessione: format.retrocessione,
              playoff: format.playoff,
              playout: format.playout,
            } as FormatDominio;
          });

          this.lista = listaDB;
          this.ordinaLista();
        });
      });
  }

  ordinaLista() {
    var listaOrdinata: FormatDominio[] = this.lista.sort((obj1, obj2) => {
      if (obj1.label === null) {
        return -1;
      }

      if (obj2.label === null) {
        return 1;
      }

      if (obj1.label < obj2.label) {
        return -1;
      } else if (obj1.label > obj2.label) {
        return 1;
      } else return 0;
    });
    this.lista = listaOrdinata;
  }

  aggiungiNuovaConfigurazione() {
    this.lista.unshift(new FormatDominio());
    this.create = true;
  }

  onRowEditInit(item: FormatDominio, index: number) {
    this.clonedLista[index] = { ...item };
  }

  onRowEditSave(item: FormatDominio, index: number) {
    this.ordinaLista();

    item.label = item.label.toUpperCase();

    if (this.create === true) {
      this.formatDbService.create({
        label: item.label,
        tipologiaTorneo: this.tipologiaTorneo,
        numeroTeams: this.numeroTeams + '',
        champions: item.champions === undefined ? null : item.champions,
        europa: item.europa === undefined ? null : item.europa,
        intertoto: item.intertoto === undefined ? null : item.intertoto,
        promozione: item.promozione === undefined ? null : item.promozione,
        retrocessione:
          item.retrocessione === undefined ? null : item.retrocessione,
        playoff: item.playoff === undefined ? null : item.playoff,
        playout: item.playout === undefined ? null : item.playout,
      });
    } else {
      this.formatDbService.update(item.id, {
        label: item.label,
        tipologiaTorneo: this.tipologiaTorneo,
        numeroTeams: this.numeroTeams + '',
        champions: item.champions === undefined ? null : item.champions,
        europa: item.europa === undefined ? null : item.europa,
        intertoto: item.intertoto === undefined ? null : item.intertoto,
        promozione: item.promozione === undefined ? null : item.promozione,
        retrocessione:
          item.retrocessione === undefined ? null : item.retrocessione,
        playoff: item.playoff === undefined ? null : item.playoff,
        playout: item.playout === undefined ? null : item.playout,
      });
    }
    this.create = false;

    this.caricaListaFormat();
  }

  onRowEditCancel(item: NumeroTeams, index: number) {
    this.formatDbService.delete(item.id);
    this.lista.splice(index, 1);
    this.create = false;
  }
}
