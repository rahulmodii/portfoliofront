import React, { createContext, useReducer,useEffect } from "react";
import AppReducer from "./AppReducer";
import Axios from "axios";

const initialState = {
  data: [],
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    Axios.get(
      "https://jsonblob.com/api/5abb9f6a-c537-11ea-b1d4-c3858b7e93c2"
    ).then((res) =>
      dispatch({
        type: "FETCH_DATA",
        payload: res.data,
      })
    );
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        data:state.data,
        loading:state.loading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
