import {useContext, useEffect, useRef, useState} from 'react';
import {Global} from '../pages/_app';

const Timer = () => {
  const {start, setStart} = useContext(Global);
  const [time, setTime] = useState<number>(0);
  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (start) {
      interval.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      setTime(0);
      clearInterval(interval.current as NodeJS.Timeout);
    }
  }, [start]);

  return (
    <>
      <ul>
        <li
          className={time > 999 ? 'time-9' : `time-${Math.floor(time / 100)}`}
        ></li>
        <li
          className={
            time > 999 ? 'time-9' : `time-${Math.floor((time % 100) / 10)}`
          }
        ></li>
        <li className={time > 999 ? 'time-9' : `time-${time % 10}`}></li>
      </ul>
    </>
  );
};

export default Timer;
