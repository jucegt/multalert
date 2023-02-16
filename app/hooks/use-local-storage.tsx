import { useEffect, useState } from 'react';

const getLocalStorage = <T,>(key: string, defaultValue: T) => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    const value: T | null = saved ? JSON.parse(saved) : null;
    return value ?? defaultValue;
  }
};

const setLocalStorage = <T,>(key: string, value: T) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const useLocalStorage = <T,>(key: string, defaultValue: T) => {
  const [value, setValue] = useState(() => {
    return getLocalStorage(key, defaultValue);
  });

  useEffect(() => {
    setLocalStorage(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
