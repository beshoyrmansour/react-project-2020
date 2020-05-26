import * as actionTypes from "../actionTypes";
import { THEME_TYPES } from "../../constants";

export const initialState = {
  Lists: [],
  selectedtheme: THEME_TYPES.dark,
};
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.RESET:
      return { ...payload };

    case actionTypes.ADD_LIST:
      return { ...state, Lists: [...state.Lists, payload] };

    case actionTypes.DELETE_LIST:
      return {
        ...state,
        Lists: state.Lists.filter((list) => list._id !== payload),
      };

    case actionTypes.ADD_LIST_ITEM:
      return {
        ...state,
        Lists: state.Lists.map((list) => {
          return list._id === payload.listId
            ? {
                ...list,
                items: [
                  ...list.items,
                  {
                    _id: Date.now(),
                    created_at: Date.now(),
                    completed: false,
                    content: payload.newItemContent,
                  },
                ],
              }
            : { ...list };
        }),
      };

    case actionTypes.DELETE_LIST_ITEM:
      return {
        ...state,
        Lists: state.Lists.map((list) => {
          return list._id === payload.listId
            ? {
                ...list,
                items: list.items.filter((item) => item._id !== payload.item),
              }
            : { ...list };
        }),
      };

    case actionTypes.TOGGLE_LIST_ITEM:
      return {
        ...state,
        Lists: state.Lists.map((list) =>
          list._id === payload.listId
            ? {
                ...list,
                items: [
                  ...list.items.map((item) =>
                    item._id === payload.item
                      ? { ...item, completed: !item.completed }
                      : { ...item }
                  ),
                ],
              }
            : { ...list }
        ),
      };

    case actionTypes.TOGGLE_THEME:
      // document.body.style.backgroundColor = payload;
      return {
        ...state,
        selectedtheme:
          state.selectedtheme === THEME_TYPES.light
            ? THEME_TYPES.dark
            : THEME_TYPES.light,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
