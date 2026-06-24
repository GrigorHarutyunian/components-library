import { createPortal } from "react-dom";
import "./Modal.css";

interface IModalProps {
  open: boolean;
  onClose: any;
}

const Modal = ({ open, onClose }: IModalProps) => {
  const modal = (
    <div onClick={onClose} className="cl-modal">
      <div className="cl-modal-child" onClick={(e: any) => e.stopPropagation()}>
        <h1>Modal Header</h1>
        <p>Modal Contnet</p>
      </div>
    </div>
  );
  return open && createPortal(modal, document.body);
};

export default Modal;
