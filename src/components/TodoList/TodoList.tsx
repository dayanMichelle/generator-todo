import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { TodoItem } from "@/components";
import type { TodoStep } from "@/types";
import styles from "./TodoList.module.css";

type TodoListProps = {
  steps: TodoStep[];
  handleChange?: (id: string) => void;
  deleteStepAtTodo?: (id: string) => void;
  handleDragEnd?: (result: DropResult) => void;
  disabled?: boolean;
};

export function TodoList({
  steps,
  handleChange = (f) => {},
  deleteStepAtTodo = (f) => {},
  handleDragEnd = (f) => {},
  disabled = false,
}: TodoListProps) {
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
          className={styles.table}
          {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {steps.map((step, i) => (
              <TodoItem
                disabled={disabled}
                key={step.id}
                todoStep={step}
                handleChange={handleChange}
                position={i}
                deleteStepAtTodo={deleteStepAtTodo}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
