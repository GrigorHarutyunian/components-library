import { useEffect, useState } from "react";
import { SECOND_MS, MINUTE_MS, HOUR_MS, DAY_MS } from "../../utils";
import "./CountDown.css";
interface ICountDownProps {
  date: Date;
  children?: any;
}

const CountDown = ({ date }: ICountDownProps) => {
  const [dateNow, setDateNow] = useState(new Date().getTime());

  useEffect(() => {
    const id = setInterval(() => {
      const diff = date.getTime() - Date.now();

      if (diff <= 0) {
        clearInterval(id);
        return;
      }

      setDateNow(Date.now());
    }, 1000);

    return () => clearInterval(id);
  }, [date]);
  const dif = date.getTime() - dateNow;
  const days = Math.floor(dif / DAY_MS);
  const hours = Math.floor((dif / HOUR_MS) % 24);
  const minutes = Math.floor((dif / MINUTE_MS) % 60);
  const seconds = Math.floor((dif / SECOND_MS) % 60);

  return (
    <div>
      {days}:{hours}:{minutes}:{seconds}
    </div>
  );
};

export default CountDown;
