import type { Color } from "../../models";
import clsx from "clsx";
import "./Timer.css";
import { useEffect, useMemo, useRef, useState } from "react";
import TimerButtons from "./TimerButtons";
import TimerContent from "./TimerContent";
import { getRemainingTime } from "./utils/getRemainingTime";
import alarm from "../../assets/sounds/alarm.mp3";
import TimerHeader from "./TimerHeader";
import Modal from "../Modal/Modal";

interface ITimerProps {
  activeColor: Color;
  pausedColor: Color;
  endDate: Date;
}

const Timer = ({ activeColor, pausedColor, endDate }: ITimerProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isReset, setIsReset] = useState<boolean>(true);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isAlarmEnabled, setIsAlarmEnabled] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  const [initialRemainingTime, setInitialRemainingTime] = useState<number>(
    getRemainingTime(endDate),
  );

  const [remainingTime, setRemainingTime] =
    useState<number>(initialRemainingTime);

  const alarmRef = useRef<HTMLAudioElement>(new Audio(alarm));

  const currentColor = !isReset && !isPlaying ? pausedColor : activeColor;

  const timerClassName = useMemo(
    () =>
      clsx("cl-timer", `cl-timer--${currentColor}`, {
        "cl-timer--modal": open,
      }),
    [currentColor, open],
  );

  const timerStyle = useMemo(
    () =>
      ({
        "--cl-timer-animation-duration": `${initialRemainingTime}ms`,
      }) as React.CSSProperties,
    [initialRemainingTime],
  );

  const stopAlarm = () => {
    if (!alarmRef.current) return;

    alarmRef.current.pause();
    alarmRef.current.currentTime = 0;
  };

  const handleToggleAlarm = () => {
    const newValue = !isAlarmEnabled;
    alarmRef.current.volume = newValue ? 1 : 0;
    setIsAlarmEnabled(newValue);
  };

  const handleToggleOpenModal = () => {
    setOpen(!open);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    stopAlarm();

    setIsFinished(false);
    setIsReset(true);
    setIsPlaying(false);
    setRemainingTime(initialRemainingTime);
  };

  const handleStart = () => {
    setIsFinished(false);
    setIsReset(false);
    setIsPlaying(true);
  };

  const handleAddTime = (minutes: number) => {
    const addedTime = minutes * 60 * 1000;
    const newTime = remainingTime + addedTime;

    setRemainingTime(newTime);
    setInitialRemainingTime(newTime);
  };

  useEffect(() => {
    if (!isPlaying) return;

    let lastTime = Date.now();

    const id = setInterval(() => {
      const now = Date.now();
      const delta = now - lastTime;
      lastTime = now;

      setRemainingTime((time) => {
        const next = time - delta;

        if (next <= 0) {
          if (isAlarmEnabled) {
            alarmRef.current?.play().catch(() => {});
          }

          clearInterval(id);
          setIsPlaying(false);
          setIsFinished(true);

          return 0;
        }

        return next;
      });
    }, 250);

    return () => clearInterval(id);
  }, [isPlaying, isAlarmEnabled]);

  const timer = (
    <div className={timerClassName} style={timerStyle}>
      <TimerHeader
        onOpenModal={handleToggleOpenModal}
        isAlarmEnabled={isAlarmEnabled}
        onAlarm={handleToggleAlarm}
      />
      <TimerContent
        remainingTime={remainingTime}
        initialRemainingTime={initialRemainingTime}
        isReset={isReset}
        onAddTime={handleAddTime}
        isPlaying={isPlaying}
      />
      <TimerButtons
        isFinished={isFinished}
        isPlaying={isPlaying}
        onStart={handleStart}
        onReset={handleReset}
        onPlay={handleTogglePlay}
        isReset={isReset}
      />
    </div>
  );

  return open ? (
    <Modal open onClose={handleToggleOpenModal}>
      {timer}
    </Modal>
  ) : (
    timer
  );
};

export default Timer;
