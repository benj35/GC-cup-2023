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
    played: 1,
    points: 1,
    wins: 0,
    draws: 1,
    losses: 0,
    goalsFor: 1,
    goalsAgainst: 1,
    lastFive: "D",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 102,
    teamName: "Electrical B",
    teamCode: "ELB",
    previousRank: 2,
    played: 1,
    points: 3,
    wins: 1,
    draws: 0,
    losses: 0,
    goalsFor: 3,
    goalsAgainst: 1,
    lastFive: "W",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 103,
    teamName: "Software",
    teamCode: "SFT",
    previousRank: 3,
    played: 1,
    points: 1,
    wins: 0,
    draws: 1,
    losses: 0,
    goalsFor: 1,
    goalsAgainst: 1,
    lastFive: "D",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 104,
    teamName: "Extension",
    teamCode: "EXT",
    previousRank: 4,
    played: 1,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 1,
    goalsFor: 1,
    goalsAgainst: 3,
    lastFive: "L",
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
    previousRank: 0,
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    lastFive: "",
    cleansheets: 0,
  },
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 202,
    teamName: "Electrical A",
    teamCode: "ELA",
    previousRank: 2,
    played: 1,
    points: 3,
    wins: 1,
    draws: 0,
    losses: 0,
    goalsFor: 6,
    goalsAgainst: 0,
    lastFive: "W",
    cleansheets: 1,
  },
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 203,
    teamName: "Mechanical",
    teamCode: "MEC",
    previousRank: 3,
    played: 1,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 1,
    goalsFor: 0,
    goalsAgainst: 6,
    lastFive: "L",
    cleansheets: 0,
  },
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 204,
    teamName: "Chemical",
    teamCode: "CHE",
    previousRank: 0,
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    lastFive: "",
    cleansheets: 0,
  },
];
