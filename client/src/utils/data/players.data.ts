export type Player = {
  playerID: number;
  teamCode: string;
  name: string;
  fname: string;
  nickname?: string;
  position: string;
  goals: number;
  assists: number;
  isCaptain?: boolean;
};

export const players: Player[] = [

  /**
   * Software ====================================================================
   */
  {
    playerID: 1,
    teamCode: "SFT",
    name: "Biniyam",
    nickname: "Benj",
    fname: "Abiy",
    position: "GK",
    goals: 0,
    assists: 0,
    isCaptain: true,
  },
  {
    playerID: 2,
    teamCode: "SFT",
    name: "Nahom",
    fname: "Tamru",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 3,
    teamCode: "SFT",
    name: "Abraham",
    fname: "Tesfaye",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 4,
    teamCode: "SFT",
    name: "Best",
    fname: "Mesele",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 5,
    teamCode: "SFT",
    name: "Elias",
    fname: "Melaku",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 6,
    teamCode: "SFT",
    name: "Biruk",
    fname: "Ayalew",
    position: "DF",
    goals: 0,
    assists: 1,
  },
  {
    playerID: 7,
    teamCode: "SFT",
    nickname: "Abenezer Fk.",
    name: "Abenezer",
    fname: "Fekadu",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 8,
    teamCode: "SFT",
    nickname: "Amanuel D.",
    name: "Amanuel",
    fname: "Debebe",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 9,
    teamCode: "SFT",
    name: "Semere",
    fname: "Habtu",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  // {
  //   playerID: 10,
  //   teamCode: "SFT",
  //   nickname: "Wasse",
  //   name: "Wassihun",
  //   fname: "Dangura",
  //   position: "MD",
  //   goals: 0,
  //   assists: 0,
  // },
  {
    playerID: 200,
    teamCode: "SFT",
    name: "Murad",
    fname: "Abdella",
    position: "MD",
    goals: 1,
    assists: 0,
  },
  
  {
    playerID: 11,
    teamCode: "SFT",
    name: "Gedle",
    fname: "Teklu",
    position: "ST",
    goals: 0,
    assists: 0,
  },

  /**
   * Biomed =========================================================================
   */
  {
    playerID: 2012,
    teamCode: "BIO",
    nickname: "Yonathan G.",
    name: "Yonathan",
    fname: "",
    position: "GK",
    goals: 0,
    assists: 1,
  },
  {
    playerID: 2013,
    teamCode: "BIO",
    nickname: "Gemechis T.",
    name: "Gemechis",
    fname: "",
    position: "DF",
    goals: 1,
    assists: 0,
  },
  // {
  //   playerID: 2014,
  //   teamCode: "BIO",
  //   name: "Abiy",
  //   fname: "",
  //   position: "DF",
  //   goals: 0,
  //   assists: 0,
  // },
  // {
  //   playerID: 2015,
  //   teamCode: "BIO",
  //   name: "Adisu",
  //   fname: "",
  //   position: "DF",
  //   goals: 0,
  //   assists: 0,
  // },
  // {
  //   playerID: 2016,
  //   teamCode: "BIO",
  //   name: "Debela",
  //   fname: "",
  //   position: "DF",
  //   goals: 0,
  //   assists: 0,
  // },
  // {
  //   playerID: 2017,
  //   teamCode: "BIO",
  //   name: "Eyob",
  //   fname: "",
  //   position: "DF",
  //   goals: 0,
  //   assists: 0,
  // },
  // {
  //   playerID: 2018,
  //   teamCode: "BIO",
  //   name: "Gemta",
  //   fname: "",
  //   position: "DF",
  //   goals: 0,
  //   assists: 0,
  // },
  // {
  //   playerID: 2019,
  //   teamCode: "BIO",
  //   name: "Sisay",
  //   fname: "",
  //   position: "DF",
  //   goals: 0,
  //   assists: 0,
  // },
  // {
  //   playerID: 20110,
  //   teamCode: "BIO",
  //   name: "Yirga",
  //   fname: "",
  //   position: "DF",
  //   goals: 0,
  //   assists: 1,
  // },
  // {
  //   playerID: 20111,
  //   teamCode: "BIO",
  //   name: "Abel",
  //   fname: "",
  //   position: "MD",
  //   goals: 1,
  //   assists: 2,
  // },
  
  /**
   * Electrical B ==============================================================================
   */
  {
    playerID: 23,
    teamCode: "ELB",
    name: "Markos",
    fname: "Beyene",
    position: "GK",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 24,
    teamCode: "ELB",
    name: "Dawit",
    fname: "Adissie",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 25,
    teamCode: "ELB",
    name: "Dawit",
    fname: "Weldeyesus",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 26,
    teamCode: "ELB",
    name: "Misgana",
    fname: "Abate",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 27,
    teamCode: "ELB",
    name: "Esubalew",
    fname: "Tesfaye",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 28,
    teamCode: "ELB",
    name: "Amaniel",
    fname: "Dagne",
    position: "DF",
    goals: 0,
    assists: 1,
  },
  {
    playerID: 29,
    teamCode: "ELB",
    name: "Hiyaw",
    fname: "Amanuel",
    position: "MD",
    goals: 0,
    assists: 1,
  },
  {
    playerID: 30,
    teamCode: "ELB",
    name: "Samuel",
    fname: "Solomon",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 31,
    teamCode: "ELB",
    name: "Suraphel",
    fname: "Dagne",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 32,
    teamCode: "ELB",
    name: "Temesgen",
    fname: "Tesfaye",
    position: "MD",
    goals: 2,
    assists: 0,
  },
  {
    playerID: 33,
    teamCode: "ELB",
    nickname: "Natnael B.",
    name: "Natnael",
    fname: "Bekele",
    position: "MD",
    goals: 1,
    assists: 1,
  },

  /**
   * Extension ====================================================================
   */
  {
    playerID: 34,
    teamCode: "EXT",
    name: "Estifanos",
    fname: "Alemu",
    position: "GK",
    goals: 1,
    assists: 0,
    isCaptain: true,
  },
  {
    playerID: 35,
    teamCode: "EXT",
    name: "Ephriam",
    fname: "Nigus",
    position: "GK",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 36,
    teamCode: "EXT",
    name: "Solomon",
    fname: "Addis",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 37,
    teamCode: "EXT",
    name: "Eliyas",
    fname: "Tezelek",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 38,
    teamCode: "EXT",
    name: "Zekariyas",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 39,
    teamCode: "EXT",
    name: "Yohaness",
    fname: "Nigussie",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 40,
    teamCode: "CV1",
    name: "Zelalem",
    fname: "Geremew",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 41,
    teamCode: "EXT",
    name: "Gizachew",
    fname: "Abera",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 42,
    teamCode: "EXT",
    name: "Habte",
    // nickname: "Nati M.",
    fname: "Kebede",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 43,
    teamCode: "EXT",
    name: "Mesfin",
    fname: "Haftu",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 44,
    teamCode: "EXT",
    name: "Degafe",
    fname: "Getaneh",
    position: "ST",
    goals: 0,
    assists: 0,
  },

  /**
   * Chemical ============================================================================
   */
  {
    playerID: 45,
    teamCode: "CHE",
    nickname: "Amanuel A.",
    name: "Amanuel",
    fname: "Atsbeha",
    position: "DF",
    goals: 0,
    assists: 0,
    isCaptain: true,
  },
  {
    playerID: 46,
    teamCode: "CHE",
    nickname: "Abdulaziz Te.",
    name: "Abdulaziz",
    fname: "Temam",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 47,
    teamCode: "CHE",
    name: "Lingerew",
    fname: "Negesse",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 48,
    teamCode: "CHE",
    name: "Hibreselam",
    fname: "Dereje",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 49,
    teamCode: "CHE",
    name: "Habtamu",
    fname: "Philippos",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 50,
    teamCode: "CHE",
    nickname: "Bereket T.",
    name: "Bereket",
    fname: "Tefera",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 51,
    teamCode: "CHE",
    name: "Yonatan",
    fname: "Seyoum",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 52,
    teamCode: "CHE",
    nickname: "Abenezer Ay.",
    name: "Abenezer",
    fname: "Ayele",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 53,
    teamCode: "CHE",
    nickname: "Amanuel T.",
    name: "Amanuel",
    fname: "Tesfaye",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 54,
    teamCode: "CHE",
    name: "Yared",
    fname: "Yirga",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 55,
    teamCode: "CHE",
    name: "Yeabsira",
    fname: "Kassahun",
    position: "ST",
    goals: 0,
    assists: 0,
  },

  /**
   * Electrical A ==============================================================================
   */
  {
    playerID: 56,
    teamCode: "ELA",
    name: "Kenbon",
    fname: "Teshome",
    position: "GK",
    goals: 0,
    assists: 0,
    isCaptain: true,
  },
  {
    playerID: 57,
    teamCode: "ELA",
    name: "Fisehatsion",
    fname: "Mekuanint",
    position: "GK",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 58,
    teamCode: "ELA",
    name: "Desta",
    fname: "Workneh",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 59,
    teamCode: "ELA",
    name: "Mikiyas",
    fname: "Thewodros",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 60,
    teamCode: "ELA",
    nickname: "Nathnael Me.",
    name: "Nathnael",
    fname: "Meshesha",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 61,
    teamCode: "ELA",
    nickname: "Nathnael Sol.",
    name: "Nathnael",
    fname: "Solomon",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 62,
    teamCode: "ELA",
    name: "Bruk",
    fname: "Mekonnen",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 63,
    teamCode: "ELA",
    name: "Samuel",
    fname: "Kebede",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 64,
    teamCode: "ELA",
    nickname: "Bereket A.",
    name: "Bereket",
    fname: "Abate",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 65,
    teamCode: "ELA",
    nickname: "Kidus Y",
    name: "Kidus",
    fname: "Yenew",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 66,
    teamCode: "ELA",
    nickname: "Abenezer Yo.",
    name: "Abenezer",
    fname: "Yoseph",
    position: "MD",
    goals: 0,
    assists: 0,
  },

  /**
  * Civil ===============================================================================
  */
  {
    playerID: 67,
    teamCode: "CVL",
    name: "Matiyas",
    fname: "Melese",
    position: "DF",
    goals: 0,
    assists: 0,
    isCaptain: true,
  },
  {
    playerID: 68,
    teamCode: "CVL",
    name: "Abreham",
    fname: "Mekonen",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 69,
    teamCode: "CVL",
    nickname: "Nathnael Ab.",
    name: "Nathnael",
    fname: "Abebe",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 70,
    teamCode: "CVL",
    name: "Yonas",
    fname: "Teshome",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 71,
    teamCode: "CVL",
    name: "Kasahun",
    fname: "",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 72,
    teamCode: "CVL",
    name: "Abubeker",
    fname: "",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 73,
    teamCode: "CVL",
    name: "Finhas",
    fname: "",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 74,
    teamCode: "CVL",
    name: "Fehmi",
    fname: "",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 75,
    teamCode: "CVL",
    name: "Alazar",
    fname: "Zereyakob",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 76,
    teamCode: "CVL",
    name: "Abdulaziz",
    fname: "",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 77,
    teamCode: "CVL",
    name: "Lilah",
    fname: "",
    position: "ST",
    goals: 0,
    assists: 0,
  },

  /**
   * Mechanical ===================================================================================
   */
  {
    playerID: 78,
    teamCode: "MEC",
    nickname: "Nebiyu Ay.",
    name: "Nebiyu",
    fname: "Aydagnuhim",
    position: "GK",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 79,
    teamCode: "MEC",
    name: "Abraham",
    fname: "Mulugeta",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 80,
    teamCode: "MEC",
    name: "Desalegn",
    fname: "Gelana",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 81,
    teamCode: "MEC",
    nickname: "Nathnael Te.",
    name: "Nathnael",
    fname: "Teshome",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 82,
    teamCode: "MEC",
    nickname: "Natinael Bi.",
    name: "Natinael",
    fname: "Birhanu",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 83,
    teamCode: "MEC",
    name: "Fasil",
    fname: "Beyene",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 84,
    teamCode: "MEC",
    nickname: "Kidus H.",
    name: "Kidus",
    fname: "Haileab",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 85,
    teamCode: "MEC",
    name: "Raji",
    fname: "Tegenu",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 86,
    teamCode: "MEC",
    nickname: "",
    name: "Biruk",
    fname: "Birhanu",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 87,
    teamCode: "MEC",
    name: "Addis",
    fname: "Markos",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 88,
    teamCode: "MEC",
    nickname: "Nebiyu Ab.",
    name: "Nebiyu",
    fname: "Abdu",
    position: "MD",
    goals: 0,
    assists: 0,
  },
];
