import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, AddModal, TodoList, DeleteModal } from "@/components";
import type { Todo } from "@/types";

import styles from "./ATodo.module.css";
import { DropResult } from "react-beautiful-dnd";

type ATodoProps = {
  getTodoById: (id: string) => Todo | undefined;
  handleCheckedTodo: (id: string) => void;
  handleSelectedIdTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
  addStepAtTodo: (step: string) => void;
  deleteStepAtTodo: (id: string) => void;
  handleDragEnd: (result: DropResult) => void;
};

export const ATodo = ({
  getTodoById,
  handleCheckedTodo,
  handleSelectedIdTodo,
  handleDeleteTodo,
  addStepAtTodo,
  deleteStepAtTodo,
  handleDragEnd,
}: ATodoProps) => {
  const [addMode, setAddMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

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
        handleDragEnd={handleDragEnd}
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
            setDeleteMode(true);
          }}
        />
      </div>
      {addMode && (
        <AddModal
          closeModal={() => setAddMode(false)}
          addStepAtTodo={addStepAtTodo}
        />
      )}
      {deleteMode && (
        <DeleteModal
          closeModal={() => setDeleteMode(false)}
          deleteAStep={() => {
            handleDeleteTodo(id || "");
            navigate("/my-todos");
          }}
        />
      )}
    </div>
  );
};
