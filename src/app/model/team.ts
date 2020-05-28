export class Team{
  id: number;
  nome: string;
  logo: string;
  valoreTecnico: number;
}

export class Derby{
  teamA: Team;
  teamB: Team;
}
