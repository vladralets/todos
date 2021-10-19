const getTodos = () => (state) => state.createPage.data;

const isCardInTodos = (id) => (state) =>
  !!state.createPage.data.find((card) => card.id === id);
const selectors = {
  getTodos,
  isCardInTodos,
};
export default selectors;
