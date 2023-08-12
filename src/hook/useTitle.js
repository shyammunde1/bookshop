import  { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-BookShop`;
  }, [title]);
  return null;
};
