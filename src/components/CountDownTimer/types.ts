export type TimeFormat = {
  minutes: number;
  seconds: number;
};

export type TimerProps = {
  timeFormat: TimeFormat;
  active?: boolean;
  speed?: number;
};
