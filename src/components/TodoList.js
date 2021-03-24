import "../styles/TodoList.css";
import { FaTrash, FaExclamationCircle } from "react-icons/fa";

const TodoList = ({
  todoListItems,
  handleDeleteItem,
  handlePrioritizeItem,
}) => {
  const renderTodoListItems = () => {
    return todoListItems.map((item) => (
      <li className="list-item" key={`todo-${item.id}`}>
        <p>{item.name}</p>
        {item.priority && <FaExclamationCircle color="#0074dd" />}
        <div className="list-item-icons">
          {!item.priority && (
            <FaExclamationCircle
              onClick={() => handlePrioritizeItem(item.id)}
            />
          )}
          <FaTrash onClick={() => handleDeleteItem(item.id)} />
        </div>
      </li>
    ));
  };
  return <ul className="list-items-container">{renderTodoListItems()}</ul>;
};

export default TodoList;
