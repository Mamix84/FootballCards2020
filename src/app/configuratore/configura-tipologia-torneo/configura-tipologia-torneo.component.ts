import { Component, OnInit } from '@angular/core';
import { TipologiaTorneo } from 'src/app/model/dominio';
import { TorneiDBService } from 'src/app/database/tornei-db.service';
import tipologia_torneo from '../../../assets/json/tipologia_torneo.json';

@Component({
  selector: 'app-configura-tipologia-torneo',
  templateUrl: './configura-tipologia-torneo.component.html',
  styleUrls: ['./configura-tipologia-torneo.component.css'],
})
export class ConfiguraTipologiaTorneoComponent implements OnInit {
  lista: TipologiaTorneo[];
  clonedLista: { [s: string]: TipologiaTorneo } = {};
  create: boolean = false;

  constructor(private torneiDBService: TorneiDBService) {}

  ngOnInit(): void {
    this.torneiDBService.readAll().subscribe((data) => {
      let listaDB = data.map((e) => {
        let torneo = e.payload.doc.data() as TipologiaTorneo;
        return {
          id: e.payload.doc.id,
          etichetta: torneo.etichetta,
          valore: torneo.valore,
        } as TipologiaTorneo;
      });

      this.lista = listaDB;
      this.ordinaLista();
    });
  }

  ordinaLista() {
    var listaOrdinata: TipologiaTorneo[] = this.lista.sort((obj1, obj2) => {
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
    this.lista.unshift(new TipologiaTorneo());
    this.create = true;
  }

  onRowEditInit(item: TipologiaTorneo, index: number) {
    this.clonedLista[index] = { ...item };
  }

  onRowEditSave(item: TipologiaTorneo, index: number) {
    this.ordinaLista();

    item.etichetta = item.etichetta.toUpperCase();

    if (this.create === true) {
      this.torneiDBService.create({
        etichetta: item.etichetta,
        valore: item.valore,
      });
    } else {
      this.torneiDBService.update(item.id, {
        etichetta: item.etichetta,
        valore: item.valore,
      });
    }
    this.create = false;
  }

  onRowEditCancel(item: TipologiaTorneo, index: number) {
    this.torneiDBService.delete(item.id);
    this.lista.splice(index, 1);
    this.create = false;
  }
}
