import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-tipologia-risultati',
  templateUrl: './tipologia-risultati.component.html',
  styleUrls: ['./tipologia-risultati.component.css'],
})
export class TipologiaRisultatiComponent implements OnInit {
  @Input() selected: number = 2;
  list: SelectItem[];
  @Output() selezioneTipologiaRisultato = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.list = [];
    this.list.push({ label: 'ISTANTANEO', value: 0 });
    this.list.push({ label: 'IMMEDIATO', value: 1 });
    this.list.push({ label: 'INTERATTIVO', value: 2 });
  }

  onChange() {
    this.selezioneTipologiaRisultato.emit(this.selected + '');
  }
}
