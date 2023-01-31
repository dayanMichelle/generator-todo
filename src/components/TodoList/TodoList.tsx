import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { TodoItem } from "@/components";
import type { TodoStep } from "@/types";
import styles from "./TodoList.module.css";

type TodoListProps = {
  steps: TodoStep[];
  handleChange?: (id: string) => void;
  deleteStepAtTodo?: (id: string) => void;
  handleDragEnd?: (result: DropResult) => void;
};

export function TodoList({
  steps,
  handleChange = (f) => {},
  deleteStepAtTodo = (f) => {},
  handleDragEnd = (f) => {},
}: TodoListProps) {
  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
      onDragStart={(e) => {
        console.log("onDragStart", e);
      }}
    >
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            className={styles.table}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {steps.map((step, i) => (
              <TodoItem
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
