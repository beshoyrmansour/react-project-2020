import * as actionTypes from "../actionTypes";

export const initialState = {
  Lists: [
    {
      _id: Date.now()-22,
      created_at: Date.now(),
      title: "Projects",
      items: [
        {
          _id: Date.now(),
          created_at: Date.now(),
          completed: false,
          content: "Hello World 1",
        },
        {
          _id: Date.now() + 1,
          created_at: Date.now(),
          completed: false,
          content: "Hello World 2",
        },
        {
          _id: Date.now() + 2,
          created_at: Date.now(),
          completed: false,
          content: "Hello World 3",
        },
      ],
    },
    {
      _id: Date.now()-23,
      created_at: Date.now(),
      title: "Projects",
      items: [
        {
          _id: Date.now(),
          created_at: Date.now(),
          completed: false,
          content: "Hello World 1",
        },
        {
          _id: Date.now() + 1,
          created_at: Date.now(),
          completed: false,
          content: "Hello World 2",
        },
        {
          _id: Date.now() + 2,
          created_at: Date.now(),
          completed: false,
          content: "Hello World 3",
        },
        {
          _id: Date.now() + 3,
          created_at: Date.now(),
          completed: false,
          content: "Hello World 3",
        },
        {
          _id: Date.now() + 4,
          created_at: Date.now(),
          completed: false,
          content: "Hello World 3",
        },
      ],
    },
    {
      _id: Date.now()-24,
      created_at: Date.now(),
      title: "Projects",
      items: [
        {
          _id: Date.now(),
          created_at: Date.now(),
          completed: false,
          content: "Hello World 1",
        },
        {
          _id: Date.now() + 1,
          created_at: Date.now(),
          completed: false,
          content: "Hello World 2",
        },

      ],
    },
    {
      _id: Date.now()-25,
      created_at: Date.now(),
      title: "Projects",
      items: [
        {
          _id: Date.now(),
          created_at: Date.now(),
          completed: false,
          content: "Hello World 1",
        },
        {
          _id: Date.now() + 1,
          created_at: Date.now(),
          completed: false,
          content: "Hello World 2",
        },
        {
          _id: Date.now() + 2,
          created_at: Date.now(),
          completed: false,
          content: "Hello World 3",
        },
        {
          _id: Date.now() + 3,
          created_at: Date.now(),
          completed: false,
          content: "Hello World 3",
        },
      ],
    },
  ],
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

    default:
      return { ...state };
  }
};
export default rootReducer;
