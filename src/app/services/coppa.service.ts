import { Injectable } from '@angular/core';
import tipologie_risultati from '../../assets/json/tipologie_risultati.json';
import { SelectItem } from 'primeng/api';
import lista_stagioni from '../../assets/json/lista_stagioni.json';
import lista_tipologie_coppa from '../../assets/json/lista_tipologie_coppa.json';
import lista_numero_squadre_coppa from '../../assets/json/lista_numero_squadre_coppa.json';
import { StorageService } from './storage.service';
import { Coppa } from '../model/coppa';
import { Salvataggio } from '../model/files';

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
}
