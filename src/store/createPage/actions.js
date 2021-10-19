import { TOGGLE_MODAL, CREATE_TODO } from "./types";

export const createTodo = (data) => ({
  type: CREATE_TODO,
  payload: data,
});

export const setIsModal = (data) => ({
  type: TOGGLE_MODAL,
  payload: data,
});
