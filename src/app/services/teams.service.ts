import { Injectable } from '@angular/core';
import { Team, Derby } from '../model/team';
import { SelectItem } from 'primeng/api/selectitem';
import lista_teams from '../../assets/json/lista_teams.json';
import lista_derby from '../../assets/json/lista_derby.json';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor() {}

  caricaListaTeam(): Array<Team> {
    let listaTeam = lista_teams.listaTeam;

    return listaTeam;
  }

  caricaListaTeamItems(): SelectItem[] {
    let listaTeamsItems = [];

    let listaTeams = this.caricaListaTeam();

    listaTeamsItems.push({ label: 'Seleziona squadra', value: null });

    for (let i = 0; i < listaTeams.length; i++) {
      listaTeamsItems.push({ label: listaTeams[i].nome, value: listaTeams[i] });
    }

    return listaTeamsItems;
  }

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
}
