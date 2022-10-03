import {useContext, useEffect, useRef, useState} from 'react';
import {Global} from '../pages/_app';

const Timer = () => {
  const {start, setStart} = useContext(Global);
  const [time, setTime] = useState<number>(0);
  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (start) {
      setTime(0);
      interval.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval.current as NodeJS.Timeout);
    }
  }, [start]);

  return (
    <div className="timer">
      <span
        className={`digit digit-${time > 999 ? 9 : Math.floor(time / 100)}`}
      ></span>
      <span
        className={`digit digit-${
          time > 999 ? 9 : Math.floor((time % 100) / 10)
        }`}
      ></span>
      <span className={`digit digit-${time > 999 ? 9 : time % 10}`}></span>
    </div>
  );
};

export default Timer;
