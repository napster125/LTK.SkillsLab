import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteTodo = (id) => () => {
    dispatch(deleteTodo(id));
  };

  return (
    <Box sx={{ my: 4 }}>
      <Box display="flex" alignItems="center">
        <ArrowBack onClick={() => navigate("/")} sx={{ cursor: "pointer" }} />
        <Typography variant="h4" component="h4" gutterBottom mb={0} ml={2}>
          Todo List
        </Typography>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Content</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell>{todo.content}</TableCell>
                <TableCell>
                  <Button onClick={onDeleteTodo(todo.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TodoList;
