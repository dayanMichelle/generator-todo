import { todoStep } from "../../types";
import styles from "./TodoItem.module.css";

type TodoItemProps = {
  todoStep: todoStep;
  position: number;
  handleChange: (id: string) => void;
};

export function TodoItem({ todoStep, position, handleChange }: TodoItemProps) {
  const { id, text, checked } = todoStep;
  return (
    <div
      className={`${styles.container} ${checked && styles.checked}`}
      onClick={() => handleChange(id)}
    >
      <input type="checkbox" />
      {/* Format "1. Choose a ..." */}
      <p>{`${position + 1}. ${text}`}</p>
    </div>
  );
}
