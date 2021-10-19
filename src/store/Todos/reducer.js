import { SET_TODOS, TOGGLE_MODAL, TOGGLE_CARD, TOGGLE_FORM } from "./types";

const initialState = {
  data: [],
  isShowModal: false,
  isShowForm: false,
  target: null,
  edCard: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS: {
      const result = state.data.map(
        (el) => action.payload.find(({ id }) => id === el.id) || el
      );
      if (state.data.length === 0) {
        return { ...state, data: action.payload };
      }
      return { ...state, data: result };
    }
    case TOGGLE_MODAL: {
      return {
        ...state,
        isShowModal: action.payload.bool,
        target: action.payload.target,
      };
    }
    case TOGGLE_FORM: {
      return {
        ...state,
        isShowForm: action.payload.bool,
        target: action.payload.target,
        edCard: action.payload.edCard,
      };
    }
    case TOGGLE_CARD: {
      const todosInfo = action.payload;
      todosInfo.id = state.data.length + 1;
      if (
        state.data.find((itm) => itm.id === todosInfo.id && todosInfo.title)
      ) {
        const todos = state.data.filter((todo) => todo.id !== todosInfo.id);
        return { ...state, data: todos };
      } else {
        const todos = [...state.data, todosInfo];
        return { ...state, data: todos };
      }
    }
    default:
      return state;
  }
};

export default reducer;
