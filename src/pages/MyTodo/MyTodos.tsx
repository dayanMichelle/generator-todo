import { TableTodo } from "@/components";

import type { Todo } from "@/types";
import styles from "./MyTodo.module.css";

type MyTodosProps = {
  todos: Todo[];
};

export const MyTodos = ({ todos }: MyTodosProps) => {
  return (
    <div className={styles.container}>
      <TableTodo todos={todos} />
    </div>
  );
};
