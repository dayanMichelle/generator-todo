import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { TodoList } from "../components/TodoList/TodoList";
import { Todo } from "../types";

import styles from "./ATodo.module.css";

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
      <div className={styles.buttonContainer}>
        <Button color="dark" text="Save" onClick={() => {}} />
      </div>
    </div>
  );
};
