const reducer = (state, action) => {
  switch (action.type) {
    case "updateTodo":
      let todoItem = state.todoList.filter(
        (todo) => todo.id === action.payload
      );
      todoItem[0].checked = true;
      console.log(todoItem);
      return {
        ...state,
        ...todoItem,
      };
    case "addTodo":
      let newTodoItem = action.payload;
      let todoList = state.todoList.push(newTodoItem);
      return {
        ...state,
        ...todoList,
      };
    default:
      return state;
  }
};

export default reducer;
