import * as React from "react";
import Container from "@mui/material/Container";
import AccountMenu from "./components/AccountMenu";
import BasicForm from "./components/TodoForm";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import TodoList from "./components/TodoList";

export default function App() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <AccountMenu onClick={() => navigate("/todo")} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<BasicForm />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </Container>
  );
}
