import { Component, OnInit } from '@angular/core';
import { StagioniDBService } from 'src/app/database/stagioni-db.service';
import { SelectItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-configura-stagioni',
  templateUrl: './configura-stagioni.component.html',
  styleUrls: ['./configura-stagioni.component.css'],
})
export class ConfiguraStagioniComponent implements OnInit {
  listaStagioni: SelectItem[];
  listaStagioniID: string;
  clonedListaStagioni: { [s: string]: SelectItem } = {};

  constructor(
    private stagioniDbService: StagioniDBService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.stagioniDbService.readAll().then((data) => {
      data.subscribe((listaIn) => {
        let listaDB = listaIn.map((e) => {
          this.listaStagioniID = e.payload.doc.id;
          return e.payload.doc.data() as any;
        });

        var listaStagioniOrdinata: SelectItem[] = listaDB[0].listaStagioni.sort((obj1, obj2) => {
          if (obj1.value === null) {
            return -1;
          }

          if (obj2.value === null) {
            return 1;
          }

          let year1 = obj1.value.substr(0, 4);
          let year2 = obj2.value.substr(0, 4);

          if (year1 < year2) {
            return 1;
          } else if (year1 > year2) {
            return -1;
          } else return 0;
        });

        this.listaStagioni = listaStagioniOrdinata;
      });
    });
  }

  aggiungiNuovaConfigurazione() {
    this.listaStagioni.unshift({
      label: 'Inserisci etichetta',
      value: 'Inserisci valore',
    });
  }

  onRowEditInit(item: SelectItem, index: number) {
    this.clonedListaStagioni[index] = { ...item };
  }

  onRowEditSave(item: SelectItem, index: number) {
    var listaStagioniOrdinata: SelectItem[] = this.listaStagioni.sort(
      (obj1, obj2) => {
        if (obj1.value === null) {
          return -1;
        }

        if (obj2.value === null) {
          return 1;
        }

        let year1 = obj1.value.substr(0, 4);
        let year2 = obj2.value.substr(0, 4);

        if (year1 < year2) {
          return 1;
        } else if (year1 > year2) {
          return -1;
        } else return 0;
      }
    );
    this.listaStagioni = listaStagioniOrdinata;

    //this.stagioniDbService.update(this.listaStagioniID, listaStagioniOrdinata);
  }

  onRowEditCancel(item: SelectItem, index: number) {
    this.listaStagioni.splice(index, 1);
    //this.stagioniDbService.update(this.listaStagioniID, listaStagioniOrdinata);
  }
}
