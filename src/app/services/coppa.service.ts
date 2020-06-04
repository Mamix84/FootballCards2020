import { Injectable } from '@angular/core';
import tipologie_risultati from '../../assets/json/tipologie_risultati.json';
import { SelectItem, TreeNode } from 'primeng/api';
import lista_stagioni from '../../assets/json/lista_stagioni.json';
import lista_tipologie_coppa from '../../assets/json/lista_tipologie_coppa.json';
import lista_numero_squadre_coppa from '../../assets/json/lista_numero_squadre_coppa.json';
import { StorageService } from './storage.service';
import { Coppa } from '../model/coppa';
import { Salvataggio } from '../model/files';
import { Team } from '../model/team';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { Giornata, Evento } from '../model/campionato';

@Injectable({
  providedIn: 'root',
})
export class CoppaService {
  constructor(private storageService: StorageService) {}

  caricaListaTipologiaRisultati(): SelectItem[] {
    let listaTipologiaRisultati = tipologie_risultati.listaTipologieRisultati;

    return listaTipologiaRisultati;
  }

  caricaListaStagioni(): SelectItem[] {
    let listaStagioni = lista_stagioni.listaStagioni;

    return listaStagioni;
  }

  caricaListaTipologieCoppa(): SelectItem[] {
    let listaTipologieCoppa = lista_tipologie_coppa.listaTipologieCoppa;

    return listaTipologieCoppa;
  }

  caricaListaNumeroSquadre(tipologia: number): SelectItem[] {
    let listaNumeroSquadreCoppa =
      lista_numero_squadre_coppa.listaNumeroSquadreCoppa;
    return listaNumeroSquadreCoppa;
  }

  caricaFormatCoppa(tipologia: number, numeroTeams: string): SelectItem[] {
    let listaFormat = [];

    listaFormat.push({
      label: 'Seleziona la tipologia di format',
      value: null,
    });

    switch (tipologia) {
      case 0: {
        switch (numeroTeams) {
          case '64': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '32': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '16': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '8': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '4': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
        }
        break;
      }
      case 1: {
        switch (numeroTeams) {
          case '64': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '32': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '16': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '8': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '4': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
        }
        break;
      }
      case 2: {
        switch (numeroTeams) {
          case '64': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '32': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '16': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '8': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '4': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
        }
        break;
      }
      case 3: {
        switch (numeroTeams) {
          case '64': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '32': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '16': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '8': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
          case '4': {
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA',
              value: {
                diretta: true,
                ar: undefined,
                gironi: undefined,
              },
            });
            listaFormat.push({
              label: 'ELIMINAZIONE DIRETTA ANDATA/RITORNO',
              value: {
                diretta: undefined,
                ar: true,
                gironi: undefined,
              },
            });
            break;
          }
        }
        break;
      }
    }

    return listaFormat;
  }

  caricaCoppa(idCoppa: string): Coppa {
    let campionato = JSON.parse(this.storageService.get(idCoppa));

    return campionato;
  }

  salvaCoppa(coppa: Coppa) {
    if (this.storageService.get(coppa.id) === null) {
      //Primo salvataggio
      let listaSalvataggi: Array<Salvataggio> = JSON.parse(
        this.storageService.get('salvataggi-coppa')
      );

      if (listaSalvataggi === null) {
        //Primo salvataggio
        let salvataggio = new Salvataggio();
        salvataggio.idCampionato = coppa.id;
        salvataggio.descrizione = coppa.denominazioneCoppa;
        salvataggio.numeroTeams = coppa.numeroTeams;
        salvataggio.stagione = coppa.stagione;
        salvataggio.dataCreazione = new Date();
        salvataggio.dataUltimoSalvataggio = new Date();

        listaSalvataggi = new Array<Salvataggio>();
        listaSalvataggi.push(salvataggio);

        this.storageService.set(
          'salvataggi-coppa',
          JSON.stringify(listaSalvataggi)
        );
      } else {
        //Salvataggi successivi

        let aggiornato = false;
        for (let i = 0; i < listaSalvataggi.length; i++) {
          if (listaSalvataggi[i].idCampionato === coppa.id) {
            listaSalvataggi[i].dataUltimoSalvataggio = new Date();
            aggiornato = true;
          }
        }

        if (aggiornato === false) {
          let salvataggio = new Salvataggio();
          salvataggio.idCampionato = coppa.id;
          salvataggio.descrizione = coppa.denominazioneCoppa;
          salvataggio.numeroTeams = coppa.numeroTeams;
          salvataggio.stagione = coppa.stagione;
          salvataggio.dataCreazione = new Date();
          salvataggio.dataUltimoSalvataggio = new Date();

          listaSalvataggi.push(salvataggio);
        }

        this.storageService.remove('salvataggi-coppa');
        this.storageService.set(
          'salvataggi-coppa',
          JSON.stringify(listaSalvataggi)
        );
      }

      this.storageService.set(coppa.id, JSON.stringify(coppa));
    } else {
      //Aggiornameto
      this.storageService.remove(coppa.id);

      this.storageService.set(coppa.id, JSON.stringify(coppa));
    }
  }

  caricaSalvataggi(): Array<Salvataggio> {
    return JSON.parse(this.storageService.get('salvataggi-coppa'));
  }

  eliminaCoppa(idCoppa: string) {
    this.storageService.remove(idCoppa);

    let listaSalvataggi: Array<Salvataggio> = JSON.parse(
      this.storageService.get('salvataggi-coppa')
    );

    for (let i = 0; i < listaSalvataggi.length; i++) {
      if (listaSalvataggi[i].idCampionato === idCoppa) {
        listaSalvataggi.splice(i, 1);
      }
    }

    this.storageService.remove('salvataggi-coppa');
    this.storageService.set(
      'salvataggi-coppa',
      JSON.stringify(listaSalvataggi)
    );
  }

  generaTabellone(listaTeams: Array<Team>): TreeNode[] {
    let data: TreeNode[];

    let children = [];
    for (let i = 0; i < listaTeams.length; i++) {
      children.push({ label: listaTeams[i].nome, expanded: true });
    }
    data = children;

    return data;
  }

  generaIncontri(coppa: Coppa) {
    let giornata = new Giornata();
    giornata.listaEventi = [];

    for (let i = 0; i < coppa.listaTeams.length - 1; i += 2) {
      let evento = new Evento();
      evento.id = coppa.faseCorrente * 100 + i;
      evento.teamC = coppa.listaTeams[i];
      evento.teamFC = coppa.listaTeams[i + 1];

      giornata.listaEventi.push(evento);
    }
    coppa.listaFasi.push(giornata);

    let listaTeams = coppa.listaTeams.length / 2;
    while (listaTeams >= 2) {
      giornata = new Giornata();
      giornata.listaEventi = [];

      for (let i = 0; i < listaTeams / 2; i++) {
        let evento = new Evento();
        evento.id = coppa.faseCorrente * 100 + i;
        let teamC = new Team();
        teamC.id = 0;
        teamC.nome = 'CASA';
        teamC.logo = '/assets/images/teams/no_logo.png';
        teamC.valoreTecnico = 100;
        evento.teamC = teamC;
        let teamFC = new Team();
        teamFC.id = 0;
        teamFC.nome = 'FUORI CASA';
        teamFC.logo = '/assets/images/teams/no_logo.png';
        teamFC.valoreTecnico = 100;
        evento.teamFC = teamFC;

        giornata.listaEventi.push(evento);
      }

      coppa.listaFasi.push(giornata);
      listaTeams = listaTeams / 2;
    }
  }

  generaIncontriFaseSuccessiva(faseCorrente: Giornata, coppa: Coppa) {
    for (let i = 0; i < faseCorrente.listaEventi.length - 1; i += 2) {
      let evento = new Evento();
      evento.id = (coppa.faseCorrente + 1) * 100 + i;

      if (
        faseCorrente.listaEventi[i].goalC > faseCorrente.listaEventi[i].goalFC
      ) {
        evento.teamC = faseCorrente.listaEventi[i].teamC;
      } else if (
        faseCorrente.listaEventi[i].goalC < faseCorrente.listaEventi[i].goalFC
      ) {
        evento.teamC = faseCorrente.listaEventi[i].teamFC;
      }

      if (
        faseCorrente.listaEventi[i + 1].goalC >
        faseCorrente.listaEventi[i + 1].goalFC
      ) {
        evento.teamFC = faseCorrente.listaEventi[i + 1].teamC;
      } else if (
        faseCorrente.listaEventi[i + 1].goalC <
        faseCorrente.listaEventi[i + 1].goalFC
      ) {
        evento.teamFC = faseCorrente.listaEventi[i + 1].teamFC;
      }

      coppa.listaFasi[coppa.faseCorrente + 1].listaEventi[i / 2] = evento;
    }
  }

  preparaListaFasi(coppa: Coppa): SelectItem[] {
    let listaFasi = [];

    if (coppa.format.diretta === true) {
      switch (coppa.listaTeams.length) {
        case 4: {
          listaFasi.push({ label: 'SEMI FINALI', value: 0 });
          listaFasi.push({ label: 'FINALE', value: 1 });
          break;
        }
        case 8: {
          listaFasi.push({ label: 'QUARTI DI FINALE', value: 0 });
          listaFasi.push({ label: 'SEMI FINALI', value: 1 });
          listaFasi.push({ label: 'FINALE', value: 2 });
          break;
        }
        case 16: {
          listaFasi.push({ label: 'OTTAVI DI FINALE', value: 0 });
          listaFasi.push({ label: 'QUARTI DI FINALE', value: 1 });
          listaFasi.push({ label: 'SEMI FINALI', value: 2 });
          listaFasi.push({ label: 'FINALE', value: 3 });
          break;
        }
        case 32: {
          listaFasi.push({ label: 'SEDICESIMI DI FINALE', value: 0 });
          listaFasi.push({ label: 'OTTAVI DI FINALE', value: 1 });
          listaFasi.push({ label: 'QUARTI DI FINALE', value: 2 });
          listaFasi.push({ label: 'SEMI FINALI', value: 3 });
          listaFasi.push({ label: 'FINALE', value: 4 });
          break;
        }
        case 64: {
          listaFasi.push({ label: 'TRENTADUESIMI DI FINALE', value: 0 });
          listaFasi.push({ label: 'SEDICESIMI DI FINALE', value: 1 });
          listaFasi.push({ label: 'OTTAVI DI FINALE', value: 2 });
          listaFasi.push({ label: 'QUARTI DI FINALE', value: 3 });
          listaFasi.push({ label: 'SEMI FINALI', value: 4 });
          listaFasi.push({ label: 'FINALE', value: 5 });
          break;
        }
      }
    } else if (coppa.format.ar === true) {
    }

    return listaFasi;
  }
}
