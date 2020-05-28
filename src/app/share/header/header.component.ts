import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'HOME',
        command: (event) => {
          this.router.navigate(['/']);
        },
      },
      { separator: true },
      {
        label: 'NUOVO CAMPIONATO',
        command: (event) => {
          this.router.navigate(['/nuovo-campionato']);
        },
      },
      {
        label: 'CARICA CAMPIONATO',
        command: (event) => {
          this.router.navigate(['/carica-campionato']);
        },
      },
      {
        label: 'CAMPIONATO CASUALE',
        command: (event) => {
          this.router.navigate(['/nuovo-campionato-casuale']);
        },
      },
      { separator: true },
      {
        label: 'NUOVA STAGIONE',
        command: (event) => {
          this.router.navigate(['/nuova-stagione']);
        },
      },
      {
        label: 'CARICA STAGIONE',
        command: (event) => {
          this.router.navigate(['/carica-stagione']);
        },
      },
      {
        label: 'STAGIONE CASUALE',
        command: (event) => {
          this.router.navigate(['/nuova-stagione-casuale']);
        },
      },
      { separator: true },
      {
        label: 'NUOVA COPPA',
        command: (event) => {
          this.router.navigate(['/nuova-coppa']);
        },
      },
      {
        label: 'CARICA COPPA',
        command: (event) => {
          this.router.navigate(['/carica-coppa']);
        },
      },
      {
        label: 'COPPA CASUALE',
        command: (event) => {
          this.router.navigate(['/nuova-coppa-casuale']);
        },
      },
      { separator: true },
      {
        label: 'NUOVA CARRIERA',
        command: (event) => {
          this.router.navigate(['/nuova-carriera']);
        },
      },
      {
        label: 'CARICA CARRIERA',
        command: (event) => {
          this.router.navigate(['/carica-carriera']);
        },
      },
      {
        label: 'CARRIERA CASUALE',
        command: (event) => {
          this.router.navigate(['/nuova-carriera-casuale']);
        },
      },
    ];
  }
}
