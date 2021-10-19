import { setTodos, setIsModal, toggleCard, setIsForm } from "./actions";
import axios from "axios";

const fetchTodos = () => (dispatch) => {
  axios(
    "https://my-json-server.typicode.com/YaroslavHorobets/todos/cards"
  ).then((res) => {
    dispatch(setTodos(res.data));
  });
};

const actions = {
  toggleCard,
  setIsModal,
  fetchTodos,
  setIsForm,
  setTodos,
};
export default actions;
