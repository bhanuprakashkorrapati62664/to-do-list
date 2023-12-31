import { useEffect, useState } from "react";
import styles from "../styles/Todos.module.css";

interface TodoItem {
  text: string;
  timestamp: string;
  status: string;
}
interface TodosProps {
  modalData: string;
  taskStatus: string;
  notifyTaskStatus: string;
}
const Todos = ({ modalData, taskStatus, notifyTaskStatus }: TodosProps) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const handleDeleteTask = (index: number) => () => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  useEffect(() => {
    if (modalData !== "") {
      const newTodo = {
        text: modalData,
        timestamp: new Date().toLocaleString(),
        status: taskStatus,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  }, [modalData]);
  return (
    <>
      {todos.length > 0 ? (
        <ul className={styles.todoList}>
          {todos.map((data, index) => {
            if (
              !notifyTaskStatus ||
              notifyTaskStatus === data.status ||
              notifyTaskStatus === "All"
            ) {
              return (
                <li key={index} className={styles.todoItem}>
                  <span>
                    <span className={styles.todoText}>{data.text}</span>
                    <span className={styles.todoTimestamp}>
                      {" "}
                      - {data.timestamp}
                    </span>
                    <span className={styles.todoStatus}> {data.status}</span>
                  </span>
                  <button
                    className={styles.deleteButton}
                    onClick={handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                </li>
              );
            }
            return null;
          })}
        </ul>
      ) : (
        <h2 className={styles.noTodos}>No todo's</h2>
      )}
    </>
  );
};

export default Todos;
