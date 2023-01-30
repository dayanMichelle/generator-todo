import { TableTodo } from "../components/TableTodo/TableTodo";
import { Todo } from "../types";

type MyTodosProps = {
  todos: Todo[];
};

export const MyTodos = ({ todos }: MyTodosProps) => {
  return (
    <div>
      <TableTodo todos={todos} />
    </div>
  );
};
