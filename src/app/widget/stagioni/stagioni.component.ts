import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { StagioniDBService } from 'src/app/database/stagioni-db.service';

@Component({
  selector: 'app-stagioni',
  templateUrl: './stagioni.component.html',
  styleUrls: ['./stagioni.component.css'],
})
export class StagioniComponent implements OnInit {
  @Input() disabled: boolean = false;
  list: SelectItem[];
  selected: string;
  @Output() selezioneStagione = new EventEmitter();

  constructor(private stagioniDbService: StagioniDBService) {
    this.list = [];
  }

  ngOnInit(): void {
    this.stagioniDbService.readAll().then((data) => {
      data.subscribe((listaIn) => {
        let listaDB = listaIn.map((e) => {
          return e.payload.doc.data() as any;
        });

        this.list = listaDB[0].listaStagioni;
      });
    });
  }

  onChange() {
    this.selezioneStagione.emit(this.selected);
  }
}
