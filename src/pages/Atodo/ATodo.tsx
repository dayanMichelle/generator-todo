import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { TodoList } from "../../components/TodoList/TodoList";
import { Todo } from "../../types";

import styles from "./ATodo.module.css";

type ATodoProps = {
  getTodoById: (id: string) => Todo | undefined;
  handleCheckedTodo: (id: string) => void;
  handleSelectedIdTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

export const ATodo = ({
  getTodoById,
  handleCheckedTodo,
  handleSelectedIdTodo,
  handleDeleteTodo,
}: ATodoProps) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) handleSelectedIdTodo(id);
  }, [id]);

  const { title, steps } = getTodoById(id || "") || { title: "", steps: [] };
  return (
    <div>
      <h1>{title}</h1>
      <TodoList steps={steps} handleChange={handleCheckedTodo} />
      <div className={styles.buttonContainer}>
        <Button
          color="dark"
          text="Delete"
          onClick={() => {
            handleDeleteTodo(id || "");
            navigate("/my-todos");
          }}
        />
      </div>
    </div>
  );
};
