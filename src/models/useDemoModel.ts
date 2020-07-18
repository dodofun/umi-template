import { useCallback, useState } from 'react';

export default () => {
  const [count, setCount] = useState(10);
  const [time, setTime] = useState(new Date());
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [count]);
  const decrement = useCallback(() => setCount(c => c - 1), []);
  return { count, increment, decrement };
};
