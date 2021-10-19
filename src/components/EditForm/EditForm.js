import React from "react";
import { Formik, Form, Field } from "formik";
import Input from "../Input/Input";
import * as yup from "yup";
import style from "./EditForm.module.scss";
import { useDispatch } from "react-redux";
import { todosOperations } from "../../store/Todos";

const isRequired = "This field is required";
const schema = yup.object().shape({
  title: yup
    .string()
    .required(isRequired)
    .min(2, "Enter min 2 characters")
    .max(20, "Maximum 20 characters"),
  description: yup
    .string()
    .min(2, "Enter min 2 characters")
    .max(100, "Maximum characters is 100"),
});
export const EditForm = ({ isShowForm, card }) => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const newCard = { id: card.id, ...values };
    dispatch(todosOperations.setTodos([newCard]));
    dispatch(todosOperations.setIsForm({ bool: !isShowForm }));
    actions.resetForm();
  };

  const cancelFunc = () => {
    dispatch(todosOperations.setIsForm({ bool: !isShowForm }));
  };

  return (
    <Formik
      initialValues={{
        title: `${card.title}`,
        description: `${card.description}`,
      }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {(props) => {
        return (
          <div className={style.formWrapper}>
            <Form className={style.editForm}>
              <div>
                <h3>Edit task</h3>

                <Field
                  component={Input}
                  name="title"
                  type="text"
                  placeholder="Title"
                />

                <Field
                  component={Input}
                  name="description"
                  type="text"
                  placeholder="Description"
                />
                <div className={style.btnsWrap}>
                  <button className={style.editSubmit} type="submit">
                    Done
                  </button>
                  <button
                    onClick={cancelFunc}
                    className={style.editSubmit}
                    type="reset"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default EditForm;
