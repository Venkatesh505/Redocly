/** Types for safety */
export type RangeKey = "24h" | "7d" | "30d";

export type RequestPoint = { time: string; requests: number };
export type RequestVolumeData = {
  ranges: Record<RangeKey, RequestPoint[]>;
};

export type LatencyPoint = { time: string; ms: number };

/** -- Request Volume (by range) -- */
export const requestVolumeData: RequestVolumeData = {
  ranges: {
    "24h": [
      { time: "00:00", requests: 120 },
      { time: "03:00", requests: 80 },
      { time: "06:00", requests: 95 },
      { time: "09:00", requests: 220 },
      { time: "12:00", requests: 340 },
      { time: "15:00", requests: 420 },
      { time: "18:00", requests: 380 },
      { time: "21:00", requests: 250 },
      { time: "23:30", requests: 170 }
    ],
    "7d": [
      { time: "Mon", requests: 210 },
      { time: "Tue", requests: 260 },
      { time: "Wed", requests: 310 },
      { time: "Thu", requests: 430 },
      { time: "Fri", requests: 400 },
      { time: "Sat", requests: 300 },
      { time: "Sun", requests: 220 }
    ],
    "30d": [
      { time: "1", requests: 160 },
      { time: "2", requests: 170 },
      { time: "3", requests: 190 },
      { time: "4", requests: 210 },
      { time: "5", requests: 230 },
      { time: "6", requests: 240 },
      { time: "7", requests: 290 },
      { time: "8", requests: 330 },
      { time: "9", requests: 360 },
      { time: "10", requests: 410 },
      { time: "11", requests: 430 },
      { time: "12", requests: 420 },
      { time: "13", requests: 410 },
      { time: "14", requests: 380 },
      { time: "15", requests: 360 },
      { time: "16", requests: 340 },
      { time: "17", requests: 320 },
      { time: "18", requests: 300 },
      { time: "19", requests: 280 },
      { time: "20", requests: 260 },
      { time: "21", requests: 250 },
      { time: "22", requests: 240 },
      { time: "23", requests: 230 },
      { time: "24", requests: 225 },
      { time: "25", requests: 220 },
      { time: "26", requests: 215 },
      { time: "27", requests: 210 },
      { time: "28", requests: 208 },
      { time: "29", requests: 205 },
      { time: "30", requests: 200 }
    ]
  }
};

/** -- Latency 24h -- */
export const latency24hData: LatencyPoint[] = [
  { time: "00:00", ms: 52 },
  { time: "03:00", ms: 47 },
  { time: "06:00", ms: 44 },
  { time: "09:00", ms: 41 },
  { time: "12:00", ms: 46 },
  { time: "15:00", ms: 49 },
  { time: "18:00", ms: 45 },
  { time: "21:00", ms: 43 },
  { time: "23:30", ms: 44 }
];

/** -- Uptime % - */
export const uptimePercentage = 99.8;
