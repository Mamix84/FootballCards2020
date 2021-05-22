export class Team{
  idTecnico: string;
  id: number;
  nome: string;
  logo: string;
  valoreTecnico: number;
}

export class Derby{
  teamA: Team;
  teamB: Team;
}
