import { Link } from 'react-router-dom';

import { PrimaryButton } from '@/components/UI';
import DialogWrapper from '../DialogWrapper';

import './styles.scss';

interface LogOutDialogProps {
  showDialog: boolean;
  onClose: () => void;
  handleLogoutClick: () => void;
}

function LogOutDialog({ showDialog, onClose, handleLogoutClick }: LogOutDialogProps) {
  return (
    <DialogWrapper showDialog={showDialog} onClose={onClose} className="log-out-dialog">
      <Link to="/profile">Profile</Link>
      <PrimaryButton onClick={handleLogoutClick}>Log out</PrimaryButton>
    </DialogWrapper>
  );
}

export default LogOutDialog;
