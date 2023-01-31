import { TodoStep } from "@/types";
import { Draggable } from "react-beautiful-dnd";
import styles from "./TodoItem.module.css";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";
import { DeleteModal } from "@/components";

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
  const [deleteMode, setDeleteMode] = useState(false);
  const { id, text, checked } = todoStep;

  return (
    <>
      <Draggable key={id} draggableId={id} index={position}>
        {(provided) => (
          <div
            className={`${styles.container} ${checked && styles.checked}`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            style={provided.draggableProps.style}
          >
            <div
              className={styles.containerTask}
              onClick={() => handleChange(id)}
            >
              <input type="checkbox" />
              {/* Format "1. Choose a ..." */}
              <p>{`${position + 1}. ${text}`}</p>
            </div>
            <button
              className={styles.btnDelete}
              onClick={() => setDeleteMode(true)}
            >
              <BsTrash className={styles.trash} size="20px" />
            </button>
          </div>
        )}
      </Draggable>
      {deleteMode && (
        <DeleteModal
          closeModal={() => setDeleteMode(false)}
          deleteAStep={() => {
            deleteStepAtTodo(id);
          }}
        />
      )}
    </>
  );
}
