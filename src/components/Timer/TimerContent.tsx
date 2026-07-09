import clsx from "clsx";
import Button from "../Button/Button";
import formatTimerDisplay from "./utils/formatTimerDisplay";
import { TIMER_ADD_TIME_OPTIONS } from "./constants/constants";
import { SECOND_MS, MINUTE_MS, HOUR_MS, DAY_MS } from "../../constants";

interface ITimerContentProps {
  initialRemainingTime: number;
  remainingTime: number;
  isReset: boolean;
  onAddTime: (minutes: number) => void;
  isPlaying: boolean;
}

const TimerContent = ({
  remainingTime,
  initialRemainingTime,
  isReset,
  onAddTime,
  isPlaying,
}: ITimerContentProps) => {
  const days = Math.floor(remainingTime / DAY_MS);
  const hours = Math.floor((remainingTime / HOUR_MS) % 24);
  const minutes = Math.floor((remainingTime / MINUTE_MS) % 60);
  const seconds = Math.floor((remainingTime / SECOND_MS) % 60);
  const CIRCUMFERENCE = 283;
  const progress =
    initialRemainingTime > 0
      ? (remainingTime / initialRemainingTime) * 1.0001
      : 0;

  const clamped = Math.max(0, Math.min(1, progress));

  const offset = CIRCUMFERENCE * (1 - clamped);

  const formattedTime = formatTimerDisplay({
    days,
    hours,
    minutes,
    seconds,
  });

  return (
    <div className="cl-timer__content">
      {!isReset && (
        <svg className="cl-timer__svg" aria-hidden="true" viewBox="0 0 100 100">
          <circle className="cl-timer__track" cx="50%" cy="50%" r="45"></circle>
          <circle
            className={clsx("cl-timer__ring")}
            cx="50%"
            cy="50%"
            r="45"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          ></circle>
        </svg>
      )}
      <div className="cl-timer__time">{formattedTime}</div>
      {(!isPlaying || isReset) && (
        <>
          <div className="cl-timer__buttons-top-line"></div>
          <div className="cl-timer__buttons-add-time">
            {TIMER_ADD_TIME_OPTIONS.map((time) => {
              return (
                <Button
                  key={time.value}
                  onClick={() => onAddTime(time.value)}
                  size="small"
                  variant="contained"
                  href=""
                >
                  {time.label}
                </Button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default TimerContent;
