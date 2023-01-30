import { todoStep } from "../../types";
import styles from "./TodoItem.module.css";

type TodoItemProps = {
  todoStep: todoStep;
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
      <div onClick={() => handleChange(id)}>
        <input type="checkbox" />
        {/* Format "1. Choose a ..." */}
        <p>{`${position + 1}. ${text}`}</p>
      </div>
      <button onClick={() => deleteStepAtTodo(id)}>🗑️</button>
    </div>
  );
}
