import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { Campionato } from 'src/app/model/campionato';
import { SelectItem } from 'primeng/api/selectitem';
import { CampionatoService } from 'src/app/services/campionato.service';
import { TeamsService } from 'src/app/services/teams.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Stagione } from 'src/app/model/stagione';
import { Team } from 'src/app/model/team';

@Component({
  selector: 'app-prepara-campionato',
  templateUrl: './prepara-campionato.component.html',
  styleUrls: ['./prepara-campionato.component.css'],
})
export class PreparaCampionatoComponent implements OnInit, AfterViewInit {
  @Input() campionato: Campionato;
  @Input() singolo: boolean = true;
  @Input() listaPromosse: Array<Team>;
  @Input() listaRetrocesse: Array<Team>;
  listaTipologieTorneo: SelectItem[];
  stagioni: SelectItem[];
  numeroSquadre: SelectItem[];
  listaFormat: SelectItem[];
  listaTeams: SelectItem[];
  listaValoriTecnici: SelectItem[];
  disabledTeams: boolean[];
  checkProsegui: boolean = false;

  @Output() campionatoPronto = new EventEmitter<any>();

  constructor(
    private campionatoService: CampionatoService,
    private teamsService: TeamsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.stagioni = campionatoService.caricaStagioni();
    this.listaTeams = teamsService.caricaListaTeamItems();
    this.listaTipologieTorneo = campionatoService.caricaTipologieTorneo();
    this.listaValoriTecnici = teamsService.caricaListaValoriTecnici();
    this.disabledTeams = [];
  }
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    if (this.campionato === undefined) {
      let id = this.route.snapshot.paramMap.get('id');
      this.campionato = this.campionatoService.caricaCampionato(id);
    }

    //Avanzamento stagione
    let stagione = this.campionato.stagione;
    let annoPartenza = stagione.slice(0, 4);
    let annoFine = stagione.slice(5, 9);
    stagione = parseInt(annoPartenza) + 1 + '/' + (parseInt(annoFine) + 1);
    this.campionato.stagione = stagione;
    this.stagioni.push({ label: stagione, value: stagione });

    this.numeroSquadre = this.campionatoService.caricaNumeroSquadre(
      this.campionato.tipologia
    );
    this.listaFormat = this.campionatoService.caricaFormatCampionato(
      this.campionato.tipologia,
      this.campionato.numeroTeams + ''
    );

    this.campionato.listaTeams = [];

    //Preparazione lista teams da classifica
    if (this.campionato.singolo === true) {
      for (let i = 0; i < this.campionato.classifica.listaTeams.length; i++) {
        if (
          this.campionato.classifica.listaTeams[i].verdetto === 'promozione' ||
          (this.campionato.classifica.listaTeams[i].verdetto === 'vincitore' &&
            this.campionato.tipologia != 0) ||
          this.campionato.classifica.listaTeams[i].verdetto === 'retrocessione'
        ) {
          this.campionato.listaTeams.push(new Team());
          this.disabledTeams[i] = false;
        } else {
          this.campionato.listaTeams.push(
            this.campionato.classifica.listaTeams[i].team
          );
          this.disabledTeams[i] = true;
        }
      }
    } else {
      let index = 0;
      for (let i = 0; i < this.listaRetrocesse.length; i++) {
        index = this.campionato.listaTeams.push(
          Object.assign({}, this.listaRetrocesse[i])
        );
        this.disabledTeams[index - 1] = true;
      }

      if (this.listaPromosse.length != 0) {
        for (
          let i = index;
          i <
          this.campionato.classifica.listaTeams.length -
            this.listaPromosse.length;
          i++
        ) {
          this.campionato.listaTeams.push(
            this.campionato.classifica.listaTeams[i].team
          );
          this.disabledTeams[i] = true;
        }

        for (let i = 0; i < this.listaPromosse.length; i++) {
          index = this.campionato.listaTeams.push(
            Object.assign({}, this.listaPromosse[i])
          );
          this.disabledTeams[index - 1] = true;
        }
      } else {
        for (
          let i = index;
          i <
          this.campionato.classifica.listaTeams.length -
            this.listaPromosse.length -
            this.campionato.format.retrocessione;
          i++
        ) {
          index = this.campionato.listaTeams.push(
            this.campionato.classifica.listaTeams[i].team
          );
          this.disabledTeams[i] = true;
        }

        for (
          let i = index;
          i < this.campionato.classifica.listaTeams.length;
          i++
        ) {
          index = this.campionato.listaTeams.push(new Team());
          this.disabledTeams[index - 1] = false;
        }
      }
    }

    // Abilitazione selezione team per Serie C (territorialita)
    if (this.campionato.tipologia === 2) {
      for (let i = 0; i < this.disabledTeams.length; i++) {
        this.disabledTeams[i] = false;
      }
    }

    //Allineamento valori tecnici
    for (let i = 0; i < this.campionato.listaTeams.length; i++) {
      if (this.campionato.listaTeams[i] != null) {
        for (
          let k = 0;
          k <
          this.campionato.listaGiornate[
            this.campionato.listaGiornate.length - 1
          ].listaEventi.length;
          k++
        ) {
          if (
            this.campionato.listaTeams[i].id ===
            this.campionato.listaGiornate[
              this.campionato.listaGiornate.length - 1
            ].listaEventi[k].teamC.id
          ) {
            this.campionato.listaTeams[
              i
            ].valoreTecnico = this.campionato.listaGiornate[
              this.campionato.listaGiornate.length - 1
            ].listaEventi[k].teamC.valoreTecnico;
          }

          if (
            this.campionato.listaTeams[i].id ===
            this.campionato.listaGiornate[
              this.campionato.listaGiornate.length - 1
            ].listaEventi[k].teamFC.id
          ) {
            this.campionato.listaTeams[
              i
            ].valoreTecnico = this.campionato.listaGiornate[
              this.campionato.listaGiornate.length - 1
            ].listaEventi[k].teamFC.valoreTecnico;
          }
        }

        let valoreTecnico = this.campionato.listaTeams[i].valoreTecnico;
        if (this.campionato.listaTeams.length <= 12) {
          valoreTecnico = Math.floor(valoreTecnico * 0.995);
        } else {
          valoreTecnico = Math.floor(valoreTecnico * 0.95);
        }

        if (!isNaN(valoreTecnico)) {
          if (valoreTecnico < 5) {
            valoreTecnico = 5;
          } else {
            while (valoreTecnico % 5 != 0) {
              valoreTecnico--;
            }
          }
        } else {
          valoreTecnico = 100;
        }

        this.campionato.listaTeams[i].valoreTecnico = valoreTecnico;

        for (let j = 0; j < this.listaTeams.length; j++) {
          if (
            this.listaTeams[j].value != null &&
            this.listaTeams[j].value.id === this.campionato.listaTeams[i].id
          ) {
            this.listaTeams[j].value.valoreTecnico = valoreTecnico;
          }
        }
      }
    }
  }

  proseguiStagione() {
    this.campionato.listaGiornate = this.campionatoService.generaCalendario(
      this.campionato,
      this.campionato.listaTeams
    );
    let date = new Date();
    this.campionato.id =
      this.campionato.denominazioneLega.trim() +
      '_' +
      date.getTime().toString();
    this.campionatoService.salvaCampionato(this.campionato);

    this.campionatoPronto.emit(null);
    this.checkProsegui = true;

    if (this.singolo === true)
      this.router.navigate(['/gioca-campionato/' + this.campionato.id]);
  }
}
