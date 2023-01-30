import { TableTodo } from "../components/TableTodo/TableTodo";
import { TodoCard } from "../components/TodoCard";
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
