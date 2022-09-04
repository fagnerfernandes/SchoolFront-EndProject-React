import { Modal, Button } from 'reactstrap';

type ModalDangerProps = {
  isModal: boolean;
  modalTitle: string;
  modalMessage: string;
  onClose: (value: boolean) => void;
};

const ModalDanger = ({ isModal, modalTitle, modalMessage, onClose }: ModalDangerProps) => {
  return (
    <>
      <Modal
        className="modal-dialog-centered modal-danger"
        contentClassName="bg-gradient-danger"
        isOpen={isModal}
        toggle={() => onClose(false)}
      >
        <div className="modal-header">
          <h6 className="modal-title" id="modal-title-notification">
            Allergy/Medical
          </h6>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => onClose(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="py-3 text-center">
            <i className="fas fa-briefcase-medical fa-3x" />
            <h4 className="heading mt-4" style={{ textTransform: 'none' }}>
              {modalTitle}
            </h4>
            <div className="text-justify">
              <p>{modalMessage}</p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <Button
            className="text-white ml-auto"
            color="link"
            data-dismiss="modal"
            type="button"
            onClick={() => onClose(false)}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalDanger;
