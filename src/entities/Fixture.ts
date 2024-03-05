export interface Fixture {
  fixture: {
    date: string;
  };
  league: {
    name: string;
    logo: string;
    round: string;
  };
  teams: {
    home: { name: string; logo: string };
    away: { name: string; logo: string };
  };
  goals: {
    home: number;
    away: number;
  };
}
