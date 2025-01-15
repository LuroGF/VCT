export interface StatsSegment {
    player: string;
    org: string;
    rating: string;
    average_combat_score: string;
    kill_deaths: string;
    kill_assists_survived_traded: string;
    average_damage_per_round: string;
    kills_per_round: string;
    assists_per_round: string;
    first_kills_per_round: string;
    first_deaths_per_round: string;
    headshot_percentage: string;
    clutch_success_percentage: string;
  }
  
  export interface StatsResponse {
    data: {
      status: number;
      segments: StatsSegment[];
    };
  }