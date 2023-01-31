import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { DeleteModal } from "../../components";
import { TodoStep } from "../../types";
import styles from "./TodoItem.module.css";

type TodoItemProps = {
  todoStep: TodoStep;
  position: number;
  handleChange: (id: string) => void;
  deleteStepAtTodo: (id: string) => void;
  disabled?: boolean;
};

export function TodoItem({
  todoStep,
  position,
  handleChange,
  deleteStepAtTodo,
  disabled = false,
}: TodoItemProps) {
  const [deleteMode, setDeleteMode] = useState(false);
  const { id, text, checked } = todoStep;

  return (
    <>
      <div
        className={`${styles.container} ${checked && styles.checked} ${
          disabled && styles.disabled
        }`}
      >
        <div className={styles.containerTask} onClick={() => handleChange(id)}>
          <input type="checkbox" />
          {/* Format "1. Choose a ..." */}
          <p>{`${position + 1}. ${text}`}</p>
        </div>
        <button
          className={styles.btnDelete}
          onClick={() => setDeleteMode(true)}
        >
          <BsTrash className={styles.trash} size="20px" />
        </button>
      </div>
      {deleteMode && (
        <DeleteModal
          closeModal={() => setDeleteMode(false)}
          deleteAStep={() => {
            deleteStepAtTodo(id);
          }}
        />
      )}
    </>
  );
}
