import { TableTodo } from "../../components/TableTodo/TableTodo";
import styles from './MyTodo.module.css'
import { Todo } from "../../types";

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
