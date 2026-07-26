export const getRemainingTime = (date: Date) =>
  Math.max(date.getTime() - Date.now(), 0);
