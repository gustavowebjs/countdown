export const getDateTimeByTZ = (tz: string): string => {
  const date = new Intl.DateTimeFormat([], {
    timeZone: tz,
    dateStyle: 'long',
  }).format(new Date());

  const time = new Intl.DateTimeFormat([], {
    timeZone: tz,
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  }).format(new Date());

  return date + ' / ' + time;
};
