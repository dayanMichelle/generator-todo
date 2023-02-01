import { Modal, Text } from "../../components";

type DeleteModalProps = {
  closeModal: () => void;
  deleteAStep: () => void;
};

export const DeleteModal = ({ closeModal, deleteAStep }: DeleteModalProps) => {
  return (
    <Modal
      header="Delete"
      closeModal={closeModal}
      textAction="Delete"
      handleAction={() => {
        closeModal();
        deleteAStep();
      }}
    >
      <Text align="center" text=" 🔴 Are you sure to delete this Todo?" />
    </Modal>
  );
};
