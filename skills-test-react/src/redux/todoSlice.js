import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const id = nanoid();
      state.push({ id, content: action.payload });
    },
    updateTodo(state, action) {},
    deleteTodo(state, action) {
      const id = action.payload;
      const index = state.findIndex((todo) => todo.id === id);
      if (index > -1) state.splice(index, 1);
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
