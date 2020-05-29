import { Component, OnInit } from '@angular/core';
import { Stagione } from 'src/app/model/stagione';
import { Campionato } from 'src/app/model/campionato';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api/selectitem';
import { StagioneService } from 'src/app/services/stagione.service';

@Component({
  selector: 'app-nuova-stagione',
  templateUrl: './nuova-stagione.component.html',
  styleUrls: ['./nuova-stagione.component.css'],
})
export class NuovaStagioneComponent implements OnInit {
  stagione: Stagione;
  listaStagioni: SelectItem[];
  listaFormatStagione : SelectItem[];
  campionatiPronti: boolean[];

  constructor(
    private router: Router,
    private stagioneService: StagioneService
  ) {
    this.stagione = new Stagione();
    this.campionatiPronti = [];
  }

  ngOnInit(): void {
    this.listaStagioni = this.stagioneService.caricaListaStagioni();
    this.listaFormatStagione = this.stagioneService.caricaListaFormatStagioni();
  }

  aggiungiCampionato() {
    this.campionatiPronti.push(false);

    if (!this.stagione.listaCampionati) {
      this.stagione.listaCampionati = [];
    }

    let campionato: Campionato = new Campionato();
    campionato.stagione = this.stagione.stagioneCorrente;
    campionato.singolo = false;
    this.stagione.listaCampionati.push(campionato);
  }

  giocaStagione() {
    this.stagioneService.inizializzaStagione(this.stagione);

    let date = new Date();
    this.stagione.id =
      this.stagione.denominazione.trim() + '_' + date.getTime().toString();
    this.stagioneService.salvaStagione(this.stagione);
    this.router.navigate(['/gioca-stagione/' + this.stagione.id]);
  }

  checkGioca(): boolean{
    let check = false;

    if(this.campionatiPronti.length === 0)
      return true;

    for(let i=0;i<this.campionatiPronti.length;i++){
      if(this.campionatiPronti[i] === false)
        return true;
    }

    return check
  }

  checkCampionatiPronti(index: number){
    this.campionatiPronti[index] = true;
  }

  eliminaCampionato(index: number){
    this.campionatiPronti.splice(index, 1);
    this.stagione.listaCampionati.splice(index, 1);
  }
}
