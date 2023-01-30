import { TodoStep } from "@/types";
import styles from "./TodoItem.module.css";
import { BsTrash } from "react-icons/bs";

type TodoItemProps = {
  todoStep: TodoStep;
  position: number;
  handleChange: (id: string) => void;
  deleteStepAtTodo: (id: string) => void;
};

export function TodoItem({
  todoStep,
  position,
  handleChange,
  deleteStepAtTodo,
}: TodoItemProps) {
  const { id, text, checked } = todoStep;
  return (
    <div className={`${styles.container} ${checked && styles.checked}`}>
      <div className={styles.containerTask} onClick={() => handleChange(id)}>
        <input type="checkbox" />
        {/* Format "1. Choose a ..." */}
        <p>{`${position + 1}. ${text}`}</p>
      </div>
      <button className={styles.btnDelete} onClick={() => deleteStepAtTodo(id)}>
        <BsTrash className={styles.trash} size="20px" />
      </button>
    </div>
  );
}
