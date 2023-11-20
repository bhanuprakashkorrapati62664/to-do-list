import { useEffect, useState } from "react";

interface TodoItem {
  text: string;
  timestamp: string;
}
interface TodosProps {
  modalData: string;
}
const Todos = ({ modalData }: TodosProps) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  useEffect(() => {
    if (modalData !== "") {
      const newTodo = {
        text: modalData,
        timestamp: new Date().toLocaleString(),
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  }, [modalData]);
  return (
    <>
      {modalData !== "" ? (
        <ul>
          {todos.map((data, index) => (
            <li key={index}>
              {data.text} - {data.timestamp}
            </li>
          ))}
        </ul>
      ) : (
        <h2>No todo's</h2>
      )}
    </>
  );
};

export default Todos;
