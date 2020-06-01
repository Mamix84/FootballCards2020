import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Team } from '../model/team';
import { Giornata, Evento, Campionato } from '../model/campionato';
import { StorageService } from './storage.service';
import { Salvataggio } from '../model/files';
import { TeamsService } from './teams.service';
import tipologia_torneo from '../../assets/json/tipologia_torneo.json';
import lista_stagioni from '../../assets/json/lista_stagioni.json';
import tipologie_risultati from '../../assets/json/tipologie_risultati.json';

@Injectable({
  providedIn: 'root',
})
export class CampionatoService {
  constructor(
    private storageService: StorageService,
    private teamService: TeamsService
  ) {}

  caricaStagioni(): SelectItem[] {
    let listaStagioni = lista_stagioni.listaStagioni;

    return listaStagioni;
  }

  caricaNumeroSquadre(tipologiaTorneo: number): SelectItem[] {
    let listaNunmeroSquadre = [];

    listaNunmeroSquadre.push({
      label: 'Seleziona il numero di squadre',
      value: null,
    });

    switch (tipologiaTorneo) {
      case 0:
        for (let i = 16; i < 21; i += 2) {
          listaNunmeroSquadre.push({
            label: 'Girone A/R con ' + i + ' Squadre',
            value: i + '',
          });
        }
        break;

      case 1:
        for (let i = 16; i < 21; i += 2) {
          listaNunmeroSquadre.push({
            label: 'Girone A/R con ' + i + ' Squadre',
            value: i + '',
          });
        }
        break;

      case 2:
        for (let i = 16; i < 21; i += 2) {
          listaNunmeroSquadre.push({
            label: 'Girone A/R con ' + i + ' Squadre',
            value: i + '',
          });
        }
        break;

      case 3:
        for (let i = 16; i < 21; i += 2) {
          listaNunmeroSquadre.push({
            label: 'Girone A/R con ' + i + ' Squadre',
            value: i + '',
          });
        }
        break;

      case 4:
        for (let i = 16; i < 21; i += 2) {
          listaNunmeroSquadre.push({
            label: 'Girone A/R con ' + i + ' Squadre',
            value: i + '',
          });
        }
        break;

      case 5:
        for (let i = 16; i < 21; i += 2) {
          listaNunmeroSquadre.push({
            label: 'Girone A/R con ' + i + ' Squadre',
            value: i + '',
          });
        }
        break;

      case 6:
        for (let i = 14; i < 19; i += 2) {
          listaNunmeroSquadre.push({
            label: 'Girone A/R con ' + i + ' Squadre',
            value: i + '',
          });
        }
        break;

      case 7:
        for (let i = 14; i < 19; i += 2) {
          listaNunmeroSquadre.push({
            label: 'Girone A/R con ' + i + ' Squadre',
            value: i + '',
          });
        }
        break;

      case 8:
        for (let i = 14; i < 19; i += 2) {
          listaNunmeroSquadre.push({
            label: 'Girone A/R con ' + i + ' Squadre',
            value: i + '',
          });
        }
        break;

      case 9:
        for (let i = 4; i < 23; i += 2) {
          listaNunmeroSquadre.push({
            label: 'Girone A/R con ' + i + ' Squadre',
            value: i + '',
          });
        }
        break;
    }

    return listaNunmeroSquadre;
  }

  caricaTipologieTorneo(): SelectItem[] {
    let listaTipologieTorneo = tipologia_torneo.listaTipologieTorneo;

    return listaTipologieTorneo;
  }

  caricaFormatCampionato(
    tipologiaTorneo: number,
    numeroTeams: string
  ): SelectItem[] {
    let listaFormat = [];

    listaFormat.push({
      label: 'Seleziona la tipologia di format del torneo',
      value: null,
    });

    switch (tipologiaTorneo) {
      case 0: {
        switch (numeroTeams) {
          case '16': {
            listaFormat.push({
              label:
                'VINCITORE / 4 CHAMPIONS LEAGUE / 4 EUROPA LEAGUE / 3 RETROCESSIONI IN SERIE B',
              value: {
                champions: 4,
                europa: 4,
                intertoto: undefined,
                promozione: undefined,
                retrocessione: 3,
                playoff: undefined,
                playout: undefined,
              },
            });
            listaFormat.push({
              label:
                'VINCITORE / 3 CHAMPIONS LEAGUE / 3 EUROPA LEAGUE / 3 RETROCESSIONI IN SERIE B',
              value: {
                champions: 3,
                europa: 3,
                intertoto: undefined,
                promozione: undefined,
                retrocessione: 3,
                playoff: undefined,
                playout: undefined,
              },
            });

            break;
          }
          case '18': {
            listaFormat.push({
              label:
                'VINCITORE / 4 CHAMPIONS LEAGUE / 4 EUROPA LEAGUE / 4 RETROCESSIONI IN SERIE B',
              value: {
                champions: 4,
                europa: 4,
                intertoto: undefined,
                promozione: undefined,
                retrocessione: 4,
                playoff: undefined,
                playout: undefined,
              },
            });
            listaFormat.push({
              label:
                'VINCITORE / 4 CHAMPIONS LEAGUE / 4 EUROPA LEAGUE / 3 RETROCESSIONI IN SERIE B',
              value: {
                champions: 4,
                europa: 4,
                intertoto: undefined,
                promozione: undefined,
                retrocessione: 3,
                playoff: undefined,
                playout: undefined,
              },
            });
            break;
          }
          case '20': {
            listaFormat.push({
              label:
                'VINCITORE / 4 CHAMPIONS LEAGUE / 4 EUROPA LEAGUE / 4 RETROCESSIONI IN SERIE B',
              value: {
                champions: 4,
                europa: 4,
                intertoto: undefined,
                promozione: undefined,
                retrocessione: 4,
                playoff: undefined,
                playout: undefined,
              },
            });
            break;
          }
        }

        break;
      }
      case 1: {
        switch (numeroTeams) {
          case '16': {
            listaFormat.push({
              label:
                'VINCITORE / 3 PROMOSSE IN SERIE A / 4 RETROCESSIONI IN SERIE C',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 3,
                retrocessione: 4,
                playoff: undefined,
                playout: undefined,
              },
            });

            break;
          }
          case '18': {
            listaFormat.push({
              label:
                'VINCITORE / 4 PROMOSSE IN SERIE A / 4 RETROCESSIONI IN SERIE C',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 4,
                retrocessione: 4,
                playoff: undefined,
                playout: undefined,
              },
            });
            listaFormat.push({
              label:
                'VINCITORE / 3 PROMOSSE IN SERIE A / 4 RETROCESSIONI IN SERIE C',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 3,
                retrocessione: 4,
                playoff: undefined,
                playout: undefined,
              },
            });
            listaFormat.push({
              label:
                'VINCITORE / 2 PROMOSSE IN SERIE A / 4 RETROCESSIONI IN SERIE C',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 2,
                retrocessione: 4,
                playoff: undefined,
                playout: undefined,
              },
            });
            break;
          }
          case '20': {
            listaFormat.push({
              label:
                'VINCITORE / 4 PROMOSSE IN SERIE A / 4 RETROCESSIONI IN SERIE C',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 4,
                retrocessione: 4,
                playoff: undefined,
                playout: undefined,
              },
            });
            break;
          }
        }

        break;
      }
      case 2: {
        switch (numeroTeams) {
          case '16': {
            listaFormat.push({
              label:
                'VINCITORE / 2 PROMOSSE IN SERIE B / 3 RETROCESSIONI IN SERIE D',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 2,
                retrocessione: 3,
                playoff: undefined,
                playout: undefined,
              },
            });
            listaFormat.push({
              label:
                'VINCITORE / 2 PROMOSSE IN SERIE B / 4 RETROCESSIONI IN SERIE D',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 2,
                retrocessione: 4,
                playoff: undefined,
                playout: undefined,
              },
            });

            break;
          }
          case '18': {
            listaFormat.push({
              label:
                'VINCITORE / 2 PROMOSSE IN SERIE B / 4 RETROCESSIONI IN SERIE D',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 2,
                retrocessione: 4,
                playoff: undefined,
                playout: undefined,
              },
            });
            listaFormat.push({
              label:
                'VINCITORE / 2 PROMOSSE IN SERIE B / 3 RETROCESSIONI IN SERIE D',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 2,
                retrocessione: 3,
                playoff: undefined,
                playout: undefined,
              },
            });
            listaFormat.push({
              label:
                'VINCITORE / 2 PROMOSSE IN SERIE B (PLAYOFF) / 9 RETROCESSIONI IN SERIE D',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 2,
                retrocessione: 9,
                playoff: 2,
                playout: undefined,
              },
            });
            break;
          }
          case '20': {
            listaFormat.push({
              label:
                'VINCITORE / 2 PROMOSSE IN SERIE B (PLAYOFF) / 10 RETROCESSIONI IN SERIE D',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 2,
                retrocessione: 10,
                playoff: 2,
                playout: undefined,
              },
            });
            break;
          }
        }

        break;
      }
      case 3: {
        switch (numeroTeams) {
          case '16': {
            listaFormat.push({
              label:
                'VINCITORE / 2 PROMOSSE IN SERIE C (PLAYOFF) / 4 RETROCESSIONI IN SERIE ECCELLENZA',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 2,
                retrocessione: 4,
                playoff: 2,
                playout: undefined,
              },
            });

            break;
          }

          case '18': {
            listaFormat.push({
              label:
                'VINCITORE / 2 PROMOSSE IN SERIE C (PLAYOFF) / 4 RETROCESSIONI IN SERIE ECCELLENZA',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 2,
                retrocessione: 4,
                playoff: 2,
                playout: undefined,
              },
            });
            listaFormat.push({
              label:
                'VINCITORE / 2 PROMOSSE IN SERIE C (PLAYOFF) / 9 RETROCESSIONI IN SERIE ECCELLENZA',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 2,
                retrocessione: 9,
                playoff: 2,
                playout: undefined,
              },
            });

            break;
          }

          case '20': {
            listaFormat.push({
              label:
                'VINCITORE / 2 PROMOSSE IN SERIE C (PLAYOFF) / 10 RETROCESSIONI IN SERIE ECCELLENZA',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 2,
                retrocessione: 10,
                playoff: 2,
                playout: undefined,
              },
            });

            break;
          }
        }
        break;
      }
      case 4: {
        break;
      }
      case 5: {
        break;
      }
      case 6: {
        break;
      }
      case 7: {
        break;
      }
      case 8: {
        break;
      }
      case 9: {
        switch (numeroTeams) {
          case '4': {
            listaFormat.push({
              label:
                'VINCITORE / 1 RETROCESSIONE TORNEO LOW',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: undefined,
                retrocessione: 1,
                playoff: undefined,
                playout: undefined,
              },
            });
            listaFormat.push({
              label:
                'VINCITORE / 1 PROMOSSE IN TORNEO PRO / 1 RETROCESSIONE TORNEO LOW',
              value: {
                champions: undefined,
                europa: undefined,
                intertoto: undefined,
                promozione: 1,
                retrocessione: 1,
                playoff: undefined,
                playout: undefined,
              },
            });
            break;
          }
        }
      }
    }

    return listaFormat;
  }

  generaCalendario(
    campionato: Campionato,
    listaTeams: Array<Team>
  ): Array<Giornata> {
    let ymin = Math.ceil(0);
    let ymax = Math.floor(50);
    let round = Math.floor(Math.random() * (ymax - ymin)) + ymin;
    for (let i = 0; i < round; i++) {
      let ymin = Math.ceil(0);
      let ymax = Math.floor(listaTeams.length - 1);
      let position = Math.floor(Math.random() * (ymax - ymin)) + ymin;

      let riporto = listaTeams.splice(position, 1);
      listaTeams.push(riporto[0]);
    }

    campionato.listaTeams = listaTeams;

    let listaGiornateAndata = new Array<Giornata>();
    let listaGiornateRitorno = new Array<Giornata>();

    let numero_squadre = listaTeams.length;
    let giornate = numero_squadre - 1;

    /* crea gli array per le due liste in casa e fuori */
    let casa = new Array<Team>();
    let trasferta = new Array<Team>();

    for (let i = 0; i < numero_squadre / 2; i++) {
      casa.push(listaTeams[i]);
      trasferta.push(listaTeams[numero_squadre - 1 - i]);
    }

    for (let i = 0; i < giornate; i++) {
      let giornataAndata = new Giornata();
      giornataAndata.numeroGiornata = i + 1;
      giornataAndata.girone = 'A';
      let listaEventiAndata = new Array<Evento>();
      giornataAndata.listaEventi = listaEventiAndata;

      let giornataRitorno = new Giornata();
      giornataRitorno.numeroGiornata = i + 1;
      giornataRitorno.girone = 'R';
      let listaEventiRitorno = new Array<Evento>();
      giornataRitorno.listaEventi = listaEventiRitorno;

      for (let j = 0; j < numero_squadre / 2; j++) {
        let eventoAndata = new Evento();
        eventoAndata.id = (j + 1) * 100 + giornataAndata.numeroGiornata;

        let eventoRitorno = new Evento();
        eventoRitorno.id = (j + 1) * 100 + giornataRitorno.numeroGiornata;

        if (
          this.checkStracittadineCasa(casa[j], giornataAndata.listaEventi) ===
          true
        ) {
          eventoAndata.teamC = trasferta[j];
          eventoAndata.teamFC = casa[j];

          eventoRitorno.teamC = casa[j];
          eventoRitorno.teamFC = trasferta[j];
        } else if (
          this.checkStracittadineTrasferta(
            trasferta[j],
            giornataAndata.listaEventi
          ) === true
        ) {
          eventoAndata.teamC = trasferta[j];
          eventoAndata.teamFC = casa[j];

          eventoRitorno.teamC = casa[j];
          eventoRitorno.teamFC = trasferta[j];
        } else {
          if (i % 2 === 0) {
            eventoAndata.teamC = casa[j];
            eventoAndata.teamFC = trasferta[j];

            eventoRitorno.teamC = trasferta[j];
            eventoRitorno.teamFC = casa[j];
          } else {
            eventoAndata.teamC = trasferta[j];
            eventoAndata.teamFC = casa[j];

            eventoRitorno.teamC = casa[j];
            eventoRitorno.teamFC = trasferta[j];

            if (
              this.checkStracittadineCasa(
                trasferta[j],
                giornataAndata.listaEventi
              ) === true ||
              this.checkStracittadineTrasferta(
                casa[j],
                giornataAndata.listaEventi
              ) === true
            ) {
              eventoAndata.teamC = casa[j];
              eventoAndata.teamFC = trasferta[j];

              eventoRitorno.teamC = trasferta[j];
              eventoRitorno.teamFC = casa[j];
            }
          }
        }

        giornataAndata.listaEventi.push(eventoAndata);
        giornataRitorno.listaEventi.push(eventoRitorno);
      }

      let eventoKOA = 0;
      let eventoKOR = 0;
      let cnt = 0;
      do {
        cnt++;
        eventoKOA = this.checkStracittadineGiornata(giornataAndata);
        eventoKOR = this.checkStracittadineGiornata(giornataRitorno);

        if (eventoKOA > 0) {
          let pivot = giornataAndata.listaEventi[eventoKOA].teamC;
          giornataAndata.listaEventi[eventoKOA].teamC =
            giornataAndata.listaEventi[eventoKOA].teamFC;
          giornataAndata.listaEventi[eventoKOA].teamFC = pivot;
        }

        var listaEventiOrdinatiAndata: Evento[] = giornataAndata.listaEventi.sort(
          (obj1, obj2) => {
            if (obj1.teamC.nome < obj2.teamC.nome) {
              return -1;
            }

            if (obj1.teamC.nome > obj2.teamC.nome) {
              return 1;
            }

            return 0;
          }
        );
        giornataAndata.listaEventi = listaEventiOrdinatiAndata;

        if (eventoKOR > 0) {
          let pivot = giornataRitorno.listaEventi[eventoKOR].teamC;
          giornataRitorno.listaEventi[eventoKOR].teamC =
            giornataRitorno.listaEventi[eventoKOR].teamFC;
          giornataRitorno.listaEventi[eventoKOR].teamFC = pivot;
        }

        var listaEventiOrdinatiRitorno: Evento[] = giornataRitorno.listaEventi.sort(
          (obj1, obj2) => {
            if (obj1.teamC.nome < obj2.teamC.nome) {
              return -1;
            }

            if (obj1.teamC.nome > obj2.teamC.nome) {
              return 1;
            }

            return 0;
          }
        );
        giornataRitorno.listaEventi = listaEventiOrdinatiRitorno;
        if (cnt > 4) break;
      } while (eventoKOA > 0 && eventoKOR > 0);

      listaGiornateAndata.push(giornataAndata);
      listaGiornateRitorno.push(giornataRitorno);

      let pivot = casa[0];

      let riporto = trasferta.pop();
      trasferta.unshift(casa[1]);

      casa.shift();
      casa.push(riporto);

      casa[0] = pivot;
    }
    campionato.listaGiornate = listaGiornateAndata.concat(listaGiornateRitorno);
    return campionato.listaGiornate;
  }

  checkStracittadineGiornata(giornata: Giornata): number {
    let eventoKO = 0;

    for (let i = 1; i < giornata.listaEventi.length; i++) {
      if (
        this.checkStracittadineCasa(
          giornata.listaEventi[i].teamC,
          giornata.listaEventi
        ) === true ||
        this.checkStracittadineTrasferta(
          giornata.listaEventi[i].teamFC,
          giornata.listaEventi
        ) === true
      ) {
        return i;
      }
    }

    return eventoKO;
  }

  checkStracittadineCasa(team: Team, listaEventi: Array<Evento>): boolean {
    let check: boolean = false;
    let listaDerby = this.teamService.caricaListaStracittadine();

    for (let j = 0; j < listaDerby.length; j++) {
      if (listaDerby[j].teamA.id === team.id) {
        for (let i = 0; i < listaEventi.length; i++) {
          if (
            listaEventi[i].teamC.id === team.id ||
            listaEventi[i].teamFC.id === team.id
          )
            break;
          if (listaDerby[j].teamB.id === listaEventi[i].teamC.id) check = true;
        }
      }

      if (listaDerby[j].teamB.id === team.id) {
        for (let i = 0; i < listaEventi.length; i++) {
          if (
            listaEventi[i].teamC.id === team.id ||
            listaEventi[i].teamFC.id === team.id
          )
            break;
          if (listaDerby[j].teamA.id === listaEventi[i].teamC.id) check = true;
        }
      }
    }

    return check;
  }

  checkStracittadineTrasferta(team: Team, listaEventi: Array<Evento>): boolean {
    let check: boolean = false;
    let listaDerby = this.teamService.caricaListaStracittadine();

    for (let j = 0; j < listaDerby.length; j++) {
      if (listaDerby[j].teamA.id === team.id) {
        for (let i = 0; i < listaEventi.length; i++) {
          if (
            listaEventi[i].teamC.id === team.id ||
            listaEventi[i].teamFC.id === team.id
          )
            break;
          if (listaDerby[j].teamB.id === listaEventi[i].teamFC.id) check = true;
        }
      }

      if (listaDerby[j].teamB.id === team.id) {
        for (let i = 0; i < listaEventi.length; i++) {
          if (
            listaEventi[i].teamC.id === team.id ||
            listaEventi[i].teamFC.id === team.id
          )
            break;
          if (listaDerby[j].teamA.id === listaEventi[i].teamFC.id) check = true;
        }
      }
    }

    return check;
  }

  caricaGiornata(numeroGiornata: number, campionato: Campionato): Giornata {
    return campionato.listaGiornate[numeroGiornata];
  }

  caricaCampionato(idCampionato: string): Campionato {
    let campionato = JSON.parse(this.storageService.get(idCampionato));

    return campionato;
  }

  salvaCampionato(campionato: Campionato) {
    if (this.storageService.get(campionato.id) === null) {
      //Primo salvataggio
      let listaSalvataggi: Array<Salvataggio> = JSON.parse(
        this.storageService.get('salvataggi')
      );

      if (listaSalvataggi === null) {
        //Primo salvataggio
        let salvataggio = new Salvataggio();
        salvataggio.idCampionato = campionato.id;
        salvataggio.descrizione = campionato.denominazioneLega;
        salvataggio.numeroTeams = campionato.numeroTeams;
        salvataggio.stagione = campionato.stagione;
        salvataggio.dataCreazione = new Date();
        salvataggio.dataUltimoSalvataggio = new Date();

        listaSalvataggi = new Array<Salvataggio>();
        listaSalvataggi.push(salvataggio);

        this.storageService.set('salvataggi', JSON.stringify(listaSalvataggi));
      } else {
        //Salvataggi successivi

        let aggiornato = false;
        for (let i = 0; i < listaSalvataggi.length; i++) {
          if (listaSalvataggi[i].idCampionato === campionato.id) {
            listaSalvataggi[i].dataUltimoSalvataggio = new Date();
            aggiornato = true;
          }
        }

        if (aggiornato === false) {
          let salvataggio = new Salvataggio();
          salvataggio.idCampionato = campionato.id;
          salvataggio.descrizione = campionato.denominazioneLega;
          salvataggio.numeroTeams = campionato.numeroTeams;
          salvataggio.stagione = campionato.stagione;
          salvataggio.dataCreazione = new Date();
          salvataggio.dataUltimoSalvataggio = new Date();

          listaSalvataggi.push(salvataggio);
        }

        this.storageService.remove('salvataggi');
        this.storageService.set('salvataggi', JSON.stringify(listaSalvataggi));
      }

      this.storageService.set(campionato.id, JSON.stringify(campionato));
    } else {
      //Aggiornameto
      this.storageService.remove(campionato.id);

      this.storageService.set(campionato.id, JSON.stringify(campionato));
    }
  }

  caricaSalvataggi(): Array<Salvataggio> {
    return JSON.parse(this.storageService.get('salvataggi'));
  }

  eliminaCampionato(idCampionato: string) {
    this.storageService.remove(idCampionato);

    let listaSalvataggi: Array<Salvataggio> = JSON.parse(
      this.storageService.get('salvataggi')
    );

    for (let i = 0; i < listaSalvataggi.length; i++) {
      if (listaSalvataggi[i].idCampionato === idCampionato) {
        listaSalvataggi.splice(i, 1);
      }
    }

    this.storageService.remove('salvataggi');
    this.storageService.set('salvataggi', JSON.stringify(listaSalvataggi));
  }

  generaRisultatiCasuali(
    giornataCorrente: number,
    girone: string,
    campionato: Campionato
  ) {
    let index =
      girone === 'A'
        ? giornataCorrente - 1
        : campionato.listaTeams.length - 1 + giornataCorrente - 1;

    for (
      let i = 0;
      i < campionato.listaGiornate[index].listaEventi.length;
      i++
    ) {
      let ymin = Math.ceil(0);
      let ymax = Math.floor(5);
      let goalC = Math.floor(Math.random() * (ymax - ymin)) + ymin;

      let goalFC = Math.floor(Math.random() * (ymax - ymin)) + ymin;

      campionato.listaGiornate[index].listaEventi[i].goalC = goalC;
      campionato.listaGiornate[index].listaEventi[i].goalFC = goalFC;
    }
  }

  aggiornaValoriTecnici(
    giornatCorrente: number,
    girone: string,
    campionato: Campionato
  ) {
    let listaTeams = [];

    if (girone === 'A') giornatCorrente = giornatCorrente - 1;
    if (girone === 'R')
      giornatCorrente = campionato.listaTeams.length - 1 + giornatCorrente - 1;

    for (
      let i = 0;
      i < campionato.listaGiornate[giornatCorrente].listaEventi.length;
      i++
    ) {
      if (
        campionato.listaGiornate[giornatCorrente].listaEventi[i].goalC >
        campionato.listaGiornate[giornatCorrente].listaEventi[i].goalFC
      ) {
        let valoreTecnicoC =
          campionato.listaGiornate[giornatCorrente].listaEventi[i].teamC
            .valoreTecnico;

        let valoreTecnicoFC =
          campionato.listaGiornate[giornatCorrente].listaEventi[i].teamFC
            .valoreTecnico;

        let coeffC = 0.0;
        if (valoreTecnicoC / valoreTecnicoFC <= 0.9) {
          coeffC = 1.02;
        } else if (
          valoreTecnicoC / valoreTecnicoFC > 0.9 &&
          valoreTecnicoC / valoreTecnicoFC <= 1.1
        ) {
          coeffC = 1.004;
        } else if (
          valoreTecnicoC / valoreTecnicoFC > 1.1 &&
          valoreTecnicoC / valoreTecnicoFC <= 1.6
        ) {
          coeffC = 1.002;
        } else if (valoreTecnicoC / valoreTecnicoFC > 1.6) {
          coeffC = 1.001;
        }

        let coeffFC = 0.0;
        if (valoreTecnicoFC / valoreTecnicoC <= 0.9) {
          coeffFC = 0.99;
        } else if (
          valoreTecnicoFC / valoreTecnicoC > 0.9 &&
          valoreTecnicoFC / valoreTecnicoC <= 1.1
        ) {
          coeffFC = 0.995;
        } else if (
          valoreTecnicoFC / valoreTecnicoC > 1.1 &&
          valoreTecnicoFC / valoreTecnicoC <= 1.6
        ) {
          coeffFC = 0.994;
        } else if (valoreTecnicoFC / valoreTecnicoC > 1.6) {
          coeffFC = 0.991;
        }

        campionato.listaGiornate[giornatCorrente].listaEventi[
          i
        ].teamC.valoreTecnico =
          Math.round(
            campionato.listaGiornate[giornatCorrente].listaEventi[i].teamC
              .valoreTecnico *
              coeffC *
              100
          ) / 100;
        campionato.listaGiornate[giornatCorrente].listaEventi[
          i
        ].teamFC.valoreTecnico =
          Math.round(
            campionato.listaGiornate[giornatCorrente].listaEventi[i].teamFC
              .valoreTecnico *
              coeffFC *
              100
          ) / 100;
        listaTeams.push(
          campionato.listaGiornate[giornatCorrente].listaEventi[i].teamC
        );
        listaTeams.push(
          campionato.listaGiornate[giornatCorrente].listaEventi[i].teamFC
        );
      } else if (
        campionato.listaGiornate[giornatCorrente].listaEventi[i].goalC ===
        campionato.listaGiornate[giornatCorrente].listaEventi[i].goalFC
      ) {
        let valoreTecnicoC =
          campionato.listaGiornate[giornatCorrente].listaEventi[i].teamC
            .valoreTecnico;

        let valoreTecnicoFC =
          campionato.listaGiornate[giornatCorrente].listaEventi[i].teamFC
            .valoreTecnico;
        let coeffC = 0.0;
        if (valoreTecnicoC / valoreTecnicoFC <= 0.9) {
          coeffC = 1.005;
        } else if (
          valoreTecnicoC / valoreTecnicoFC > 0.9 &&
          valoreTecnicoC / valoreTecnicoFC <= 1.1
        ) {
          coeffC = 1.004;
        } else if (
          valoreTecnicoC / valoreTecnicoFC > 1.1 &&
          valoreTecnicoC / valoreTecnicoFC <= 1.6
        ) {
          coeffC = 1.002;
        } else if (valoreTecnicoC / valoreTecnicoFC > 1.6) {
          coeffC = 1.001;
        }

        let coeffFC = 0.0;
        if (valoreTecnicoFC / valoreTecnicoC <= 0.9) {
          coeffFC = 0.999;
        } else if (
          valoreTecnicoFC / valoreTecnicoC > 0.9 &&
          valoreTecnicoFC / valoreTecnicoC <= 1.1
        ) {
          coeffFC = 1.001;
        } else if (
          valoreTecnicoFC / valoreTecnicoC > 1.1 &&
          valoreTecnicoFC / valoreTecnicoC <= 1.6
        ) {
          coeffFC = 1.001;
        } else if (valoreTecnicoFC / valoreTecnicoC > 1.6) {
          coeffFC = 1.002;
        }

        campionato.listaGiornate[giornatCorrente].listaEventi[
          i
        ].teamC.valoreTecnico =
          Math.round(
            campionato.listaGiornate[giornatCorrente].listaEventi[i].teamC
              .valoreTecnico *
              coeffC *
              100
          ) / 100;
        campionato.listaGiornate[giornatCorrente].listaEventi[
          i
        ].teamFC.valoreTecnico =
          Math.round(
            campionato.listaGiornate[giornatCorrente].listaEventi[i].teamFC
              .valoreTecnico *
              coeffFC *
              100
          ) / 100;
        listaTeams.push(
          campionato.listaGiornate[giornatCorrente].listaEventi[i].teamC
        );
        listaTeams.push(
          campionato.listaGiornate[giornatCorrente].listaEventi[i].teamFC
        );
      } else {

        let valoreTecnicoC =
          campionato.listaGiornate[giornatCorrente].listaEventi[i].teamC
            .valoreTecnico;

        let valoreTecnicoFC =
          campionato.listaGiornate[giornatCorrente].listaEventi[i].teamFC
            .valoreTecnico;
        let coeffC = 0.0;
        if (valoreTecnicoC / valoreTecnicoFC <= 0.9) {
          coeffC = 0.999;
        } else if (
          valoreTecnicoC / valoreTecnicoFC > 0.9 &&
          valoreTecnicoC / valoreTecnicoFC <= 1.1
        ) {
          coeffC = 0.995;
        } else if (
          valoreTecnicoC / valoreTecnicoFC > 1.1 &&
          valoreTecnicoC / valoreTecnicoFC <= 1.6
        ) {
          coeffC = 0.98;
        } else if (valoreTecnicoC / valoreTecnicoFC > 1.6) {
          coeffC = 0.98;
        }

        let coeffFC = 0.0;
        if (valoreTecnicoFC / valoreTecnicoC <= 0.9) {
          coeffFC = 1.05;
        } else if (
          valoreTecnicoFC / valoreTecnicoC > 0.9 &&
          valoreTecnicoFC / valoreTecnicoC <= 1.1
        ) {
          coeffFC = 1.005;
        } else if (
          valoreTecnicoFC / valoreTecnicoC > 1.1 &&
          valoreTecnicoFC / valoreTecnicoC <= 1.6
        ) {
          coeffFC = 1.002;
        } else if (valoreTecnicoFC / valoreTecnicoC > 1.6) {
          coeffFC = 1.001;
        }


        campionato.listaGiornate[giornatCorrente].listaEventi[
          i
        ].teamC.valoreTecnico =
          Math.round(
            campionato.listaGiornate[giornatCorrente].listaEventi[i].teamC
              .valoreTecnico *
              coeffC *
              100
          ) / 100;
        campionato.listaGiornate[giornatCorrente].listaEventi[
          i
        ].teamFC.valoreTecnico =
          Math.round(
            campionato.listaGiornate[giornatCorrente].listaEventi[i].teamFC
              .valoreTecnico *
              coeffFC *
              100
          ) / 100;
        listaTeams.push(
          campionato.listaGiornate[giornatCorrente].listaEventi[i].teamC
        );
        listaTeams.push(
          campionato.listaGiornate[giornatCorrente].listaEventi[i].teamFC
        );
      }
    }

    for (let j = giornatCorrente; j < campionato.listaGiornate.length; j++) {
      for (let k = 0; k < campionato.listaGiornate[j].listaEventi.length; k++) {
        for (let i = 0; i < listaTeams.length; i++) {
          if (
            campionato.listaGiornate[j].listaEventi[k].teamC.id ===
            listaTeams[i].id
          ) {
            campionato.listaGiornate[j].listaEventi[k].teamC.valoreTecnico =
              listaTeams[i].valoreTecnico;
          }

          if (
            campionato.listaGiornate[j].listaEventi[k].teamFC.id ===
            listaTeams[i].id
          ) {
            campionato.listaGiornate[j].listaEventi[k].teamFC.valoreTecnico =
              listaTeams[i].valoreTecnico;
          }
        }
      }
    }
  }

  caricaListaTipologiaRisultati(): SelectItem[]{
    let listaTipologiaRisultati = tipologie_risultati.listaTipologieRisultati;

    return listaTipologiaRisultati;
  }

}