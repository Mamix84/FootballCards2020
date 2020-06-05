import { Injectable } from '@angular/core';
import { Classifica, ClassificaItem } from '../model/classifica';
import { Evento, Campionato, Giornata } from '../model/campionato';
import { Team } from '../model/team';
import { IfStmt } from '@angular/compiler';
import { CampionatoService } from './campionato.service';

@Injectable({
  providedIn: 'root',
})
export class ClassificaService {
  constructor() {}

  preparaClassifica(listaTeams: Array<Team>): Classifica {
    let classifica = new Classifica();
    classifica.listaTeams = new Array<ClassificaItem>();

    for (let i = 0; i < listaTeams.length; i++) {
      let classificaItem = new ClassificaItem();
      classificaItem.team = listaTeams[i];
      classificaItem.vinte = 0;
      classificaItem.perse = 0;
      classificaItem.pareggiate = 0;
      classificaItem.partiteGiocate = 0;
      classificaItem.punti = 0;
      classificaItem.golFatti = 0;
      classificaItem.golSubiti = 0;
      classificaItem.golFattiC = 0;
      classificaItem.golSubitiC = 0;
      classificaItem.golFattiFC = 0;
      classificaItem.golSubitiFC = 0;

      classifica.listaTeams.push(classificaItem);
    }

    return classifica;
  }

  aggiornaClassifica(
    giornataCorrente: number,
    girone: string,
    campionato: Campionato
  ): Classifica {
    campionato.classifica = new Classifica();
    campionato.classifica = this.preparaClassifica(campionato.listaTeams);

    if (girone === 'R')
      giornataCorrente = campionato.listaTeams.length - 1 + giornataCorrente;

    for (
      let j = 0;
      j < campionato.listaGiornate.length && j < giornataCorrente;
      j++
    ) {
      let listaEventi = campionato.listaGiornate[j].listaEventi;
      for (let i = 0; i < listaEventi.length; i++) {
        let teamC = listaEventi[i].teamC;
        let teamFC = listaEventi[i].teamFC;
        let golC = listaEventi[i].goalC;
        let golFC = listaEventi[i].goalFC;

        if (golC === undefined || golFC === undefined) continue;

        for (let j = 0; j < campionato.classifica.listaTeams.length; j++) {
          if (campionato.classifica.listaTeams[j].team.nome === teamC.nome) {
            if (golC > golFC) {
              campionato.classifica.listaTeams[j].vinte++;
              campionato.classifica.listaTeams[j].punti += 3;
            } else if (golC === golFC) {
              campionato.classifica.listaTeams[j].pareggiate++;
              campionato.classifica.listaTeams[j].punti += 1;
            } else {
              campionato.classifica.listaTeams[j].perse++;
            }

            campionato.classifica.listaTeams[j].partiteGiocate++;
            campionato.classifica.listaTeams[j].golFatti += golC;
            campionato.classifica.listaTeams[j].golSubiti += golFC;
            campionato.classifica.listaTeams[j].golFattiC += golC;
            campionato.classifica.listaTeams[j].golSubitiC += golFC;
          }

          if (campionato.classifica.listaTeams[j].team.nome === teamFC.nome) {
            if (golC > golFC) {
              campionato.classifica.listaTeams[j].perse++;
            } else if (golC === golFC) {
              campionato.classifica.listaTeams[j].pareggiate++;
              campionato.classifica.listaTeams[j].punti += 1;
            } else {
              campionato.classifica.listaTeams[j].vinte++;
              campionato.classifica.listaTeams[j].punti += 3;
            }

            campionato.classifica.listaTeams[j].partiteGiocate++;
            campionato.classifica.listaTeams[j].golFatti += golFC;
            campionato.classifica.listaTeams[j].golSubiti += golC;
            campionato.classifica.listaTeams[j].golFattiFC += golFC;
            campionato.classifica.listaTeams[j].golSubitiFC += golC;
          }
        }
      }
    }

    var classificaOrdinata: ClassificaItem[] = campionato.classifica.listaTeams.sort(
      (obj1, obj2) => {
        if (obj1.punti < obj2.punti) {
          return 1;
        }

        if (obj1.punti > obj2.punti) {
          return -1;
        }

        if (obj1.punti === obj2.punti) {
          if (
            this.puntiClassificaAvulsa(
              obj1,
              obj2,
              giornataCorrente,
              campionato
            ) >
            this.puntiClassificaAvulsa(obj2, obj1, giornataCorrente, campionato)
          ) {
            return -1;
          }

          if (
            this.puntiClassificaAvulsa(
              obj1,
              obj2,
              giornataCorrente,
              campionato
            ) <
            this.puntiClassificaAvulsa(obj2, obj1, giornataCorrente, campionato)
          ) {
            return 1;
          }

          if (
            this.puntiClassificaAvulsa(
              obj1,
              obj2,
              giornataCorrente,
              campionato
            ) ===
            this.puntiClassificaAvulsa(obj2, obj1, giornataCorrente, campionato)
          ) {
            if (
              this.goalClassificaAvulsa(
                obj1,
                obj2,
                giornataCorrente,
                campionato
              ) >
              this.goalClassificaAvulsa(
                obj2,
                obj1,
                giornataCorrente,
                campionato
              )
            ) {
              return -1;
            }

            if (
              this.goalClassificaAvulsa(
                obj1,
                obj2,
                giornataCorrente,
                campionato
              ) <
              this.goalClassificaAvulsa(
                obj2,
                obj1,
                giornataCorrente,
                campionato
              )
            ) {
              return 1;
            }

            if (
              this.goalClassificaAvulsa(
                obj1,
                obj2,
                giornataCorrente,
                campionato
              ) ===
              this.goalClassificaAvulsa(
                obj2,
                obj1,
                giornataCorrente,
                campionato
              )
            ) {
              if (
                obj1.golFatti - obj1.golSubiti >
                obj2.golFatti - obj2.golSubiti
              ) {
                return -1;
              }

              if (
                obj1.golFatti - obj1.golSubiti <
                obj2.golFatti - obj2.golSubiti
              ) {
                return 1;
              }

              if (
                obj1.golFatti - obj1.golSubiti ===
                obj2.golFatti - obj2.golSubiti
              ) {
                return 0;
              }

              return 0;
            }

            return 0;
          }

          return 0;
        }

        return 0;
      }
    );

    let listaPromosse = new Array<Team>();
    let listaretrocesse = new Array<Team>();

    //VERDETTI
    campionato.classifica.listaTeams[0].verdetto = 'vincitore';
    listaPromosse.push(campionato.classifica.listaTeams[0].team);

    if (campionato.format != undefined) {
      if (campionato.format.champions != null) {
        for (let i = 1; i < campionato.format.champions; i++) {
          campionato.classifica.listaTeams[i].verdetto = 'champions';
        }
      }

      if (campionato.format.europa != undefined) {
        for (
          let i = campionato.format.champions;
          i < campionato.format.champions + campionato.format.europa;
          i++
        ) {
          campionato.classifica.listaTeams[i].verdetto = 'europa';
        }
      }

      if (campionato.format.promozione != undefined) {
        for (let i = 1; i < campionato.format.promozione; i++) {
          campionato.classifica.listaTeams[i].verdetto = 'promozione';
          listaPromosse.push(campionato.classifica.listaTeams[i].team);
        }
      }

      if (campionato.format.retrocessione != undefined) {
        for (
          let i = campionato.classifica.listaTeams.length - 1;
          i >
          campionato.classifica.listaTeams.length -
            campionato.format.retrocessione -
            1;
          i--
        ) {
          campionato.classifica.listaTeams[i].verdetto = 'retrocessione';
          listaretrocesse.push(campionato.classifica.listaTeams[i].team);
        }
      }
    }

    campionato.classifica.listaPromosse = listaPromosse;
    campionato.classifica.listaRetrocesse = listaretrocesse;

    campionato.classifica.listaTeams = classificaOrdinata;

    return campionato.classifica;
  }

  puntiClassificaAvulsa(
    teamA: ClassificaItem,
    teamB: ClassificaItem,
    giornataCorrente: number,
    campionato: Campionato
  ): number {
    let punti = 0;

    for (let i = 0; i < giornataCorrente; i++) {
      for (let j = 0; j < campionato.listaGiornate[i].listaEventi.length; j++) {
        if (
          campionato.listaGiornate[i].listaEventi[j].teamC.id ===
            teamA.team.id &&
          campionato.listaGiornate[i].listaEventi[j].teamFC.id === teamB.team.id
        ) {
          if (
            campionato.listaGiornate[i].listaEventi[j].goalC >
            campionato.listaGiornate[i].listaEventi[j].goalFC
          ) {
            punti += 3;
          } else if (
            campionato.listaGiornate[i].listaEventi[j].goalC <
            campionato.listaGiornate[i].listaEventi[j].goalFC
          ) {
            punti += 0;
          } else if (
            campionato.listaGiornate[i].listaEventi[j].goalC ===
            campionato.listaGiornate[i].listaEventi[j].goalFC
          ) {
            punti += 1;
          }
        }

        if (
          campionato.listaGiornate[i].listaEventi[j].teamFC.id ===
            teamA.team.id &&
          campionato.listaGiornate[i].listaEventi[j].teamC.id === teamB.team.id
        ) {
          if (
            campionato.listaGiornate[i].listaEventi[j].goalC >
            campionato.listaGiornate[i].listaEventi[j].goalFC
          ) {
            punti += 0;
          } else if (
            campionato.listaGiornate[i].listaEventi[j].goalC <
            campionato.listaGiornate[i].listaEventi[j].goalFC
          ) {
            punti += 3;
          } else if (
            campionato.listaGiornate[i].listaEventi[j].goalC ===
            campionato.listaGiornate[i].listaEventi[j].goalFC
          ) {
            punti += 1;
          }
        }
      }
    }

    return punti;
  }

  goalClassificaAvulsa(
    teamA: ClassificaItem,
    teamB: ClassificaItem,
    giornataCorrente: number,
    campionato: Campionato
  ): number {
    let goal = 0;

    for (let i = 0; i < giornataCorrente; i++) {
      for (let j = 0; j < campionato.listaGiornate[i].listaEventi.length; j++) {
        if (
          campionato.listaGiornate[i].listaEventi[j].teamC.id ===
            teamA.team.id &&
          campionato.listaGiornate[i].listaEventi[j].teamFC.id === teamB.team.id
        ) {
          goal += campionato.listaGiornate[i].listaEventi[j].goalC;
        }

        if (
          campionato.listaGiornate[i].listaEventi[j].teamFC.id ===
            teamA.team.id &&
          campionato.listaGiornate[i].listaEventi[j].teamC.id === teamB.team.id
        ) {
          goal += campionato.listaGiornate[i].listaEventi[j].goalFC;
        }
      }
    }

    return goal;
  }

  checkVincitore(ultimaGiornata: number, classifica: Classifica): Team {
    let vincitore = true;
    for (let i = 0; i < classifica.listaTeams.length; i++) {
      if (classifica.listaTeams[i].partiteGiocate != ultimaGiornata) {
        vincitore = false;
      }
    }

    if (vincitore) return classifica.listaTeams[0].team;

    return null;
  }

  checkCampioneDInverno(ultimaGiornata: number, classifica: Classifica): Team {
    let vincitore = true;
    for (let i = 0; i < classifica.listaTeams.length; i++) {
      if (classifica.listaTeams[i].partiteGiocate != ultimaGiornata / 2) {
        vincitore = false;
      }
    }

    if (vincitore) return classifica.listaTeams[0].team;

    return null;
  }

  checkConclusioneSpareggi(listaGiornate: Giornata[]): boolean {
    let check = true;

    for (let i = 0; i < listaGiornate.length; i++) {
      for (let j = 0; j < listaGiornate[i].listaEventi.length; j++) {
        if (
          listaGiornate[i].listaEventi[j].goalC === undefined ||
          listaGiornate[i].listaEventi[j].goalFC === undefined
        )
          return false;
      }
    }

    return check;
  }

  aggiornaClassificaSpareggi(
    giornataCorrente: number,
    girone: string,
    campionato: Campionato
  ): Classifica {
    return null;
  }
}
