import { useState } from 'react';

export default () => {
  const [count, setCount] = useState(10);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
};
