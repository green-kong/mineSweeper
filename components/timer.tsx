import {useContext, useEffect, useState} from 'react';
import {Global} from '../pages/_app';

const Timer = () => {
  const {start, setStart} = useContext(Global);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {}, [start]);
};

export default Timer;
