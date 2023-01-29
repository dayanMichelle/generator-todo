import { TodoCard } from "../components/TodoCard";
import { Todo } from "../types";

type MyTodosProps = {
  todos: Todo[];
};

export const MyTodos = ({ todos }: MyTodosProps) => {
  return (
    <div>
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
};
