import { TodoStep } from "@/types";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import styles from "./TodoItem.module.css";

type TodoItemProps = {
  todoStep: TodoStep;
  position: number;
  handleChange: (id: string) => void;
  deleteStepAtTodo: (id: string) => void;
};

export function TodoItem({
  todoStep,
  position,
  handleChange,
  deleteStepAtTodo,
}: TodoItemProps) {
  const { id, text, checked } = todoStep;
  return (
    <Draggable key={id} draggableId={id} index={position}>
      {(provided) => (
        <div
          className={`${styles.container} ${checked && styles.checked}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={provided.draggableProps.style}
        >
          <div onClick={() => handleChange(id)}>
            <input type="checkbox" />
            {/* Format "1. Choose a ..." */}
            <p>{`${position + 1}. ${text}`}</p>
          </div>
          <button onClick={() => deleteStepAtTodo(id)}>🗑️</button>
        </div>
      )}
    </Draggable>
  );
}
