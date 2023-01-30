import { TodoCard } from "@/components";
import type { Todo } from "@/types";
import styles from "./TableTodo.module.css";

type TableTodoProps = {
  todos: Todo[];
};

export function TableTodo({ todos }: TableTodoProps) {
  return (
    <div className={styles.container}>
      {todos?.map(({ date, id, steps, title }) => {
        const checkedTodo = steps.filter((step) => step.checked).length;
        const totalTodo = steps.length;
        return (
          <TodoCard
            key={id}
            title={title}
            date={date}
            checkedTodo={checkedTodo}
            totalTodo={totalTodo}
            id={id}
          />
        );
      })}
    </div>
  );
}
