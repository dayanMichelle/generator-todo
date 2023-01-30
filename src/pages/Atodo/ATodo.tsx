import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Modal, TodoList } from "@/components";
import type { Todo } from "@/types";

import styles from "./ATodo.module.css";

type ATodoProps = {
  getTodoById: (id: string) => Todo | undefined;
  handleCheckedTodo: (id: string) => void;
  handleSelectedIdTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
  addStepAtTodo: (step: string, position: number) => void;
  deleteStepAtTodo: (id: string) => void;
};

export const ATodo = ({
  getTodoById,
  handleCheckedTodo,
  handleSelectedIdTodo,
  handleDeleteTodo,
  addStepAtTodo,
  deleteStepAtTodo,
}: ATodoProps) => {
  const [addMode, setAddMode] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) handleSelectedIdTodo(id);
  }, [id]);

  const { title, steps } = getTodoById(id || "") || { title: "", steps: [] };
  return (
    <div>
      <h1>{title}</h1>
      <TodoList
        steps={steps}
        handleChange={handleCheckedTodo}
        deleteStepAtTodo={deleteStepAtTodo}
      />
      <div className={styles.buttonContainer}>
        <Button
          text="Add Step"
          onClick={() => {
            setAddMode(true);
          }}
        />

        <Button
          color="dark"
          text="Delete"
          onClick={() => {
            handleDeleteTodo(id || "");
            navigate("/my-todos");
          }}
        />
      </div>
      {addMode && (
        <Modal
          closeModal={() => setAddMode(false)}
          addStepAtTodo={addStepAtTodo}
          position={steps.length + 1}
        />
      )}
    </div>
  );
};
