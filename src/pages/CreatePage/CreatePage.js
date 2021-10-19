import React from "react";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import CreateForm from "../../components/CreateForm/CreateForm";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  createPageSelectors,
  createPageOperations,
} from "../../store/createPage";
import { todosOperations } from "../../store/Todos";
import btnStyles from "../../components/Button/Button.module.scss";
import s from "./CreatePage.module.scss";
import modalStyle from "../../components/Modal/Modal.module.scss";

function CreatePage(props) {
  const task = useSelector(createPageSelectors.getTodos());
  const dispatch = useDispatch();
  const showModal = (e) => {
    dispatch(
      createPageOperations.setIsModal({
        bool: !props.isShowModal,
        target: Number(e.target.id),
      })
    );
  };

  const addToTodos = () => {
    dispatch(todosOperations.toggleCard(task));
    dispatch(createPageOperations.createTodo([]));
  };
  const actions = [
    <Button
      id={props.target}
      className={btnStyles.okButton}
      key="okbtn"
      text="Ok"
      func={addToTodos}
    />,
    <Button
      className={btnStyles.cancelButton}
      key="cncbtn"
      text="Cancel"
      func={showModal}
    />,
  ];

  return (
    <div>
      <div className={s.createWrapper}>
        <CreateForm
          className={s.createForm}
          submitBtnClass={s.createSubmit}
          isShowModal={props.isShowModal}
        />
      </div>

      {props.isShowModal ? (
        <Modal
          func={showModal}
          header={"Are you sure you want to add this card to your todos list?"}
          text={
            <p className={modalStyle.modalText}>
              This card will be addet to your todos list.
            </p>
          }
          actions={actions}
        />
      ) : null}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isShowModal: state.createPage.isShowModal,
    target: state.createPage.target,
    order: state.createPage.order,
  };
};
export default connect(mapStateToProps, null)(CreatePage);
