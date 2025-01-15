// src/app/models/match.model.ts

export type MatchType = 'upcoming' | 'live_score' | 'results';

export interface UpcomingMatchSegment {
  team1: string;
  team2: string;
  flag1: string;
  flag2: string;
  time_until_match: string;
  match_series: string;
  match_event: string;
  unix_timestamp: string;
  match_page: string;
}

export interface LiveScoreMatchSegment {
  team1: string;
  team2: string;
  flag1: string;
  flag2: string;
  team1_logo: string;
  team2_logo: string;
  score1: string;
  score2: string;
  team1_round_ct: string;
  team1_round_t: string;
  team2_round_ct: string;
  team2_round_t: string;
  map_number: string;
  current_map: string;
  time_until_match: string;
  match_event: string;
  match_series: string;
  unix_timestamp: string;
  match_page: string;
}

export interface ResultMatchSegment {
  team1: string;
  team2: string;
  score1: string;
  score2: string;
  flag1: string;
  flag2: string;
  time_completed: string;
  round_info: string;
  tournament_name: string;
  match_page: string;
  tournament_icon: string;
}

export interface MatchResponse {
  data: {
    status: number;
    segments: UpcomingMatchSegment[] | LiveScoreMatchSegment[] | ResultMatchSegment[];
  };
}
