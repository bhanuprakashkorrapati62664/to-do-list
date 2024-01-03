import { useEffect, useState } from "react";
import styles from "../styles/Todos.module.css";

export interface TodoItem {
  text: string;
  timestamp: string;
  status: string;
}
interface TodosProps {
  modalData: string;
  taskStatus: string;
  notifyTaskStatus: string;
  openModel: () => void;
  editingCicked: (value: boolean) => void;
  editData: (value: TodoItem) => void;
  isEditClicked: boolean;
}
const Todos = ({
  modalData,
  taskStatus,
  notifyTaskStatus,
  openModel,
  editingCicked,
  editData,
  isEditClicked,
}: TodosProps) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const handleDeleteTask = (index: number) => () => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  useEffect(() => {
    if (modalData !== "" && isEditClicked === false) {
      const newTodo = {
        text: modalData,
        timestamp: new Date().toLocaleString(),
        status: taskStatus,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  }, [modalData]);
  const handleEditTask = (index: number) => () => {
    openModel();
    editingCicked(true);
    editData(todos[index]);
    const newTodo = {
      text: modalData,
      timestamp: new Date().toLocaleString(),
      status: taskStatus,
    };
    todos[index] = newTodo;
    console.log(todos);
  };
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
                  <button onClick={handleEditTask(index)}>Edit</button>
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
