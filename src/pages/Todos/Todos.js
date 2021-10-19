import React, { useEffect } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import { connect, useDispatch, useSelector } from "react-redux";
import { todosOperations, todosSelectors } from "../../store/Todos";
import { EditForm } from "../../components/EditForm/EditForm";
import btnStyles from "../../components/Button/Button.module.scss";
import style from "./Todos.module.scss";

const Todos = (props) => {
  const todosList = useSelector(todosSelectors.getTodos());
  const dispatch = useDispatch();
  useEffect(
    () =>
      todosList.length === 0 ? dispatch(todosOperations.fetchTodos()) : null,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const showModal = (e) => {
    dispatch(
      todosOperations.setIsModal({
        bool: !props.isShowModal,
        target: Number(e.target.id),
      })
    );
  };

  const deleteFromTodos = () => {
    todosList.map((el) =>
      el.id === props.target ? dispatch(todosOperations.toggleCard(el)) : null
    );
  };
  const editClick = (card) => {
    const exactCard = todosList.find((el) => {
      if (el.id === Number(card.target.id)) {
        return el;
      }
      return null;
    });
    dispatch(
      todosOperations.setIsForm({
        bool: !props.isShowForm,
        target: Number(card.target.id),
        edCard: exactCard,
      })
    );
  };

  const actions = [
    <Button
      id={props.target}
      className={btnStyles.okButton}
      key="okbtn"
      text="Ok"
      func={deleteFromTodos}
    />,
    <Button
      className={btnStyles.cancelButton}
      key="cncbtn"
      text="Cancel"
      func={showModal}
    />,
  ];

  const todosCards = todosList.map((e) => (
    <Card
      id={e.id}
      key={e.id}
      card={e}
      editFunc={editClick}
      delCard={showModal}
      delIcon={true}
      isBtn={true}
    />
  ));

  return (
    <div className={style.todosWrapper}>
      {todosCards.length !== 0 ? (
        <div className={style.todosCards}>{todosCards}</div>
      ) : (
        <p>Your todos list are still empty or loading...</p>
      )}
      {props.isShowModal ? (
        <Modal
          target={props.target}
          func={showModal}
          header={"Are you sure you want to delete this card from todos list?"}
          text={
            <p className="modal-text">
              This card will be deleted from your todos list.
            </p>
          }
          actions={actions}
        />
      ) : null}
      {props.isShowForm ? (
        <EditForm isShowForm={props.isShowForm} card={props.edCard} />
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isShowModal: state.todos.isShowModal,
    isShowForm: state.todos.isShowForm,
    target: state.todos.target,
    edCard: state.todos.edCard,
  };
};

export default connect(mapStateToProps, null)(Todos);
