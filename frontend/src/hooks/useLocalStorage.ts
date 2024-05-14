import { useState } from "react";

export const useLocalStorage = <T>(key: string, defaultValue?: T) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);

      if (value) return JSON.parse(value);

      window.localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (err) {
      console.log(err);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
