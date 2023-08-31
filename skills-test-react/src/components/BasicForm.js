import React from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { useNavigate } from "react-router-dom";

const BasicForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSaveTodo = (values) => {
    console.log({ values });
    dispatch(addTodo(values.todo));
    navigate("/");
  };
  return (
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          todo: "",
        }}
        onSubmit={onSaveTodo}
      >
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="todo" name="todo" placeholder="TextHere" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BasicForm;
