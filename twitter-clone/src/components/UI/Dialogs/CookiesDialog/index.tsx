import { useContext, useEffect, useState } from 'react';

import { CookiesContext } from '@/contexts';
import { PrimaryButton, SecondaryButton } from '@/components/UI';

import DialogWrapper from '../DialogWrapper';

import './styles.scss';

function CookiesDialog() {
  const cookies = useContext(CookiesContext);
  const [showDialog, setShowDialog] = useState(false);

  const handleAcceptCookies = () => {
    cookies.acceptCookies();
    setShowDialog(false);
  };

  const handleDenyCookies = () => {
    cookies.denyCookies();
    setShowDialog(false);
  };

  useEffect(() => {
    setShowDialog(cookies.isCookiesAllowed === null);
  }, [cookies.isCookiesAllowed]);

  return (
    <DialogWrapper
      className="cookies-dialog__wrapper"
      showDialog={showDialog}
      onClose={handleDenyCookies}
    >
      <div className="cookies-dialog">
        <span className="cookies-dialog__header">
          We use cookies for the operation of the Website.
        </span>
        <div className="cookies-dialog__content">
          <span>
            By clicking on <strong>DENY</strong> or on the
            <strong> X</strong> in the top right-hand corner of this banner, you deny your consent
            to the use of cookies that require consent, keeping the default settings
          </span>
          <span>
            By clicking on <strong>ACCEPT</strong> you consent to the placement of all cookies
            including profiling cookies. Consent is optional and may be withdrawn any time.
          </span>
        </div>
        <div className="cookies-dialog__buttons">
          <SecondaryButton onClick={handleDenyCookies}>DENY</SecondaryButton>
          <PrimaryButton onClick={handleAcceptCookies}>ACCEPT</PrimaryButton>
        </div>
      </div>
    </DialogWrapper>
  );
}

export default CookiesDialog;
