import React from "react";
import "../styles/TodoList.css";
import { FaTrash, FaExclamationCircle } from "react-icons/fa";

type Props = {
  // Generics - describe what an array contains
  todoListItems: Array<Items>;
  handleDeleteItem: Function;
  handlePrioritizeItem: Function;
};

interface Items {
  id: number;
  name: string;
  priority: boolean;
}

const TodoList = ({
  todoListItems,
  handleDeleteItem,
  handlePrioritizeItem,
}: Props) => {
  const renderTodoListItems = () => {
    return todoListItems.map((item) => (
      <li className="list-item" key={`todo-${item.id}`}>
        <p>{item.name}</p>
        <div className="list-item-icons">
          {item.priority && <FaExclamationCircle color="#0074dd" />}
          <div className="list-item-icons-hidden">
            {!item.priority && (
              <FaExclamationCircle
                onClick={() => handlePrioritizeItem(item.id)}
              />
            )}
            <FaTrash onClick={() => handleDeleteItem(item.id)} />
          </div>
        </div>
      </li>
    ));
  };
  return <ul className="list-items-container">{renderTodoListItems()}</ul>;
};

export default TodoList;
