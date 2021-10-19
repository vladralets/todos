import { SET_TODOS, TOGGLE_MODAL, TOGGLE_FORM, TOGGLE_CARD } from "./types";

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});

export const setIsModal = (data) => ({
  type: TOGGLE_MODAL,
  payload: data,
});
export const setIsForm = (data) => ({
  type: TOGGLE_FORM,
  payload: data,
});
export const toggleCard = (todoObj) => ({
  type: TOGGLE_CARD,
  payload: todoObj,
});
