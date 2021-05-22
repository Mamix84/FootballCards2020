import { Component, OnInit } from '@angular/core';
import { TeamsDBService } from 'src/app/database/teams-db.service';
import { Team } from 'src/app/model/team';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-configura-lista-teams',
  templateUrl: './configura-lista-teams.component.html',
  styleUrls: ['./configura-lista-teams.component.css'],
})
export class ConfiguraListaTeamsComponent implements OnInit {
  listaTeams: Team[] = [];
  listaStagioniID: string;
  clonedListaTeams: { [s: string]: Team } = {};
  uploadedFiles: any[] = [];
  create: boolean = false;

  constructor(
    private teamsDbService: TeamsDBService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.caricaListaTeams();
  }

  caricaListaTeams() {
    this.teamsDbService.readAll().then((data) => {
      data.subscribe((listaIn) => {
        let listaDB = listaIn.map((e) => {
          let team = e.payload.doc.data() as Team;
          return {
            idTecnico: e.payload.doc.id,
            id: team.id,
            nome: team.nome,
            logo: '/assets%2Fimages%2Fteams%2F' + team.nome.toLowerCase() + '.png',
            valoreTecnico: team.valoreTecnico,
          } as Team;
        });

        this.listaTeams = listaDB;
        this.ordinaLista();
      });
    });
  }

  ordinaLista() {
    var listaTeamsOrdinata: Team[] = this.listaTeams.sort((obj1, obj2) => {
      if (obj1.id === null) {
        return -1;
      }

      if (obj2.id === null) {
        return 1;
      }

      let year1 = obj1.id;
      let year2 = obj2.id;

      if (year1 < year2) {
        return -1;
      } else if (year1 > year2) {
        return 1;
      } else return 0;
    });
    this.listaTeams = listaTeamsOrdinata;
  }

  aggiungiNuovaConfigurazione() {
    this.listaTeams.unshift({
      idTecnico: null,
      id: this.listaTeams.length + 1,
      nome: null,
      logo: null,
      valoreTecnico: null,
    });
    this.create = true;
  }

  onRowEditInit(item: Team, index: number) {
    this.clonedListaTeams[index] = { ...item };
  }

  onRowEditSave(item: Team, index: number) {
    this.ordinaLista();

    if (this.create === true) {
      this.teamsDbService.create({
        id: item.id,
        nome: item.nome.toUpperCase(),
        logo: '/assets/images/teams/' + item.nome.toLowerCase() + '.png',
        valoreTecnico: item.valoreTecnico,
      });

      for (let file of this.uploadedFiles) {
        this.pushFileToStorage(file);
      }
    } else {
      this.teamsDbService.update(item.idTecnico, {
        id: item.id,
        nome: item.nome.toUpperCase(),
        logo: '/assets/images/teams/' + item.nome.toLowerCase() + '.png',
        valoreTecnico: item.valoreTecnico,
      });
    }
    this.create = false;
    this.uploadedFiles = [];

    this.caricaListaTeams();
  }

  onRowEditCancel(item: Team, index: number) {
    this.teamsDbService.delete(item.idTecnico);
    this.listaTeams.splice(index, 1);
    this.create = false;
    this.uploadedFiles = [];
  }

  onBasicUploadAuto(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  pushFileToStorage(fileUpload: File) {
    const filePath = '/assets/images/teams/' + fileUpload.name;
    const uploadTask = this.storage.upload(filePath, fileUpload);

    uploadTask.snapshotChanges();
  }
}
