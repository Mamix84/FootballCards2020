import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Classifica } from 'src/app/model/classifica';
import { Team } from 'src/app/model/team';

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ClassificaComponent implements OnInit {
  @Input() classifica: Classifica;
  numeroTeam: number;

  constructor() {}

  ngOnInit(): void {}

  updateLogo(event: any, team: Team) {
    team.logo = '/assets/images/teams/no_logo.png';
  }
}
