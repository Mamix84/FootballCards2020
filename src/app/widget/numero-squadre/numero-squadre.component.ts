import { EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { NumeroTeamsDbService } from 'src/app/database/numero-teams-db.service';
import { NumeroTeams } from 'src/app/model/dominio';

@Component({
  selector: 'app-numero-squadre',
  templateUrl: './numero-squadre.component.html',
  styleUrls: ['./numero-squadre.component.css']
})
export class NumeroSquadreComponent implements OnInit, OnChanges {

  @Input() disabled: boolean = false;
  @Input() tipologiaTorneo: number;
  list: SelectItem[];
  @Input() selected: string;
  @Output() selezioneNumeroSquadre = new EventEmitter();

  constructor(private numeroTeamsDbService: NumeroTeamsDbService) {
    this.list = [];
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.tipologiaTorneo === undefined) return;
    this.callDBService();
  }

  ngOnInit(): void {
    if (this.tipologiaTorneo === undefined) return;
    this.callDBService();
  }

  callDBService(){
    this.numeroTeamsDbService
    .readAllByTipologiaTorneo(this.tipologiaTorneo)
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

        this.list = listaOrdinata;
        this.list.unshift({
          label: 'Seleziona il numero squadre',
          value: null,
        });
      });
    });
  }

  onChange() {
    this.selezioneNumeroSquadre.emit(this.selected);
  }

}
