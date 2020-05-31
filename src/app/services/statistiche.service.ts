import { Injectable } from '@angular/core';
import { Campionato } from '../model/campionato';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root',
})
export class StatisticheService {
  constructor() {}

  preparaAndamentoClassifica(teamA: Team, teamB: Team, campionato: Campionato): any {
    let labels = [];
    for (let i = 0; i < campionato.listaGiornate.length; i++) {
      labels.push(i + 1);
    }


    let puntiC = [];
    let puntiPrec = 0;
    for (let i = 0; i < campionato.listaGiornate.length; i++) {
      for (let j = 0; j < campionato.listaGiornate[i].listaEventi.length; j++) {
        if (
          campionato.listaGiornate[i].listaEventi[j].goalC != undefined &&
          campionato.listaGiornate[i].listaEventi[j].goalFC != undefined
        ) {
          if (
            campionato.listaGiornate[i].listaEventi[j].teamC.nome ===
            teamA.nome
          ) {
            if (
              campionato.listaGiornate[i].listaEventi[j].goalC >
              campionato.listaGiornate[i].listaEventi[j].goalFC
            ) {
              puntiPrec += 3;
            } else if (
              campionato.listaGiornate[i].listaEventi[j].goalC <
              campionato.listaGiornate[i].listaEventi[j].goalFC
            ) {
              puntiPrec += 0;
            } else if (
              campionato.listaGiornate[i].listaEventi[j].goalC ===
              campionato.listaGiornate[i].listaEventi[j].goalFC
            ) {
              puntiPrec += 1;
            }
            puntiC.push(puntiPrec);
          } else if (
            campionato.listaGiornate[i].listaEventi[j].teamFC.nome ===
            teamA.nome
          ) {
            if (
              campionato.listaGiornate[i].listaEventi[j].goalC >
              campionato.listaGiornate[i].listaEventi[j].goalFC
            ) {
              puntiPrec += 0;
            } else if (
              campionato.listaGiornate[i].listaEventi[j].goalC <
              campionato.listaGiornate[i].listaEventi[j].goalFC
            ) {
              puntiPrec += 3;
            } else if (
              campionato.listaGiornate[i].listaEventi[j].goalC ===
              campionato.listaGiornate[i].listaEventi[j].goalFC
            ) {
              puntiPrec += 1;
            }
            puntiC.push(puntiPrec);
          }
        }
      }
    }

    let puntiFC = [];
    puntiPrec = 0;
    for (let i = 0; i < campionato.listaGiornate.length; i++) {
      for (let j = 0; j < campionato.listaGiornate[i].listaEventi.length; j++) {
        if (
          campionato.listaGiornate[i].listaEventi[j].goalC != undefined &&
          campionato.listaGiornate[i].listaEventi[j].goalFC != undefined &&
          teamA != undefined && teamB != undefined
        ) {
          if (
            campionato.listaGiornate[i].listaEventi[j].teamC.nome ===
            teamB.nome
          ) {
            if (
              campionato.listaGiornate[i].listaEventi[j].goalC >
              campionato.listaGiornate[i].listaEventi[j].goalFC
            ) {
              puntiPrec += 3;
            } else if (
              campionato.listaGiornate[i].listaEventi[j].goalC <
              campionato.listaGiornate[i].listaEventi[j].goalFC
            ) {
              puntiPrec += 0;
            } else if (
              campionato.listaGiornate[i].listaEventi[j].goalC ===
              campionato.listaGiornate[i].listaEventi[j].goalFC
            ) {
              puntiPrec += 1;
            }
            puntiFC.push(puntiPrec);
          } else if (
            campionato.listaGiornate[i].listaEventi[j].teamFC.nome ===
            teamB.nome
          ) {
            if (
              campionato.listaGiornate[i].listaEventi[j].goalC >
              campionato.listaGiornate[i].listaEventi[j].goalFC
            ) {
              puntiPrec += 0;
            } else if (
              campionato.listaGiornate[i].listaEventi[j].goalC <
              campionato.listaGiornate[i].listaEventi[j].goalFC
            ) {
              puntiPrec += 3;
            } else if (
              campionato.listaGiornate[i].listaEventi[j].goalC ===
              campionato.listaGiornate[i].listaEventi[j].goalFC
            ) {
              puntiPrec += 1;
            }
            puntiFC.push(puntiPrec);
          }
        }
      }
    }

    let data = {
      labels: labels,
      datasets: [
        {
          label: teamA === undefined ? '' : teamA.nome,
          data: puntiC,
          fill: false,
          borderColor: '#4bc0c0',
        },
        {
          label: teamB === undefined ? '' : teamB.nome,
          data: puntiFC,
          fill: false,
          borderColor: '#565656',
        },
      ],
    };

    return data;
  }
}
