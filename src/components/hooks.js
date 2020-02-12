import { useState, useEffect } from "react";

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);
  if (initialValue) {
    useEffect(() => {
      console.log(url);
      fetch(url)
        .then(response => response.json())
        .then(json => setResult(json));
    }, [url]);
  }
  return result;
};
