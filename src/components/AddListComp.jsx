import React, { useContext, useState } from "react";
import Box from "@material-ui/core/Box";
import * as actionTypes from "../redux/actionTypes";
import List from "@material-ui/core/List";
import ListItemComp from "./ListItemComp";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import appContext from "../contexts/appContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

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

const AddListComp = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();
  const dispatch = useContext(appContext);
  const [title, setTitle] = useState("");
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const handleAddNewItem = () => {
    setItems([
      ...items,
      {
        _id: Date.now(),
        created_at: Date.now(),
        completed: false,
        content: newItem,
      },
    ]);
    setNewItem("");
  };
  const clearForm = () => {
    setTitle("");
    setItems([]);
    setNewItem("");
    setIsOpen(false);
  };

  const handleSubmitNewList = (e) => {
    e.preventDefault();
    console.log("handleSubmitNewList");
    dispatch({
      type: actionTypes.ADD_LIST,
      payload: {
        _id: Date.now(),
        created_at: Date.now(),
        title: title,
        items: [...items],
      },
    });
    clearForm();
  };

  const handleOnDeleteItem = (itemId) => {
    setItems(items.filter((item) => item._id !== itemId));
  };
  return (
    <Drawer anchor="bottom" open={isOpen}>
      <Container maxWidth="xs">
        <Box component="div" my={5}>
          <form onSubmit={handleSubmitNewList}>
            <TextField
              id="standard-basic"
              label="List Title"
              required
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <List>
              {items.map((item) => (
                <ListItemComp
                  onDelete={handleOnDeleteItem}
                  item={item}
                  key={item._id}
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
                  onChange={(e) => setNewItem(e.target.value)}
                />
                {/* <Divider className={classes.divider} orientation="vertical" /> */}
                {newItem !== "" && (
                  <IconButton
                    className={classes.iconButton}
                    aria-label="add"
                    color="primary"
                    onClick={handleAddNewItem}
                    disabled={newItem === ""}
                  >
                    <AddIcon />
                  </IconButton>
                )}
              </div>
            </List>

            <Box
              component="div"
              my={5}
              display="flex"
              justifyContent="space-around"
            >
              <Button
                component="button"
                variant="contained"
                color="primary"
                aria-label="add"
                type="submit"
                style={{ paddingLeft: 30, paddingRight: 30 }}
              >
                <SaveIcon />
                Save
              </Button>

              <Button startIcon={<CloseIcon />} onClick={clearForm}>
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Drawer>
  );
};

export default AddListComp;
