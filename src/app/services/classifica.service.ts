import { Injectable } from '@angular/core';
import { Classifica, ClassificaItem } from '../model/classifica';
import { Evento, Campionato } from '../model/campionato';
import { Team } from '../model/team';
import { IfStmt } from '@angular/compiler';
import { CampionatoService } from './campionato.service';

@Injectable({
  providedIn: 'root',
})
export class ClassificaService {
  classifica = new Classifica();

  constructor() {}

  preparaClassifica(listaTeams: Array<Team>) {
    this.classifica.listaTeams = new Array<ClassificaItem>();

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

      this.classifica.listaTeams.push(classificaItem);
    }
  }

  caricaClassifica(): Classifica {
    return this.classifica;
  }

  aggiornaClassifica(
    giornataCorrente: number,
    girone: string,
    campionato: Campionato
  ): Classifica {
    this.classifica = new Classifica();
    this.preparaClassifica(campionato.listaTeams);

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

        for (let j = 0; j < this.classifica.listaTeams.length; j++) {
          if (this.classifica.listaTeams[j].team.nome === teamC.nome) {
            if (golC > golFC) {
              this.classifica.listaTeams[j].vinte++;
              this.classifica.listaTeams[j].punti += 3;
            } else if (golC === golFC) {
              this.classifica.listaTeams[j].pareggiate++;
              this.classifica.listaTeams[j].punti += 1;
            } else {
              this.classifica.listaTeams[j].perse++;
            }

            this.classifica.listaTeams[j].partiteGiocate++;
            this.classifica.listaTeams[j].golFatti += golC;
            this.classifica.listaTeams[j].golSubiti += golFC;
            this.classifica.listaTeams[j].golFattiC += golC;
            this.classifica.listaTeams[j].golSubitiC += golFC;
          }

          if (this.classifica.listaTeams[j].team.nome === teamFC.nome) {
            if (golC > golFC) {
              this.classifica.listaTeams[j].perse++;
            } else if (golC === golFC) {
              this.classifica.listaTeams[j].pareggiate++;
              this.classifica.listaTeams[j].punti += 1;
            } else {
              this.classifica.listaTeams[j].vinte++;
              this.classifica.listaTeams[j].punti += 3;
            }

            this.classifica.listaTeams[j].partiteGiocate++;
            this.classifica.listaTeams[j].golFatti += golFC;
            this.classifica.listaTeams[j].golSubiti += golC;
            this.classifica.listaTeams[j].golFattiFC += golFC;
            this.classifica.listaTeams[j].golSubitiFC += golC;
          }
        }
      }
    }

    var classificaOrdinata: ClassificaItem[] = this.classifica.listaTeams.sort(
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
    this.classifica.listaTeams[0].verdetto = 'vincitore';
    listaPromosse.push(this.classifica.listaTeams[0].team);

    if (campionato.format != undefined) {
      if (campionato.format.champions != null) {
        for (let i = 1; i < campionato.format.champions; i++) {
          this.classifica.listaTeams[i].verdetto = 'champions';
        }
      }

      if (campionato.format.europa != undefined) {
        for (
          let i = campionato.format.champions;
          i < campionato.format.champions + campionato.format.europa;
          i++
        ) {
          this.classifica.listaTeams[i].verdetto = 'europa';
        }
      }

      if (campionato.format.promozione != undefined) {
        for (let i = 1; i < campionato.format.promozione; i++) {
          this.classifica.listaTeams[i].verdetto = 'promozione';
          listaPromosse.push(this.classifica.listaTeams[i].team);
        }
      }

      if (campionato.format.retrocessione != undefined) {
        for (
          let i = this.classifica.listaTeams.length - 1;
          i >
          this.classifica.listaTeams.length -
            campionato.format.retrocessione -
            1;
          i--
        ) {
          this.classifica.listaTeams[i].verdetto = 'retrocessione';
          listaretrocesse.push(this.classifica.listaTeams[i].team);
        }
      }
    }

    this.classifica.listaPromosse = listaPromosse;
    this.classifica.listaRetrocesse = listaretrocesse;

    this.classifica.listaTeams = classificaOrdinata;

    return this.classifica;
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

  checkVincitore(ultimaGiornata: number): Team {
    let vincitore = true;
    for (let i = 0; i < this.classifica.listaTeams.length; i++) {
      if (this.classifica.listaTeams[i].partiteGiocate != ultimaGiornata) {
        vincitore = false;
      }
    }

    if (vincitore) return this.classifica.listaTeams[0].team;

    return null;
  }

  checkCampioneDInverno(ultimaGiornata: number): Team {
    let vincitore = true;
    for (let i = 0; i < this.classifica.listaTeams.length; i++) {
      if (this.classifica.listaTeams[i].partiteGiocate != ultimaGiornata / 2) {
        vincitore = false;
      }
    }

    if (vincitore) return this.classifica.listaTeams[0].team;

    return null;
  }
}
