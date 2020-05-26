import React, { useReducer, useEffect } from "react";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import rootReducer, { initialState } from "../redux/reducers/rootReducer";
import * as actionTypes from "../redux/actionTypes";

import appContext from "../contexts/appContext";
import AllLists from "../pages/AllLists";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
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
    <appContext.Provider value={[dispatch, state]}>
      {/* state.selectedtheme */}
      <ThemeProvider
        theme={createMuiTheme({
          palette: {
            primary: { main: "#3f51b5" },
            secondary: { main: "#f50057" },
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
