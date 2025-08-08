import { useEffect } from "react";

const defaultTitle = "Pareo – Nettsider som gjør inntrykk";

export const usePageTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title || defaultTitle;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
