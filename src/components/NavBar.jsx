import React, { useContext } from "react";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as actionTypes from "../redux/actionTypes";
import appContext from "../contexts/appContext";
import { THEME_TYPES } from "../constants";

const NavBar = () => {
  const { dispatch, state } = useContext(appContext);

  return (
    <>
      <Typography variant="h2" component="h2" align="center" color="primary">
        BRM Todos
      </Typography>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <Typography
              color={
                state.selectedtheme === THEME_TYPES.dark
                  ? "textPrimary"
                  : "textSecondary"
              }
            >
              Dark
            </Typography>
          </Grid>
          <Grid item>
            <Switch
              color="primary"
              checked={state.selectedtheme === THEME_TYPES.light}
              inputProps={{ "aria-label": "primary checkbox" }}
              onChange={() => dispatch({ type: actionTypes.TOGGLE_THEME })}
            />
          </Grid>
          <Grid item>
            <Typography
              color={
                state.selectedtheme === THEME_TYPES.light
                  ? "textPrimary"
                  : "textSecondary"
              }
            >
              Light
            </Typography>
          </Grid>
        </Grid>
      </Typography>
    </>
  );
};

export default NavBar;
