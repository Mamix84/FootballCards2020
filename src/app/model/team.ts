export class Team{
  idTecnico: string = '';
  id: number = 0;
  nome: string = '';
  logo: string = '';
  valoreTecnico: number = 0;
}

export class Derby{
  teamA: Team;
  teamB: Team;
}
