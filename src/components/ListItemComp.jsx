import React, { memo } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import moment from "moment";
import { useTheme } from "@material-ui/core";

const ListItemComp = ({ item, onDelete, onToggleComplete }) => {
  const theme = useTheme();

  return (
    <>
      <ListItem
        key={item._id}
        // role={undefined}
        // dense
        color={theme.palette.common.black}
        button
        onClick={() => onToggleComplete && onToggleComplete(item._id)}
      >
        <Tooltip title="Marke as Completed">
          <ListItemText
            id={item._id}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
            primary={item.content}
            secondary={
              item.completed
                ? ""
                : `Created At: ${moment(item.created_at).format(
                    "DD MM, YYYY HH:mm:ss"
                  )}`
            }
          ></ListItemText>
        </Tooltip>
        <ListItemSecondaryAction>
          <Tooltip title="Delete">
            <IconButton
              placeholder="placeholder"
              edge="end"
              aria-label="delete"
              onClick={() => onDelete(item._id)}
            >
              <CloseIcon color="error" />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
};

export default memo(ListItemComp);
