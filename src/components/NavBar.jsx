import React, { useContext } from "react";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

import * as actionTypes from "../redux/actionTypes";
import appContext from "../contexts/appContext";
import { THEME_TYPES } from "../constants";
import { Box } from "@material-ui/core";

const NavBar = () => {
  const { dispatch, state } = useContext(appContext);

  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      // mx={3}
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="h2" component="h2" align="center" color="primary">
          BRM<Typography color="secondary" variant="h2" component="span">Todos</Typography>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid
          component="label"
          container
          alignItems="center"
          justify="center"
          spacing={1}
        >
          <Grid item>
            <Typography
              color={
                state.selectedtheme === THEME_TYPES.dark
                  ? "textPrimary"
                  : "textSecondary"
              }
            >
              <Brightness4Icon />
            </Typography>
          </Grid>
          <Grid item>
            <Switch
              prefix={<Brightness4Icon />}
              color="primary"
              checked={state.selectedtheme === THEME_TYPES.light}
              inputProps={{ "aria-label": "primary checkbox" }}
              onChange={() => dispatch({ type: actionTypes.TOGGLE_THEME })}
            />
          </Grid>
          <Grid item justify="center" alignItems="center">
            <Typography
              color={
                state.selectedtheme === THEME_TYPES.light
                  ? "textPrimary"
                  : "textSecondary"
              }
            >
              <Brightness7Icon />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavBar;
