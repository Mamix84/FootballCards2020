import { Injectable } from '@angular/core';
import { Derby, Team } from '../model/team';
import { SelectItem } from 'primeng/api/selectitem';
import lista_derby from '../../assets/json/lista_derby.json';
import { TeamsDBService } from '../database/teams-db.service';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private listaTeams = [];

  constructor(private teamsDbService: TeamsDBService) {}

  caricaListaStracittadine(): Array<Derby> {
    let listaDerby = lista_derby.listaDerby;

    return listaDerby;
  }

  caricaListaValoriTecnici(): SelectItem[] {
    let listaValoriTecnici = [];

    for (let i = 110; i > 0; i -= 5) {
      listaValoriTecnici.push({ label: i, value: i });
    }

    return listaValoriTecnici;
  }

  caricaListaTeam() {
    let promise = new Promise((resolve, reject) => {
      if (this.listaTeams.length > 0) {
        resolve(this.listaTeams);
      } else {
        this.teamsDbService.readAll().then((res) => {
          res.subscribe((listaIn) => {
            let listaDB = listaIn.map((e) => {
              let team = e.payload.doc.data() as Team;
              return {
                idTecnico: e.payload.doc.id,
                id: team.id,
                nome: team.nome,
                logo:
                  '/assets%2Fimages%2Fteams%2F' +
                  team.nome.toLowerCase() +
                  '.png',
                valoreTecnico: team.valoreTecnico,
              } as Team;
            });

            var listaTeamsOrdinata: Team[] = listaDB.sort((obj1, obj2) => {
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

            let listaTeamsItems = [];

            listaTeamsItems.push({ label: 'Seleziona squadra', value: null });

            for (let i = 0; i < listaTeamsOrdinata.length; i++) {
              listaTeamsItems.push({
                label: listaTeamsOrdinata[i].nome,
                value: listaTeamsOrdinata[i],
              });
            }

            this.listaTeams = listaTeamsItems;

            resolve(listaTeamsItems);
          });
        });
      }
    });

    return promise;
  }

  svuotaListaTeams(){
    this.listaTeams = [];
  }
}
