import { Input, Modal } from "@/components";
import { useState } from "react";

type AddModalProps = {
  closeModal: () => void;
  addStepAtTodo: (step: string) => void;
};

export const AddModal = ({ closeModal, addStepAtTodo }: AddModalProps) => {
  const [stepTodo, setStepTodo] = useState("");

  return (
    <Modal
      header="Create a step"
      closeModal={closeModal}
      textAction="Save"
      handleAction={() => {
        closeModal();
        addStepAtTodo(stepTodo);
      }}
    >
      <Input
        handleChange={(e) => setStepTodo(e.target.value)}
        inputValue={stepTodo}
        placeholder="Add a personal step"
      />
    </Modal>
  );
};
