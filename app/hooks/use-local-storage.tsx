import { useState } from 'react';

export const getLocalStorage = <T,>(key: string, defaultValue: T): T => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    const value: T | null = saved ? JSON.parse(saved) : null;
    return value ?? defaultValue;
  }
  return defaultValue;
};

export const setLocalStorage = <T,>(key: string, value: T) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};

type TSetter = <T>(value: T) => void;
type TGetter = <T>(dValue: T) => T;

const useLocalStorage = <T,>(
  key: string,
  defaultValue: T
): [T, TSetter, TGetter, () => void] => {
  const [value] = useState<T>(() => {
    return getLocalStorage(key, defaultValue);
  });

  const useLocalStorageSetter = <T,>(value: T) => setLocalStorage(key, value);
  const useLocalStorageGetter = <T,>(dValue: T) => getLocalStorage(key, dValue);
  const useLocalStorageRemover = () => removeLocalStorage(key);

  return [
    value,
    useLocalStorageSetter,
    useLocalStorageGetter,
    useLocalStorageRemover,
  ];
};

export default useLocalStorage;
