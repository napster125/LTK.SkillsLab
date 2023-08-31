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

const Home = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onDeleteTodo = (id) => () => {
    dispatch(deleteTodo(id));
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        React Skills Test
      </Typography>
      {todos.length > 0 && (
        <>
          <Typography variant="h4" component="h1" gutterBottom>
            TODOs
          </Typography>
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
                  <TableRow>
                    <TableCell>{todo.content}</TableCell>
                    <TableCell>
                      <Button onClick={onDeleteTodo(todo.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Box>
  );
};

export default Home;
