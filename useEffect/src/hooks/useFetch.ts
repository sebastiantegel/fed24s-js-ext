import { useEffect, useState } from "react";

export const useFetch = <T>(url: string): [boolean, T | undefined] => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data: T = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (data) return;

    getData();
  });

  return [loading, data];
};
