import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay: number) => {
  const interval = useRef<any>(null);

  useEffect(() => {
    interval.current = setInterval(callback, delay);

    return () => {
      clearInterval(interval.current);
    };
  }, []);
};

export default useInterval;
