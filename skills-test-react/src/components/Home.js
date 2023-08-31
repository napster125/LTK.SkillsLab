import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const todos = useSelector((state) => state.todos);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" component="h4" gutterBottom>
        React Skills Test
      </Typography>
      {todos.length && (
        <Button
          onClick={() => navigate("/todo-list")}
          sx={{ marginTop: "40px" }}
        >
          View Todos
        </Button>
      )}
    </Box>
  );
};

export default Home;
