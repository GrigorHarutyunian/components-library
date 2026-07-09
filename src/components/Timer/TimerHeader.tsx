import Button from "../Button/Button";
import timer_logo from "../../assets/imgs/timer_logo.png";
import { FullscreenIcon, VolumeOffIcon, VolumeOnIcon } from "../../icons";
interface ITimerHeaderProps {
  isAlarmEnabled: boolean;
  onAlarm: () => void;
  onOpenModal: () => void;
}

const TimerHeader = ({
  isAlarmEnabled,
  onAlarm,
  onOpenModal,
}: ITimerHeaderProps) => {
  return (
    <div className="cl-timer__header">
      <div className="cl-timer__logo">
        <img src={timer_logo} alt="Timer logo" />
      </div>
      <div className="cl-timer__header-left">
        <Button
          variant="text"
          color="primary"
          size="small"
          href=""
          onClick={onAlarm}
        >
          {isAlarmEnabled ? <VolumeOnIcon /> : <VolumeOffIcon />}
        </Button>
        <Button
          variant="text"
          color="primary"
          size="small"
          href=""
          onClick={onOpenModal}
        >
          <FullscreenIcon />
        </Button>
      </div>
    </div>
  );
};

export default TimerHeader;
