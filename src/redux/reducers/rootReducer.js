import * as actionTypes from "../actionTypes";

export const initialState = {
  Lists: [],
  selectedtheme: "light",
};
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_LIST:
      return { ...state, Lists: [...state.Lists, payload] };

    case actionTypes.DELETE_LIST:
      console.log("DELETE_LIST");

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
      document.body.style.backgroundColor =
        state.selectedtheme === "light" ? "#1e1e1e" : "#f9f9f9";
      return {
        ...state,
        selectedtheme: state.selectedtheme === "light" ? "dark" : "light",
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
