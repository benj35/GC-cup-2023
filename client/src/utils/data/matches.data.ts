export type Match = {
  state: string;
  playOffStage?: string;
  conference: number;
  matchID: string;
  teams: {
    team1: number;
    team2: number;
  };
  schedule: string;
  score: {
    team1: number | null;
    team2: number | null;
  };
  events: {
    team1: MatchEvent[];
    team2: MatchEvent[];
  };
};

type MatchEvent = {
  name: string;
  event: String;
  assist?: string;
  minute?: Date;
};

export const matches: Match[] = [
  /**
   * Conference 1 ===========================================================================================================================
   */
  {
    state: "ft",
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      // Biomed vs Software
      team1: 101,
      team2: 103,
    },
    schedule: new Date("April 04, 2023 12:00").toString(),
    score: {
      team1: 1,
      team2: 1,
    },
    events: {
      team1: [
        {
          name: "Gemechis T.",
          event: "goal",
          assist: "Yonathan G.",
        },
      ],
      team2: [
        {
          name: "Murad A.",
          event: "goal",
          assist: "Biruk A.",
        },
      ],
    },
  },
  {
    state: "ft",
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      // Electrical-B vs Extension
      team1: 102,
      team2: 104,
    },
    schedule: new Date("April 01, 2023 16:00").toString(),
    score: {
      team1: 3,
      team2: 1,
    },
    events: {
      team1: [
        {
          name: "Temesgen T.",
          event: "goal",
          assist: "Amaniel D.",
        },
        {
          name: "Nathnael B.",
          event: "goal",
          assist: "Hiyaw",
        },
        {
          name: "Temesgen T.",
          event: "goal",
          assist: "Nathnael B.",
        },
      ],
      team2: [
        {
          name: "Ephrem N.",
          event: "pm",
        },
        {
          name: "Estiphanos",
          event: "goal",
          assist: "Zekariyas",
        },
      ],
    },
  },

  {
    state: "ft",
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      // Biomed vs Extension
      team1: 101,
      team2: 104,
    },
    schedule: new Date("April 29, 2023 15:00").toString(),
    score: {
      team1: 5,
      team2: 1,
    },
    events: {
      team1: [
        {
          name: "Moges",
          event: "goal",
          assist: "Iyoas",
        },
        {
          name: "Bethel",
          event: "goal",
          assist: "Sador Y.",
        },
        {
          name: "Sador Y.",
          event: "goal",
          assist: "Yonathan G."
        },
        {
          name: "Habtamu",
          event: "og",
        },
        {
          name: "Yonathan G.",
          event: "goal",
          assist: "Yared",
        },
      ],
      team2: [
        {
          name: "Zelalem",
          event: "ps",
        },
      ],
    },
  },

  {
    state: "ft",
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      // Electrical-B vs Software
      team1: 102,
      team2: 103,
    },
    schedule: new Date("May 05, 2023 11:00").toString(),
    score: {
      team1: 4,
      team2: 4,
    },
    events: {
      team1: [
        {
          name: "Temesgen T.",
          event: "goal",
          assist: "Hiyaw",
        },
        {
          name: "Misganaw",
          event: "goal",
          assist: "Hiyaw",
        },
        {
          name: "Hiyaw",
          event: "goal",
          assist: "Misganaw",
        },
        {
          name: "Hiyaw",
          event: "goal",
          assist: "Dawit A.",
        },
      ],
      team2: [
        {
          name: "Nahom T.",
          event: "goal",
          assist: "Biruk A.",
        },
        {
          name: "Nahom T.",
          event: "goal",
        },
        {
          name: "Biruk A.",
          event: "goal",
          assist: "Benj"
        },
        {
          name: "Alayu",
          event: "goal",
          assist: "Benj",
        },
      ],
    },
  },

  /**
   * Conference 2 =========================================================================================================================
   */

  {
    state: "ft",
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      // Electrical-A vs Mechanical
      team1: 202,
      team2: 203,
    },
    schedule: new Date("April 04, 2023 16:00").toString(),
    score: {
      team1: 6,
      team2: 0,
    },
    events: {
      team1: [
        {
          name: "Biruk Me.",
          event: "goal",
          assist: "Abenezer Yo.",
        },
        {
          name: "Abenezer Yo.",
          event: "goal",
          assist: "Desta",
        },
        {
          name: "Biruk Me.",
          event: "goal",
          assist: "Abenezer Yo.",
        },
        {
          name: "Mikiyas Te.",
          event: "goal",
          assist: "Biruk Me.",
        },
        {
          name: "Abenezer Yo.",
          event: "goal",
          assist: "Kenbon",
        },
        {
          name: "Abenezer Yo.",
          event: "goal",
          assist: "Nathnael So.",
        },

      ],
      team2: [
      ],
    },
  },
  {
    state: "ft",
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      // Civil vs Chemical
      team1: 201,
      team2: 204,
    },
    schedule: new Date("April 05, 2023 16:00").toString(),
    score: {
      team1: 5,
      team2: 2,
    },
    events: {
      team1: [
        {
          name: "Alazar Z",
          event: "goal",
          assist: "Matias M.",
        },
        {
          name: "Natnael",
          event: "goal",
          assist: "Abraham M.",
        },
        {
          name: "Fehmi",
          event: "goal",
        },
        {
          name: "Finhas",
          event: "goal",
          assist: "Matias M.",
        },
        {
          name: "Yonas",
          event: "goal",
          assist: "Abdulaziz",
        },
      ],
      team2: [
        {
          name: "Habtamu P.",
          event: "goal",
        },
        {
          name: "Abenezer A.",
          event: "goal",
        },
      ],
    },
  },



  {
    state: "ft",
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      // Electrical-A vs Chemical
      team1: 202,
      team2: 204,
    },
    schedule: new Date("April 25, 2023 11:00").toString(),
    score: {
      team1: 3,
      team2: 4,
    },
    events: {
      team1: [
        {
          name: "Nathnael M.",
          event: "goal",
          assist: "Abenezer Yo.",
        },
        {
          name: "Abenezer Yo.",
          event: "ps",
        },
        {
          name: "Nathnael M.",
          event: "goal",
          assist: "Biruk Me.",
        },

      ],
      team2: [
        {
          name: "Amanuel T.",
          event: "goal",
        },
        {
          name: "Amanuel T.",
          event: "goal",
          assist: "Amanuel A.",
        },
        {
          name: "Amanuel T.",
          event: "ps",
        },
        {
          name: "Yeabsira K.",
          event: "goal",
        },
      ],
    },
  },

  {
    state: "ft",
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      // Mechanical vs Civil
      team1: 203,
      team2: 201,
    },
    schedule: new Date("April 26, 2023 16:00").toString(),
    score: {
      team1: 3,
      team2: 2,
    },
    events: {
      team1: [
        {
          name: "Kidus H.",
          event: "ps",
        },
        {
          name: "Nebiyu A.",
          event: "goal",
        },
        {
          name: "Fasil B.",
          event: "goal",
        },
      ],
      team2: [
        {
          name: "Finihas",
          event: "goal",
        },
        {
          name: "Yonas T.",
          event: "goal",
          assist: "Finihas",
        },
      ],
    },
  },











































































  /**
   * Play-offs ==============================================================================================================================================
   */

  // {
  //   state: "sc",
  //   playOffStage: "SF",
  //   conference: 3,
  //   matchID: Math.random().toString(36).slice(2),
  //   schedule: new Date("June 28, 2022 10:00").toString(),
  //   teams: {
  //     team1: 102,
  //     team2: 103,
  //   },
  //   score: {
  //     team1: 7,
  //     team2: 3,
  //   },
  //   events: {
  //     team1: [
  //       {
  //         name: "Nati G.",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //       {
  //         name: "Ermiyas",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //       {
  //         name: "Nati G.",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //       {
  //         name: "Nati G.",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //       {
  //         name: "Biruk",
  //         event: "goal",
  //         assist: "Yonas E.",
  //       },
  //       {
  //         name: "Sewnet",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //       {
  //         name: "Nati G.",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //     ],
  //     team2: [
  //       {
  //         name: "Kassa",
  //         event: "goal",
  //         assist: "Biniam",
  //       },
  //       {
  //         name: "Fitsum",
  //         event: "goal",
  //         assist: "Biniam",
  //       },
  //       {
  //         name: "Dawit",
  //         event: "goal",
  //         assist: "Kassa",
  //       },
  //     ],
  //   },
  // },
  // {
  //   state: "ft",
  //   playOffStage: "SF",
  //   conference: 3,
  //   matchID: Math.random().toString(36).slice(2),
  //   schedule: new Date("June 27, 2022 10:00").toString(),
  //   teams: {
  //     team1: 201,
  //     team2: 204,
  //   },
  //   score: {
  //     team1: 3,
  //     team2: 0,
  //   },
  //   events: {
  //     team1: [
  //       {
  //         name: "Ermisha",
  //         event: "goal",
  //         assist: "Abel",
  //       },
  //       {
  //         name: "Ermisha",
  //         event: "goal",
  //         assist: "Yirga",
  //       },
  //       {
  //         name: "Ermisha",
  //         event: "goal",
  //         assist: "Abel",
  //       },
  //     ],
  //     team2: [],
  //   },
  // },
  // {
  //   state: "ft",
  //   playOffStage: "F",
  //   conference: 3,
  //   matchID: Math.random().toString(36).slice(2),
  //   schedule: new Date("July 05, 2022 10:00").toString(),
  //   teams: {
  //     team1: 201,
  //     team2: 102,
  //   },
  //   score: {
  //     team1: 0,
  //     team2: 5,
  //   },
  //   events: {
  //     team1: [],
  //     team2: [
  //       {
  //         name: "Robel",
  //         event: "goal",
  //         assist: "Nati G.",
  //       },
  //       {
  //         name: "Robel",
  //         event: "goal",
  //         assist: "Nati G.",
  //       },
  //       {
  //         name: "Robel",
  //         event: "goal",
  //         assist: "Biruk",
  //       },
  //       {
  //         name: "Biruk",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //       {
  //         name: "Nati G.",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //     ],
  //   },
  // },
];
