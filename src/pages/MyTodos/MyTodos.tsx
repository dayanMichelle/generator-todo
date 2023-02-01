import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import { Error, TableTodo } from "../../components";

import type { Todo } from "../../types";
import styles from "./MyTodo.module.css";

type MyTodosProps = {
  todos: Todo[];
};

export const MyTodos = ({ todos }: MyTodosProps) => {

  if (todos.length === 0) return <Error text="No TODOS found" />;

  return (
    <div className={styles.container}>
      <TableTodo todos={todos} />
    </div>
  );
};
