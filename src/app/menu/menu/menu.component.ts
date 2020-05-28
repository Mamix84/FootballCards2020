import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  nuovoCampionato() {
    this.router.navigate(['/nuovo-campionato']);
  }

  caricaCampionato() {
    this.router.navigate(['/carica-campionato']);
  }

  nuovoCampionatoCasuale() {
    this.router.navigate(['/nuovo-campionato-casuale']);
  }

  nuovaStagione() {
    this.router.navigate(['/nuova-stagione']);
  }

  caricaStagione() {
    this.router.navigate(['/carica-stagione']);
  }

  nuovaStagioneCasuale() {
    this.router.navigate(['/nuova-stagione-casuale']);
  }

  nuovaCoppa() {
    this.router.navigate(['/nuova-coppa']);
  }

  caricaCoppa() {
    this.router.navigate(['/carica-coppa']);
  }

  nuovaCoppaCasuale() {
    this.router.navigate(['/nuova-coppa-casuale']);
  }

  nuovaCarriera() {
    this.router.navigate(['/nuova-carriera']);
  }

  caricaCarriera() {
    this.router.navigate(['/carica-carriera']);
  }

  nuovaCarrieraCasuale() {
    this.router.navigate(['/nuova-carriera-casuale']);
  }
}
