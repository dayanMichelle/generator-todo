import { todoStep } from "../../types";
import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
type TodoListProps = {
  steps: todoStep[];
  handleChange: (id: string) => void;
};
export function TodoList({ steps, handleChange }: TodoListProps) {
  return (
    <div className={styles.table}>
      {steps.map((step, i) => (
        <TodoItem
          key={step.id}
          todoStep={step}
          handleChange={handleChange}
          position={i}
        />
      ))}
    </div>
  );
}
