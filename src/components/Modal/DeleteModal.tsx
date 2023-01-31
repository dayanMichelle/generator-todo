import { Modal, Text } from "@/components";

type DeleteModalProps = {
  closeModal: () => void;
  deleteAStep: () => void;
};

export const DeleteModal = ({ closeModal, deleteAStep }: DeleteModalProps) => {
  return (
    <Modal
      header="Delete"
      closeModal={closeModal}
      textAction="Eliminar"
      handleAction={() => {
        closeModal();
        deleteAStep();
      }}
    >
      <Text text=" 🔴 Are your sure to delete this Todo?" />
    </Modal>
  );
};
