import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getTweets } from '@/store/thunks';
import { tweetsSelector, errorSelector, removeError } from '@/store/slices';
import { AuthDialogProvider } from '@/contexts';
import { Header } from '@/components/layout';
import { SectionOne, SectionTwo } from '@/components/sections';
import { ErrorDialog, AuthDialog, CookiesDialog } from '@/components/UI/Dialogs';

import type { AppDispatch } from '@/store/types';

function HomePage() {
  const error = useSelector(errorSelector);
  const tweets = useSelector(tweetsSelector);
  const dispatch = useDispatch<AppDispatch>();

  const handleErrorModalClose = () => {
    dispatch(removeError());
  };

  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  return (
    <main>
      <AuthDialogProvider>
        <Header />
        <SectionOne />
        <SectionTwo tweets={tweets} editable={false} />
        <CookiesDialog />
        <AuthDialog />
        {error.isError && (
          <ErrorDialog
            showDialog={error.isError}
            message={error.errorMessage}
            handleModalClose={handleErrorModalClose}
          />
        )}
      </AuthDialogProvider>
    </main>
  );
}

export default HomePage;
