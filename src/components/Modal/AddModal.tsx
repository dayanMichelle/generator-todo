import { Input, Modal } from "src/components";
import { useState } from "react";

type AddModalProps = {
  closeModal: () => void;
  addStepAtTodo: (step: string) => void;
};

export const AddModal = ({ closeModal, addStepAtTodo }: AddModalProps) => {
  const [stepTodo, setStepTodo] = useState("");

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!stepTodo) return;
    closeModal();
    addStepAtTodo(stepTodo);
  };

  return (
    <Modal
      header="Create a step"
      closeModal={closeModal}
      textAction="Save"
      handleAction={handleSubmit}
    >
      <form onSubmit={handleSubmit}>
        <Input
          handleChange={(e) => setStepTodo(e.target.value)}
          inputValue={stepTodo}
          placeholder="Add a personal step"
        />
      </form>
    </Modal>
  );
};
