import { TodoItem } from "@/components";
import type { TodoStep } from "@/types";
import styles from "./TodoList.module.css";

type TodoListProps = {
  steps: TodoStep[];
  handleChange: (id: string) => void;
  deleteStepAtTodo: (id: string) => void;
};

export function TodoList({
  steps,
  handleChange,
  deleteStepAtTodo,
}: TodoListProps) {
  return (
    <div className={styles.table}>
      {steps.map((step, i) => (
        <TodoItem
          key={step.id}
          todoStep={step}
          handleChange={handleChange}
          position={i}
          deleteStepAtTodo={deleteStepAtTodo}
        />
      ))}
    </div>
  );
}
