import React, { useContext } from "react";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as actionTypes from "../redux/actionTypes";
import appContext from "../contexts/appContext";
import { useTheme } from "@material-ui/core";

const NavBar = () => {
  const [dispatch, state] = useContext(appContext);
  const theme = useTheme();

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
                state.selectedtheme === "dark" ? "textPrimary" : "textSecondary"
              }
            >
              Dark
            </Typography>
          </Grid>
          <Grid item>
            <Switch
              color="primary"
              checked={state.selectedtheme === "light"}
              inputProps={{ "aria-label": "primary checkbox" }}
              onChange={() =>
                dispatch({
                  type: actionTypes.TOGGLE_THEME,
                  payload:
                    state.selectedtheme === "light"
                      ? theme.palette.grey[900]
                      : theme.palette.grey[100],
                })
              }
            />
          </Grid>
          <Grid item>
            <Typography
              color={
                state.selectedtheme === "light"
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
