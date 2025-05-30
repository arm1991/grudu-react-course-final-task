import DialogWrapper from '../DialogWrapper';

import './styles.scss';

interface ErrorDialogArgs {
  message: string;
  handleModalClose: () => void;
  showDialog: boolean;
}

function ErrorDialog({ showDialog, message, handleModalClose }: ErrorDialogArgs) {
  return (
    <DialogWrapper showDialog={showDialog} onClose={handleModalClose}>
      <div className="error-dialog">
        <div className="error-content">
          <h2 className="error-text">Error: {message}</h2>
          <button onClick={handleModalClose} className="error-close" type="button">
            Close
          </button>
        </div>
      </div>
    </DialogWrapper>
  );
}

export default ErrorDialog;
