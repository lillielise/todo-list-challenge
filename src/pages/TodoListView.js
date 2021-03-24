import "../styles/TodoListView.css";
import { useState } from "react";
import TodoList from "../components/TodoList";
import AddTodoForm from "../components/AddTodoForm";

const TodoListView = (props) => {
  const [todoListItems, setTodoListItems] = useState([]);

  const handleAddItem = (formData, actions) => {
    const lastId = todoListItems.length
      ? todoListItems[todoListItems.length - 1].id
      : 0;
    setTodoListItems([
      ...todoListItems,
      { id: lastId + 1, name: formData.name, priority: false },
    ]);
    actions.resetForm();
  };

  const handleDeleteItem = (id) => {
    setTodoListItems(todoListItems.filter((item) => item.id !== id));
  };

  const handlePrioritizeItem = (id) => {
    // update item priority and sort todo list items - sort by id (order of insertion) if priority is the same and sort by priorty if they are not equal
    setTodoListItems(
      todoListItems
        .map((item) => (item.id === id ? { ...item, priority: true } : item))
        .sort((a, b) => {
          if (a.priority === b.priority) {
            return a.id - b.id;
          } else {
            if (a.priority) {
              return -1;
            } else if (b.priority) {
              return 1;
            }
          }
          return null;
        })
    );
  };

  return (
    <div className="todo-list-container">
      <header className="todo-list-header">
        <h1>Todo List</h1>
      </header>
      <AddTodoForm handleAddItem={handleAddItem} />
      <TodoList
        handlePrioritizeItem={handlePrioritizeItem}
        handleDeleteItem={handleDeleteItem}
        todoListItems={todoListItems}
      />
    </div>
  );
};

export default TodoListView;
