import { useState } from "react";
import { Button } from "../Button";
import styles from "./Modal.module.css";

type ModalProps = {
  closeModal: () => void;
  addStepAtTodo: (step: string, position: number) => void;
  position: number;
};

export const Modal = ({ closeModal, addStepAtTodo, position }: ModalProps) => {
  const [stepTodo, setStepTodo] = useState("");
  const [positionTodo, setPositionTodo] = useState(0);

  return (
    <>
      <div className={styles.darkBG} onClick={closeModal} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Create a step</h5>
          </div>
          <button className={styles.closeBtn} onClick={closeModal}>
            {/* <RiCloseLine style={{ marginBottom: "-3px" }} /> */}x
          </button>
          <div className={styles.modalContent}>
            <label>
              <p className={styles.label}>Step</p>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter a step"
                value={stepTodo}
                onChange={(e) => setStepTodo(e.target.value)}
              />
            </label>
            <label>
              <p>Give a step</p>
              <select
                className={styles.select}
                value={positionTodo}
                onChange={(e) => setPositionTodo(Number(e.target.value))}
              >
                {Array.from({ length: position }, (_, i) => (
                  <option key={i} value={i}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <Button
                onClick={() => {
                  closeModal();
                  addStepAtTodo(stepTodo, positionTodo);
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
