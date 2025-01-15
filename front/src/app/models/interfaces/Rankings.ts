export interface Ranking {
    rank: string;
    team: string;
    country: string;
    last_played: string;
    last_played_team: string;
    last_played_team_logo: string;
    record: string;
    earnings: string;
    logo: string;
  }
  
  export interface RankingsResponse {
    status: number;
    data: Ranking[];
  }