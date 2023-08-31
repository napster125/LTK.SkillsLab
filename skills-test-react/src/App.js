import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AccountMenu from "./components/AccountMenu";
import BasicForm from "./components/BasicForm";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <AccountMenu onClick={() => navigate("/todo")} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<BasicForm />} />
      </Routes>
    </Container>
  );
}
