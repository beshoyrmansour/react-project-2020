import React, { useState, memo, useContext } from "react";

import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";

import ListComp from "../components/ListComp";
import AddListComp from "../components/AddListComp";
import NavBar from "../components/NavBar";
import appContext from "../contexts/appContext";

const AllLists = () => {
  const { state } = useContext(appContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container maxWidth="xl" align="center">
      <Box
        color="black"
        component="div"
        my={5}
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
      >
        <NavBar />
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
          {state && state.Lists && state.Lists.length > 0 ? (
            state.Lists.map((list) => (
              <Box my={2} mx={1} maxWidth={350}>
                <ListComp list={list} key={list._id} />
              </Box>
            ))
          ) : (
            <Typography color="textPrimary">
              You Don't have any Todo lists
            </Typography>
          )}
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
  );
};

export default memo(AllLists);
