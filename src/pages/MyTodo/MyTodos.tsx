import { TableTodo } from "src/components";

import type { Todo } from "src/types";
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
