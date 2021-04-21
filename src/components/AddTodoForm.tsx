import React from "react";
import "../styles/AddTodoForm.css";
import { FaPlus } from "react-icons/fa";
import { Formik, Field, Form } from "formik";

type Props = {
  handleAddItem: () => void;
};

const AddTodoForm = ({ handleAddItem }: Props) => {
  return (
    <Formik initialValues={{ name: "" }} onSubmit={handleAddItem}>
      {(formikProps) => (
        <Form className="todo-form">
          <Field
            className="todo-form-input"
            placeholder="Add Todo..."
            name="name"
            type="text"
          />
          <button
            className="todo-form-button"
            disabled={!formikProps.values.name.length}
            type="submit"
          >
            <FaPlus color="#181A18" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddTodoForm;
