import React, { useReducer, useEffect } from "react";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import rootReducer, { initialState } from "../redux/reducers/rootReducer";
import * as actionTypes from "../redux/actionTypes";

import appContext from "../contexts/appContext";
import AllLists from "../pages/AllLists";
import CssBaseline from "@material-ui/core/CssBaseline";
import { THEME_TYPES } from "../constants";

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    if (localStorage.getItem("data"))
      dispatch({
        type: actionTypes.RESET,
        payload: JSON.parse(localStorage.getItem("data")),
      });
    return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
    return () => {};
  }, [state]);

  return (
    <appContext.Provider value={{ dispatch, state }}>
      <ThemeProvider
        theme={createMuiTheme({
          palette: {
            primary: {
              main:
                state.selectedtheme === THEME_TYPES.light
                  ? "#29b6f6"
                  : "#ec407a",
            },
            secondary: {
              main:
                state.selectedtheme === THEME_TYPES.light
                  ? "#ef5350"
                  : "#26a69a",
            },
            type: state.selectedtheme,
          },
        })}
      >
        <CssBaseline />
        <AllLists state={state} />
      </ThemeProvider>
    </appContext.Provider>
  );
}

export default App;
