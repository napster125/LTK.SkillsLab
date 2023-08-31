import React from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { useNavigate } from "react-router-dom";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";

const TodoForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSaveTodo = (values) => {
    console.log({ values });
    dispatch(addTodo(values.todo));
    navigate("/todo-list");
  };
  return (
    <Box my={4}>
      <Box display="flex" alignItems="center" mb={4}>
        <ArrowBack onClick={() => navigate("/")} sx={{ cursor: "pointer" }} />
        <Typography variant="h4" component="h4" gutterBottom mb={0} ml={2}>
          Add Todo
        </Typography>
      </Box>
      <Formik
        initialValues={{
          todo: "",
        }}
        onSubmit={onSaveTodo}
      >
        <Form>
          <FormLabel htmlFor="todo">Content:</FormLabel>
          <Field
            id="todo"
            name="todo"
            placeholder="Todo content"
            validate={(value) => !value && "Can't be empty!"}
          >
            {({ field, meta }) => (
              <>
                <TextField {...field} fullWidth />
                {meta.touched && meta.error && (
                  <Typography color="red">{meta.error}</Typography>
                )}
              </>
            )}
          </Field>
          <Button type="submit" mt={2}>
            Submit
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default TodoForm;
