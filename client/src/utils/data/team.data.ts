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
   * Conference 1
   */
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 201,
    teamName: "Biomed",
    teamCode: "BIO",
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
    conference: 1,
    inPlayoffs: false,
    teamID: 103,
    teamName: "Electrical B",
    teamCode: "ELB",
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
    conference: 1,
    inPlayoffs: false,
    teamID: 105,
    teamName: "Software",
    teamCode: "SFT",
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
    conference: 1,
    inPlayoffs: false,
    teamID: 101,
    teamName: "Extension",
    teamCode: "EXT",
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

  /**
   * Conference 2
   */
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 202,
    teamName: "Civil",
    teamCode: "CV2",
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
    teamID: 203,
    teamName: "Electrical A",
    teamCode: "ELA",
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
    teamID: 104,
    teamName: "Mechanical",
    teamCode: "MEC",
    previousRank: 0,
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    lastFive: "LLWW",
    cleansheets: 0,
  },
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 101,
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
