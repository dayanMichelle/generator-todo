import { DropResult } from "react-beautiful-dnd";
import { TodoItem, DragContainer, DragItem, TodoList } from "../../components";
import { TodoStep } from "../../types";

type DraggableTodoListProps = {
  steps: TodoStep[];
  handleChange: (id: string) => void;
  deleteStepAtTodo: (id: string) => void;
  disabled?: boolean;
  handleDragEnd: (result: DropResult) => void;
};

export const DraggableTodoList = ({
  steps,
  handleChange,
  deleteStepAtTodo,
  handleDragEnd,
}: DraggableTodoListProps) => {
  return (
    <DragContainer handleDragEnd={handleDragEnd}>
      <TodoList>
        {steps.map((step, i) => (
          <DragItem key={step.id} id={step.id} position={i}>
            <TodoItem
              key={step.id}
              disabled={false}
              todoStep={step}
              handleChange={handleChange}
              position={i}
              deleteStepAtTodo={deleteStepAtTodo}
            />
          </DragItem>
        ))}
      </TodoList>
    </DragContainer>
  );
};
