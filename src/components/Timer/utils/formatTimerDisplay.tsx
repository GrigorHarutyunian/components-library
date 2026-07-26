import { formatTime } from "./formatTime";

interface ITimerParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const formatTimerDisplay = ({ days, hours, minutes, seconds }: ITimerParts) => {
  if (days > 0) {
    return `${days}:${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  }

  if (hours > 0) {
    return `${hours}:${formatTime(minutes)}:${formatTime(seconds)}`;
  }

  if (minutes > 0) {
    return `${minutes}:${formatTime(seconds)}`;
  }

  return `${seconds}`;
};

export default formatTimerDisplay;
