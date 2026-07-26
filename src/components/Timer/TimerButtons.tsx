import Button from "../Button/Button";
import { ResetIcon, PlayIcon, PauseIcon } from "../../icons";
interface ITimerButtonsProps {
  isFinished: boolean;
  isReset: boolean;
  isPlaying: boolean;
  onPlay: () => void;
  onReset: () => void;
  onStart: () => void;
}

const TimerButtons = ({
  isFinished,
  isReset,
  isPlaying,
  onPlay,
  onReset,
  onStart,
}: ITimerButtonsProps) => {
  return (
    <div className="cl-timer__buttons">
      {isFinished ? (
        <Button size="medium" variant="contained" href="" onClick={onReset}>
          <ResetIcon />
        </Button>
      ) : isReset ? (
        <Button size="medium" variant="contained" href="" onClick={onStart}>
          <PauseIcon />
        </Button>
      ) : (
        <>
          <Button size="medium" variant="contained" href="" onClick={onPlay}>
            {isPlaying ? <PlayIcon /> : <PauseIcon />}
          </Button>

          <Button size="medium" variant="contained" href="" onClick={onReset}>
            <svg
              focusable="false"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <ResetIcon />
            </svg>
          </Button>
        </>
      )}
    </div>
  );
};

export default TimerButtons;
