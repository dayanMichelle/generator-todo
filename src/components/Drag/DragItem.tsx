import React from "react";
import { Draggable } from "react-beautiful-dnd";

type DragItemProps = {
  children: React.ReactNode;
  position: number;
  id: string;
};

export const DragItem = ({ children, position, id }: DragItemProps) => {
  return (
    <Draggable draggableId={id} index={position}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={provided.draggableProps.style}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};
