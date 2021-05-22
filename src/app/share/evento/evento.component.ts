import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { Evento } from 'src/app/model/campionato';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
})
export class EventoComponent implements OnInit {
  checked: boolean;

  @Input() evento: Evento;
  @Output() selected = new EventEmitter<any>();
  @Output() aggiornaClassifica = new EventEmitter<any>();

  displayModificaRisultato: boolean = false;
  visualizzaModificaRisultati: boolean = false;

  opzioniGoalC: SelectItem[];
  opzioniGoalFC: SelectItem[];

  disableDropdownC: boolean = false;
  disableDropdownFC: boolean = false;

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    if (this.evento.goalC != null && this.evento.goalFC != null) {
      this.checked = true;
    }
  }

  onChangheCheckBox() {
    this.cardsService.prossimaGiocata(this.evento);
    this.selected.emit(this.evento.id);
  }

  updateLogo(event: Evento, casaTrasferta: string) {
    if (casaTrasferta === 'C') {
      this.evento.teamC.logo = '/assets/images/teams/no_logo.png';
    } else if (casaTrasferta === 'FC') {
      this.evento.teamFC.logo = '/assets/images/teams/no_logo.png';
    }
  }

  visualizzaPopUpRisultati() {
    this.opzioniGoalC = [];
    if (this.evento.goalC >= 0 && this.evento.goalC <= 10) {
      this.opzioniGoalC.push({
        label: this.evento.goalC + '',
        value: this.evento.goalC,
      });
      switch (this.evento.goalC) {
        case 0:
          this.opzioniGoalC.push({ label: '0', value: 0 });
          this.opzioniGoalC.push({ label: '1', value: 1 });
          this.opzioniGoalC.push({ label: '2', value: 2 });
          this.opzioniGoalC.push({ label: '3', value: 3 });
          this.opzioniGoalC.push({ label: '4', value: 4 });
          this.opzioniGoalC.push({ label: '5', value: 5 });
          this.opzioniGoalC.push({ label: '6', value: 6 });
          this.opzioniGoalC.push({ label: '7', value: 7 });
          break;
        case 1:
          this.opzioniGoalC.push({ label: '0', value: 0 });
          this.opzioniGoalC.push({ label: '1', value: 1 });
          this.opzioniGoalC.push({ label: '2', value: 2 });
          this.opzioniGoalC.push({ label: '3', value: 3 });
          this.opzioniGoalC.push({ label: '4', value: 4 });
          this.opzioniGoalC.push({ label: '5', value: 5 });
          this.opzioniGoalC.push({ label: '6', value: 6 });
          this.opzioniGoalC.push({ label: '7', value: 7 });
          break;
        case 2:
          this.opzioniGoalC.push({ label: '0', value: 0 });
          this.opzioniGoalC.push({ label: '1', value: 1 });
          this.opzioniGoalC.push({ label: '2', value: 2 });
          this.opzioniGoalC.push({ label: '3', value: 3 });
          this.opzioniGoalC.push({ label: '4', value: 4 });
          this.opzioniGoalC.push({ label: '5', value: 5 });
          this.opzioniGoalC.push({ label: '6', value: 6 });
          this.opzioniGoalC.push({ label: '7', value: 7 });
          break;
        case 3:
          this.opzioniGoalC.push({ label: '0', value: 0 });
          this.opzioniGoalC.push({ label: '1', value: 1 });
          this.opzioniGoalC.push({ label: '2', value: 2 });
          this.opzioniGoalC.push({ label: '3', value: 3 });
          this.opzioniGoalC.push({ label: '4', value: 4 });
          this.opzioniGoalC.push({ label: '5', value: 5 });
          this.opzioniGoalC.push({ label: '6', value: 6 });
          this.opzioniGoalC.push({ label: '7', value: 7 });
          break;
        case 4:
          this.opzioniGoalC.push({ label: '0', value: 0 });
          this.opzioniGoalC.push({ label: '1', value: 1 });
          this.opzioniGoalC.push({ label: '2', value: 2 });
          this.opzioniGoalC.push({ label: '3', value: 3 });
          this.opzioniGoalC.push({ label: '4', value: 4 });
          this.opzioniGoalC.push({ label: '5', value: 5 });
          this.opzioniGoalC.push({ label: '6', value: 6 });
          this.opzioniGoalC.push({ label: '7', value: 7 });
          break;
        case 5:
          this.opzioniGoalC.push({ label: '0', value: 0 });
          this.opzioniGoalC.push({ label: '1', value: 1 });
          this.opzioniGoalC.push({ label: '2', value: 2 });
          this.opzioniGoalC.push({ label: '3', value: 3 });
          this.opzioniGoalC.push({ label: '4', value: 4 });
          this.opzioniGoalC.push({ label: '5', value: 5 });
          this.opzioniGoalC.push({ label: '6', value: 6 });
          this.opzioniGoalC.push({ label: '7', value: 7 });
          break;
        case 6:
          this.opzioniGoalC.push({ label: '0', value: 0 });
          this.opzioniGoalC.push({ label: '1', value: 1 });
          this.opzioniGoalC.push({ label: '2', value: 2 });
          this.opzioniGoalC.push({ label: '3', value: 3 });
          this.opzioniGoalC.push({ label: '4', value: 4 });
          this.opzioniGoalC.push({ label: '5', value: 5 });
          this.opzioniGoalC.push({ label: '6', value: 6 });
          this.opzioniGoalC.push({ label: '7', value: 7 });
          break;
        case 7:
          this.opzioniGoalC.push({ label: '0', value: 0 });
          this.opzioniGoalC.push({ label: '1', value: 1 });
          this.opzioniGoalC.push({ label: '2', value: 2 });
          this.opzioniGoalC.push({ label: '3', value: 3 });
          this.opzioniGoalC.push({ label: '4', value: 4 });
          this.opzioniGoalC.push({ label: '5', value: 5 });
          this.opzioniGoalC.push({ label: '6', value: 6 });
          this.opzioniGoalC.push({ label: '7', value: 7 });
          break;
      }
    } else {
      this.opzioniGoalC.push({
        label: this.evento.goalC + '',
        value: this.evento.goalC,
      });
      this.disableDropdownC = false;
    }

    this.opzioniGoalFC = [];
    if (this.evento.goalFC >= 0 && this.evento.goalFC <= 10) {
      this.opzioniGoalFC.push({
        label: this.evento.goalFC + '',
        value: this.evento.goalFC,
      });
      switch (this.evento.goalFC) {
        case 0:
          this.opzioniGoalFC.push({ label: '0', value: 0 });
          this.opzioniGoalFC.push({ label: '1', value: 1 });
          this.opzioniGoalFC.push({ label: '2', value: 2 });
          this.opzioniGoalFC.push({ label: '3', value: 3 });
          this.opzioniGoalFC.push({ label: '4', value: 4 });
          this.opzioniGoalFC.push({ label: '5', value: 5 });
          this.opzioniGoalFC.push({ label: '6', value: 6 });
          this.opzioniGoalFC.push({ label: '7', value: 7 });
          break;
        case 1:
          this.opzioniGoalFC.push({ label: '0', value: 0 });
          this.opzioniGoalFC.push({ label: '1', value: 1 });
          this.opzioniGoalFC.push({ label: '2', value: 2 });
          this.opzioniGoalFC.push({ label: '3', value: 3 });
          this.opzioniGoalFC.push({ label: '4', value: 4 });
          this.opzioniGoalFC.push({ label: '5', value: 5 });
          this.opzioniGoalFC.push({ label: '6', value: 6 });
          this.opzioniGoalFC.push({ label: '7', value: 7 });
          break;
        case 2:
          this.opzioniGoalFC.push({ label: '0', value: 0 });
          this.opzioniGoalFC.push({ label: '1', value: 1 });
          this.opzioniGoalFC.push({ label: '2', value: 2 });
          this.opzioniGoalFC.push({ label: '3', value: 3 });
          this.opzioniGoalFC.push({ label: '4', value: 4 });
          this.opzioniGoalFC.push({ label: '5', value: 5 });
          this.opzioniGoalFC.push({ label: '6', value: 6 });
          this.opzioniGoalFC.push({ label: '7', value: 7 });
          break;
        case 3:
          this.opzioniGoalFC.push({ label: '0', value: 0 });
          this.opzioniGoalFC.push({ label: '1', value: 1 });
          this.opzioniGoalFC.push({ label: '2', value: 2 });
          this.opzioniGoalFC.push({ label: '3', value: 3 });
          this.opzioniGoalFC.push({ label: '4', value: 4 });
          this.opzioniGoalFC.push({ label: '5', value: 5 });
          this.opzioniGoalFC.push({ label: '6', value: 6 });
          this.opzioniGoalFC.push({ label: '7', value: 7 });
          break;
        case 4:
          this.opzioniGoalFC.push({ label: '0', value: 0 });
          this.opzioniGoalFC.push({ label: '1', value: 1 });
          this.opzioniGoalFC.push({ label: '2', value: 2 });
          this.opzioniGoalFC.push({ label: '3', value: 3 });
          this.opzioniGoalFC.push({ label: '4', value: 4 });
          this.opzioniGoalFC.push({ label: '5', value: 5 });
          this.opzioniGoalFC.push({ label: '6', value: 6 });
          this.opzioniGoalFC.push({ label: '7', value: 7 });
          break;
        case 5:
          this.opzioniGoalFC.push({ label: '0', value: 0 });
          this.opzioniGoalFC.push({ label: '1', value: 1 });
          this.opzioniGoalFC.push({ label: '2', value: 2 });
          this.opzioniGoalFC.push({ label: '3', value: 3 });
          this.opzioniGoalFC.push({ label: '4', value: 4 });
          this.opzioniGoalFC.push({ label: '5', value: 5 });
          this.opzioniGoalFC.push({ label: '6', value: 6 });
          this.opzioniGoalFC.push({ label: '7', value: 7 });
          break;
        case 6:
          this.opzioniGoalFC.push({ label: '0', value: 0 });
          this.opzioniGoalFC.push({ label: '1', value: 1 });
          this.opzioniGoalFC.push({ label: '2', value: 2 });
          this.opzioniGoalFC.push({ label: '3', value: 3 });
          this.opzioniGoalFC.push({ label: '4', value: 4 });
          this.opzioniGoalFC.push({ label: '5', value: 5 });
          this.opzioniGoalFC.push({ label: '6', value: 6 });
          this.opzioniGoalFC.push({ label: '7', value: 7 });
          break;
        case 7:
          this.opzioniGoalFC.push({ label: '0', value: 0 });
          this.opzioniGoalFC.push({ label: '1', value: 1 });
          this.opzioniGoalFC.push({ label: '2', value: 2 });
          this.opzioniGoalFC.push({ label: '3', value: 3 });
          this.opzioniGoalFC.push({ label: '4', value: 4 });
          this.opzioniGoalFC.push({ label: '5', value: 5 });
          this.opzioniGoalFC.push({ label: '6', value: 6 });
          this.opzioniGoalFC.push({ label: '7', value: 7 });
          break;
      }
    } else {
      this.opzioniGoalFC.push({
        label: this.evento.goalFC + '',
        value: this.evento.goalFC,
      });
      this.disableDropdownFC = false;
    }

    this.displayModificaRisultato = true;
  }

  confermaNuovoRisultato() {
    this.displayModificaRisultato = false;
    this.aggiornaClassifica.emit(null);
  }
}
