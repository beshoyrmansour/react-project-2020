import React, { useReducer, createContext, useState } from "react";

import Container from "@material-ui/core/Container";

import Fab from "@material-ui/core/Fab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightMainTheme } from '../styles/themes';

import * as actionTypes from "../redux/actionTypes";
import rootReducer, { initialState } from "../redux/reducers/rootReducer";
import ListComp from "../components/ListComp";
import appContext from "../contexts/appContext";
import AddListComp from "../components/AddListComp";

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <appContext.Provider value={dispatch}>
      <ThemeProvider theme={lightMainTheme}>
        <Container maxWidth="xl" align="center">
          <Box
            component="div"
            my={5}
            display="flex"
            flexWrap="wrap"
            justifyContent="space-around"
          >
            <Typography variant="h2" component="h2" align="center">
              BRM Todos
            </Typography>
            <Box
              component="div"
              my={5}
              display="flex"
              flexWrap="wrap"
              justifyContent="space-around"
              alignItems="center"
              style={{
                width: "100%",
                height: "100%",
                minHeight: 600,
              }}
            >
              {state.Lists.length > 0 ? (
                state.Lists.map((list) => (
                  <Box my={2} mx={1} maxWidth={350}>
                    <ListComp list={list} key={list._id} />
                  </Box>
                ))
              ) : (
                <Typography>You Don't have any Todo lists</Typography>
              )}
              {console.log("state", state)}
            </Box>
            <Box component="div" position="fixed" bottom={15}>
              <Fab
                // startIcon={<AddIcon />}
                variant="contained"
                color="primary"
                size="large"
                aria-label="add"
                onClick={() => setIsOpen(!isOpen)}
              >
                <AddIcon />
                Add New List
              </Fab>
              <AddListComp isOpen={isOpen} setIsOpen={setIsOpen} />
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </appContext.Provider>
  );
}

export default App;
