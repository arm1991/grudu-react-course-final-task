import { useEffect, useRef } from 'react';

import './styles.scss';

type DialogWrapperProps = {
  children: React.ReactNode;
  className?: string;
  showDialog: boolean;
  onClose: () => void;
};

function DialogWrapper({ children, showDialog, onClose, className = '' }: DialogWrapperProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (showDialog) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDialog, onClose]);

  if (!showDialog) return null;

  return (
    <dialog className={`dialog-wrapper ${className}`} open={showDialog} ref={dialogRef}>
      <div className="dialog-wrapper__controls">
        <button onClick={onClose} aria-label="close-dialog">
          X
        </button>
      </div>

      <div className="dialog-content">{children}</div>
    </dialog>
  );
}

export default DialogWrapper;
