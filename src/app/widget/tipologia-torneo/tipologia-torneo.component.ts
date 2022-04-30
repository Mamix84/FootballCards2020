import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { TorneiDBService } from 'src/app/database/tornei-db.service';
import { TipologiaTorneo } from 'src/app/model/dominio';

@Component({
  selector: 'app-tipologia-torneo',
  templateUrl: './tipologia-torneo.component.html',
  styleUrls: ['./tipologia-torneo.component.css'],
})
export class TipologiaTorneoComponent implements OnInit {
  @Input() disabled: boolean = false;
  list: SelectItem[];
  @Input() selected: string;
  @Output() selezioneTipologiaTorneo = new EventEmitter();

  constructor(private torneiDbService: TorneiDBService) {
    this.list = [];
  }

  ngOnInit(): void {
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

        this.list = listaOrdinata;
        this.list.unshift({
          label: 'Seleziona la tipologia torneo',
          value: null,
        });
      });
    });
  }

  onChange() {
    this.selezioneTipologiaTorneo.emit(this.selected);
  }
}
