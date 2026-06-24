import { createPortal } from "react-dom";
import "./Modal.css";

interface IModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, onClose, children }: IModalProps) => {
  const modal = (
    <div onClick={onClose} className="cl-modal">
      <div
        className="cl-modal__content"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
  return open && createPortal(modal, document.body);
};

export default Modal;
