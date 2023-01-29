import { todoStep } from "../../types/Todo";
import styles from "./TodoItem.module.css";

type TodoItemProps = {
  todoStep: todoStep;
  handleChange: (id: string) => void;
};

export function TodoItem({ todoStep, handleChange }: TodoItemProps) {
  const { id, text, checked } = todoStep;
  return (
    <div
      className={`${styles.container} ${checked && styles.checked}`}
      onClick={() => handleChange(id)}
    >
      <input type="checkbox" />
      <p>{text}</p>
    </div>
  );
}
