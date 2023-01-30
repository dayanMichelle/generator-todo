import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TodoList } from "../components/TodoList/TodoList";
import { Todo } from "../types";

type ATodoProps = {
  getTodoById: (id: string) => Todo | undefined;
  handleCheckedTodo: (id: string) => void;
  handleSelectedIdTodo: (id: string) => void;
};

export const ATodo = ({
  getTodoById,
  handleCheckedTodo,
  handleSelectedIdTodo,
}: ATodoProps) => {
  const { id } = useParams();

  useEffect(() => {
    handleSelectedIdTodo(id || "1");
  }, [id]);

  const { title, steps } = getTodoById(id || "1") || { title: "", steps: [] };
  return (
    <div>
      <h1>{title}</h1>
      <TodoList steps={steps} handleChange={handleCheckedTodo} />
    </div>
  );
};
