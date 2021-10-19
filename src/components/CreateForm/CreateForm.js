import React from "react";
import { Formik, Form, Field } from "formik";
import Input from "../Input/Input";
import * as yup from "yup";
import { createPageOperations } from "../../store/createPage";
import { useDispatch, useSelector } from "react-redux";
import { todosSelectors } from "../../store/Todos";

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
export const CreateForm = ({
  __testFunc__,
  isShowModal,
  className,
  submitBtnClass,
}) => {
  const todosList = useSelector(todosSelectors.getTodos());
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    values.id = todosList.length + 1;
    dispatch(createPageOperations.createTodo(values));
    actions.resetForm();
  };
  const showModal = (values, actions) => {
    handleSubmit(values, actions);
    dispatch(
      createPageOperations.setIsModal({
        bool: !isShowModal,
      })
    );
  };

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      onSubmit={__testFunc__ || showModal}
      validationSchema={schema}
    >
      {(props) => {
        return (
          <Form className={className}>
            <h3>Create task</h3>
            <div>
              <Field
                component={Input}
                name="title"
                type="text"
                placeholder="Title"
              />
            </div>
            <div>
              <Field
                component={Input}
                name="description"
                type="text"
                placeholder="Description"
              />
            </div>

            <div>
              <button className={submitBtnClass} type="submit">
                Checkout
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateForm;
