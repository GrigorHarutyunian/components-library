import { createPortal } from "react-dom";
import "./Modal.css";
import { useEffect } from "react";
import clsx from "clsx";

interface IModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal = ({ open, onClose, children, className }: IModalProps) => {
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const modal = (
    <div onClick={onClose} className={clsx(className, "cl-modal")}>
      <div className={clsx("cl-modal__backdrop")}>
        <div
          className="cl-modal__content"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
  return open && createPortal(modal, document.body);
};

export default Modal;
