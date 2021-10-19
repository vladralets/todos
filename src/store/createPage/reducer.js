import { TOGGLE_MODAL, CREATE_TODO } from "./types";

const initialState = {
  data: [],
  isShowModal: false,
  target: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return {
        ...state,
        isShowModal: action.payload.bool,
        target: action.payload.target,
      };
    }
    case CREATE_TODO: {
      return {
        ...state,
        data: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
