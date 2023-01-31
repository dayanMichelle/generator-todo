import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

type DragContainerProps = {
  children?: React.ReactNode;
  handleDragEnd: (result: DropResult) => void;
};

export const DragContainer = ({
  children,
  handleDragEnd,
}: DragContainerProps) => {
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
