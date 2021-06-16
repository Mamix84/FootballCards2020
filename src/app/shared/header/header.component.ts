import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'HOME',
        routerLink: ['/'],
      },
      { separator: true },
      {
        label: 'CAMPIONATO',
        items: [
          {
            label: 'NUOVO CAMPIONATO',
            routerLink: ['/nuovo-campionato'],
          },
          {
            label: 'CARICA CAMPIONATO',
            routerLink: ['/carica-campionato'],
          },
          {
            label: 'CAMPIONATO CASUALE',
            routerLink: ['/nuovo-campionato-casuale'],
          },
        ],
      },
      { separator: true },
      {
        label: 'STAGIONE',
        items: [
          {
            label: 'NUOVA STAGIONE',
            routerLink: ['/nuova-stagione'],
          },
          {
            label: 'CARICA STAGIONE',
            routerLink: ['/carica-stagione'],
          },
          {
            label: 'STAGIONE CASUALE',
            routerLink: ['/nuova-stagione-casuale'],
          },
        ],
      },
      { separator: true },
      {
        label: 'COPPA',
        items: [
          {
            label: 'NUOVA COPPA',
            routerLink: ['/nuova-coppa'],
          },
          {
            label: 'CARICA COPPA',
            routerLink: ['/carica-coppa'],
          },
          {
            label: 'COPPA CASUALE',
            routerLink: ['/nuova-coppa-casuale'],
          },
        ],
      },
      { separator: true },
      {
        label: 'CARRIERA',
        items: [
          {
            label: 'NUOVA CARRIERA',
            routerLink: ['/nuova-carriera'],
          },
          {
            label: 'CARICA CARRIERA',
            routerLink: ['/carica-carriera'],
          },
          {
            label: 'CARRIERA CASUALE',
            routerLink: ['/nuova-carriera-casuale'],
          },
        ],
      },
      { separator: true },
      {
        label: 'CONFIGURATORE',
        routerLink: ['/configuratore'],
      },
    ];
  }
}
