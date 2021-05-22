import { Injectable } from '@angular/core';
import { Derby } from '../model/team';
import { SelectItem } from 'primeng/api/selectitem';
import lista_derby from '../../assets/json/lista_derby.json';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor() {}

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
