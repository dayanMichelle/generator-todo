import { Modal } from "@/components";

type DeleteModalProps = {
  closeModal: () => void;
  deleteAStep: () => void;
};

export const DeleteModal = ({ closeModal, deleteAStep }: DeleteModalProps) => {
  return (
    <Modal
      header="Delete!"
      closeModal={closeModal}
      textAction="Eliminar"
      handleAction={() => {
        closeModal();
        deleteAStep();
      }}
    >
      <h3>¿Está seguro que desea eliminar?</h3>
    </Modal>
  );
};
