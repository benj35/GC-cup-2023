export type Team = {
  conference: number;
  inPlayoffs: boolean;
  teamID: number;
  teamName: string;
  teamCode: string;
  previousRank: number; // *optional
  played: number;
  points: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  lastFive: string;
  cleansheets: number;
};

export const teams: Team[] = [
  /**
   * Conference 1 ===========================================================================================
   */
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 101,
    teamName: "Biomed",
    teamCode: "BIO",
    previousRank: 2,
    played: 2,
    points: 4,
    wins: 1,
    draws: 1,
    losses: 0,
    goalsFor: 6,
    goalsAgainst: 2,
    lastFive: "WD",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 102,
    teamName: "Electrical B",
    teamCode: "ELB",
    previousRank: 2,
    played: 2,
    points: 4,
    wins: 1,
    draws: 1,
    losses: 0,
    goalsFor: 7,
    goalsAgainst: 5,
    lastFive: "DW",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 103,
    teamName: "Software",
    teamCode: "SFT",
    previousRank: 3,
    played: 2,
    points: 2,
    wins: 0,
    draws: 2,
    losses: 0,
    goalsFor: 5,
    goalsAgainst: 5,
    lastFive: "DD",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 104,
    teamName: "Extension",
    teamCode: "EXT",
    previousRank: 4,
    played: 2,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 2,
    goalsFor: 2,
    goalsAgainst: 8,
    lastFive: "LL",
    cleansheets: 0,
  },

  /**
   * Conference 2 ============================================================================================
   */
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 201,
    teamName: "Civil",
    teamCode: "CVL",
    previousRank: 2,
    played: 2,
    points: 3,
    wins: 1,
    draws: 0,
    losses: 1,
    goalsFor: 7,
    goalsAgainst: 5,
    lastFive: "LW",
    cleansheets: 0,
  },
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 202,
    teamName: "Electrical A",
    teamCode: "ELA",
    previousRank: 1,
    played: 2,
    points: 3,
    wins: 1,
    draws: 0,
    losses: 1,
    goalsFor: 9,
    goalsAgainst: 4,
    lastFive: "LW",
    cleansheets: 1,
  },
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 203,
    teamName: "Mechanical",
    teamCode: "MEC",
    previousRank: 4,
    played: 2,
    points: 3,
    wins: 1,
    draws: 0,
    losses: 1,
    goalsFor: 3,
    goalsAgainst: 8,
    lastFive: "WL",
    cleansheets: 0,
  },
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 204,
    teamName: "Chemical",
    teamCode: "CHE",
    previousRank: 3,
    played: 2,
    points: 3,
    wins: 1,
    draws: 0,
    losses: 1,
    goalsFor: 6,
    goalsAgainst: 8,
    lastFive: "WL",
    cleansheets: 0,
  },
];
