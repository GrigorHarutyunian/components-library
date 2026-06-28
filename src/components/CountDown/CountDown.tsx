import { useEffect, useState } from "react";
import type { Color } from "../../models";

import { SECOND_MS, MINUTE_MS, HOUR_MS, DAY_MS } from "../../utils";
import { formatTime } from "./formatTime";
import "./CountDown.css";
import clsx from "clsx";
interface ICountDownProps {
  date: Date;
  children?: any;
  color?: Color;
  sizeNumber?: string;
  sizeLabel?: string;
  containerWidth: string;
  className?: string;
}
const getRemainingTime = (date: Date) =>
  Math.max(date.getTime() - Date.now(), 0);
const CountDown = ({
  date,
  color,
  sizeNumber,
  sizeLabel,
  containerWidth,
  className,
}: ICountDownProps) => {
  const [remainingTime, setRemainingTime] = useState<number>(
    getRemainingTime(date),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDiff = getRemainingTime(date);

      setRemainingTime(newDiff);

      if (newDiff === 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  const days = Math.floor(remainingTime / DAY_MS);
  const hours = Math.floor((remainingTime / HOUR_MS) % 24);
  const minutes = Math.floor((remainingTime / MINUTE_MS) % 60);
  const seconds = Math.floor((remainingTime / SECOND_MS) % 60);

  return (
    <div
      className={clsx(className, `cl-countdown`, `cl-countdown--${color}`)}
      style={
        {
          "--cl-countdown-width": containerWidth,
          "--cl-countdown-number-size": sizeNumber,
          "--cl-countdown-label-size": sizeLabel,
        } as React.CSSProperties
      }
    >
      <div className="cl-countdown__items-container">
        <div className="cl-countdown__item">
          <div className="cl-countdown__number">{formatTime(days)}</div>
          <div className="cl-countdown__label">DAYS</div>
        </div>

        <div className="cl-countdown__item">
          <div className="cl-countdown__number">{formatTime(hours)}</div>
          <div className="cl-countdown__label">HOURS</div>
        </div>

        <div className="cl-countdown__item">
          <div className="cl-countdown__number">{formatTime(minutes)}</div>
          <div className="cl-countdown__label">MINUTES</div>
        </div>

        <div className="cl-countdown__item">
          <div className="cl-countdown__number">{formatTime(seconds)}</div>
          <div className="cl-countdown__label">SECONDS</div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
