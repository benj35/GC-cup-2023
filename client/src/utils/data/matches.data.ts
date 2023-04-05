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
    state: "sc",
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      // Civil vs Chemical
      team1: 201,
      team2: 204,
    },
    schedule: new Date("April 05, 2023 16:00").toString(),
    score: {
      team1: 0,
      team2: 0,
    },
    events: {
      team1: [
        {
          name: "Ermisha",
          event: "goal",
          assist: "Kena",
        },
        {
          name: "Ermisha",
          event: "ps",
        },
      ],
      team2: [
        {
          name: "Tekle",
          event: "ps",
        },
        {
          name: "Beken",
          event: "goal",
          assist: "Zekarias",
        },
        {
          name: "Beken",
          event: "goal",
        },
        {
          name: "Kevin",
          event: "goal",
          assist: "Tekle",
        },
      ],
    },
  },
  // {
  //   state: "ft",
  //   conference: 2,
  //   matchID: Math.random().toString(36).slice(2),
  //   teams: {
  //     team1: 202,
  //     team2: 204,
  //   },
  //   schedule: new Date("June 3, 2022 14:00").toString(),
  //   score: {
  //     team1: 6,
  //     team2: 6,
  //   },
  //   events: {
  //     team1: [
  //       {
  //         name: "Yeabsira",
  //         event: "goal",
  //         assist: "Kalo",
  //       },
  //       {
  //         name: "Kalo",
  //         event: "goal",
  //         assist: "Josh",
  //       },
  //       {
  //         name: "Roba",
  //         event: "goal",
  //         assist: "Teda",
  //       },
  //       {
  //         name: "Roba",
  //         event: "goal",
  //         assist: "Yeabsira",
  //       },
  //       {
  //         name: "Roba",
  //         event: "goal",
  //         assist: "Kalo",
  //       },
  //       {
  //         name: "Josh",
  //         event: "goal",
  //       },
  //     ],
  //     team2: [
  //       {
  //         name: "Beken",
  //         event: "goal",
  //         assist: "Zekarias",
  //       },
  //       {
  //         name: "Beken",
  //         event: "goal",
  //         assist: "Tekle",
  //       },
  //       {
  //         name: "Tekle",
  //         event: "goal",
  //         assist: "Beken",
  //       },
  //       {
  //         name: "Beken",
  //         event: "goal",
  //       },
  //       {
  //         name: "Kevin",
  //         event: "goal",
  //         assist: "Zekarias",
  //       },
  //       {
  //         name: "Yonathan",
  //         event: "goal",
  //         assist: "Zekarias",
  //       },
  //     ],
  //   },
  // },

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
