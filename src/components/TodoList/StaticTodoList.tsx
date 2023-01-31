import { TodoList, TodoItem } from "src/components";
import { TodoStep } from "src/types";

type StaticTodoListProps = {
  steps: TodoStep[];
};

export const StaticTodoList = ({ steps }: StaticTodoListProps) => {
  const dummyFunction = () => {};
  return (
    <TodoList>
      {steps.map((step, i) => (
        <TodoItem
          key={step.id}
          disabled={true}
          todoStep={step}
          handleChange={dummyFunction}
          position={i}
          deleteStepAtTodo={dummyFunction}
        />
      ))}
    </TodoList>
  );
};
