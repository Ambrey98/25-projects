import { useEffect, useState } from "react";

export default function UseLocalStorage(key: string, initial: string) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue) return JSON.parse(storedValue);

    return initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
