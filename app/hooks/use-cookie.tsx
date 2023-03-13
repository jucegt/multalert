import { useState } from 'react';

const getItem = (key: string) => {
  if (typeof window !== 'undefined') {
    return document.cookie.split('; ').reduce((total, currentCookie) => {
      const item = currentCookie.split('=');
      const storedKey = item[0];
      const storedValue = item[1];

      return key === storedKey ? decodeURIComponent(storedValue) : total;
    }, '');
  }
  return null;
};

const setItem = (key: string, value: string, numberOfDays: number) => {
  const now = new Date();
  now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000);
  if (typeof window !== 'undefined')
    document.cookie = `${key}=${value}; expires=${now.toUTCString()}; path=/`;
};

const useCookie = (
  key: string,
  defaultValue: string
): [string, (value: string, numberOfDays: number) => void] => {
  const getCookie = () => getItem(key) || defaultValue;
  const [cookie, setCookie] = useState(getCookie());

  const updateCookie = (value: string, numberOfDays: number) => {
    setCookie(value);
    setItem(key, value, numberOfDays);
  };

  return [cookie, updateCookie];
};

export default useCookie;
