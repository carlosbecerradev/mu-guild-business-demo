const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDateDiffs = (TimeInMilliseconds) => {
  const now = Date.now();
  const elapsed = (TimeInMilliseconds - now) / 1000;
  for(const [unit, secondsInUnit] of DATE_UNITS){
    if(Math.abs(elapsed) > secondsInUnit || unit === "second"){
      const value = Math.round(elapsed / secondsInUnit);
      return {value, unit};
    }
  }
};

export default function useTimeAgo(dateTime) {
    if(dateTime == null){
      return ""
    }
    const convertDateTimeToMilliseconds = (new Date(dateTime)).getTime();
    const {value, unit} = getDateDiffs(convertDateTimeToMilliseconds);
    const rtf = new Intl.RelativeTimeFormat('es', {
      style: "short" });
    return rtf.format(value, unit);
}
