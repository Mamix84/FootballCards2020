import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { FormatDbService } from 'src/app/database/format-db.service';
import { FormatDominio } from 'src/app/model/dominio';

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrls: ['./format.component.css']
})
export class FormatComponent implements OnInit {


  @Input() disabled: boolean = false;
  @Input() tipologiaTorneo: number;
  @Input() numeroTeams: number;
  list: SelectItem[];
  @Input() selected: string;
  @Output() selezioneFormat = new EventEmitter();

  constructor(private formatDbService: FormatDbService) {
    this.list = [];
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      this.tipologiaTorneo === undefined ||
      this.numeroTeams === undefined
    )
      return;
    this.callDBService();
  }

  ngOnInit(): void {
    if (
      this.tipologiaTorneo === undefined ||
      this.numeroTeams === undefined
    )
      return;
    this.callDBService();
  }

  callDBService(){
    this.formatDbService
      .readAllByFilters(
        this.tipologiaTorneo,
        this.numeroTeams + ''
      )
      .then((data) => {
        data.subscribe((listaIn) => {
          let listaDB = listaIn.map((e) => {
            let format = e.payload.doc.data() as FormatDominio;
            return {
              label: format.label,
              value: {
                tipologiaTorneo: format.tipologiaTorneo,
                numeroTeams: format.numeroTeams,
                champions: format.champions,
                europa: format.europa,
                intertoto: format.intertoto,
                promozione: format.promozione,
                retrocessione: format.retrocessione,
                playoff: format.playoff,
                playout: format.playout,
              },
            } as SelectItem;
          });

          this.list = listaDB;
          this.list.unshift({
            label: 'Seleziona il format del torneo',
            value: null,
          });
        });
      });
  }

  onChange() {
    this.selezioneFormat.emit(this.selected);
  }


}
