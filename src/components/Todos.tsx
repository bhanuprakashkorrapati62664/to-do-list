import { useEffect, useState } from "react";

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
        <ul>
          {todos.map((data, index) => {
            if (
              !notifyTaskStatus ||
              notifyTaskStatus === data.status ||
              notifyTaskStatus === "All"
            ) {
              return (
                <li key={index}>
                  {data.text} - {data.timestamp} {data.status}{" "}
                  <button onClick={handleDeleteTask(index)}>Delete</button>
                </li>
              );
            }
            return null;
          })}
        </ul>
      ) : (
        <h2>No todo's</h2>
      )}
    </>
  );
};

export default Todos;
