import React from "react";
import "../styles/TodoList.css";
import { FaTrash, FaExclamationCircle } from "react-icons/fa";

type Props = {
  todoListItems: Array<Items>;
  handleDeleteItem: Function;
  handlePrioritizeItem: Function;
};

type Items = {
  id: Number;
  name: String;
  priority: Boolean;
};

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
