import { useState, useEffect } from "react";

export const useFetch = (url, initialValue) => {
  console.log("Inside useFetch");
  console.log(url);
  console.log(initialValue);
  const [result, setResult] = useState(initialValue);
  console.log("Result 1");
  console.log(result);
  if (initialValue) {
    console.log("Inside useFetch:initialValue");
    useEffect(() => {
      console.log("Inside useFetch:useEffect");
      console.log(url);
      fetch(url)
        .then(response => response.json())
        .then(json => setResult(json));
    }, [url]);
  }
  console.log("Result 2");
  console.log(result);
  return result;
};
