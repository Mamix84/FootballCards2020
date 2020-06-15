import { Component, OnInit } from '@angular/core';
import { StagioniDBService } from 'src/app/database/stagioni-db.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-configura-stagioni',
  templateUrl: './configura-stagioni.component.html',
  styleUrls: ['./configura-stagioni.component.css'],
})
export class ConfiguraStagioniComponent implements OnInit {
  listaStagioni: SelectItem[];

  constructor(private stagioniDbService: StagioniDBService) {}

  ngOnInit(): void {
    this.stagioniDbService.readAll().subscribe((data) => {
      let listaStagioniDB = data.map((e) => {
        return e.payload.doc.data() as any;
      });

      this.listaStagioni = listaStagioniDB[0].listaStagioni;
    });
  }
}
