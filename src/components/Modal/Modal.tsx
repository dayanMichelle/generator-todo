import { useState } from "react";
import { Button, Input } from "~/components";
import styles from "./Modal.module.css";

type ModalProps = {
  closeModal: () => void;
  header: string;
  textAction: string;
  handleAction: () => void;
  children?: React.ReactNode;
};

export const Modal = ({
  closeModal,
  header,
  children,
  textAction,
  handleAction,
}: ModalProps) => {
  return (
    <>
      <div className={styles.darkBG} onClick={closeModal} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{header}</h5>
          </div>

          <div className={styles.modalContent}>{children}</div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <Button onClick={handleAction} text={textAction} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
