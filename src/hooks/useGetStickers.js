import { useState, useEffect } from "react";
import { getStickers } from "../helpers/getStickers";

export const useGetStickers = (search) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getStickers(search).then((img) => {
      setState({
        data: img,
        loading: false,
      });
    });
  }, [search]);

  return state;
};
