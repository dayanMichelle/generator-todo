import { useState } from "react";
import { Button, Input } from "@/components";
import styles from "./Modal.module.css";

type ModalProps = {
  closeModal: () => void;
  addStepAtTodo: (step: string) => void;
};

export const Modal = ({ closeModal, addStepAtTodo }: ModalProps) => {
  const [stepTodo, setStepTodo] = useState("");

  return (
    <>
      <div className={styles.darkBG} onClick={closeModal} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Create a step</h5>
          </div>

          <div className={styles.modalContent}>
            <label>
              <p className={styles.label}>Text</p>
              <Input
                handleChange={(e) => setStepTodo(e.target.value)}
                inputValue={stepTodo}
                placeholder="Add a personal step"
              />
            </label>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <Button
                onClick={() => {
                  closeModal();
                  addStepAtTodo(stepTodo);
                }}
                text="save"
              />
              <Button color="dark" onClick={closeModal} text="cancel" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
