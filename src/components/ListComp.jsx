import React, { useState, useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";
import DeleteIcon from "@material-ui/icons/Delete";
import Box from "@material-ui/core/Box";

import * as actionTypes from "../redux/actionTypes";
import ListItemComp from "./ListItemComp";
import appContext from "../contexts/appContext";

const useStyles = makeStyles((theme) => ({
  newitemForm: { display: "flex" },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    marginTop: 4,
    marginBottom: 4,
  },
}));

const ListComp = ({ list }) => {
  const dispatch = useContext(appContext);
  const [newItem, setNewItem] = useState("");
  const classes = useStyles();

  const handleAddNewItem = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.ADD_LIST_ITEM,
      payload: { listId: list._id, newItemContent: newItem },
    });
    setNewItem("");
  };

  const handleDeleteList = (listId) => {
    dispatch({
      type: actionTypes.DELETE_LIST,
      payload: listId,
    });
  };

  const handleToggleComplete = (itemId) => {
    dispatch({
      type: actionTypes.TOGGLE_LIST_ITEM,
      payload: {
        listId: list._id,
        item: itemId,
      },
    });
  };

  const handleDeleteListItem = (itemId) => {
    dispatch({
      type: actionTypes.DELETE_LIST_ITEM,
      payload: {
        listId: list._id,
        item: itemId,
      },
    });
  };

  return (
    <>
      <Grid item>
        <Paper style={{ padding: 15 }} elevation={3}>
          <form autoComplete="" onSubmit={handleAddNewItem}>
            <Typography variant="h4" component="h4">
              <Box display="flex" justifyContent="space-between">
                {list.title}
                <IconButton
                  className={classes.iconButton}
                  aria-label="delete"
                  size="small"
                  variant="contained"
                  onClick={() => handleDeleteList(list._id)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </Box>
              <Typography variant="subtitle1" gutterBottom>
                {`${moment(list.created_at).format("DD MM, YYYY HH:mm:ss")}`}
              </Typography>
            </Typography>
            <List>
              {list.items.map((item) => (
                <ListItemComp
                  item={item}
                  key={item._id}
                  myListId={list._id}
                  onDelete={handleDeleteListItem}
                  onToggleComplete={handleToggleComplete}
                />
              ))}
              <Divider className={classes.divider} orientation="horizontal" />
              <div className={classes.newitemForm}>
                <InputBase
                  className={classes.input}
                  placeholder="Add new item"
                  inputProps={{ "aria-label": "Add new item" }}
                  name="newItem"
                  value={newItem}
                  required
                  onChange={(e) => setNewItem(e.target.value)}
                />
                {/* <Divider className={classes.divider} orientation="vertical" /> */}
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                  color="primary"
                >
                  <AddIcon />
                </IconButton>
              </div>
            </List>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default ListComp;
