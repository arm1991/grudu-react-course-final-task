import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { tweetsSelector, authSelector, errorSelector, removeError } from '@/store/slices';
import { getTweets } from '@/store/thunks';

import { Header } from '@/components/layout';
import { SectionTwo } from '@/components/sections';
import { ErrorDialog } from '@/components/UI/Dialogs';

import type { AppDispatch } from '@/store/types';

function ProfilePage() {
  const tweets = useSelector(tweetsSelector);
  const authStore = useSelector(authSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch<AppDispatch>();

  const handleErrorModalClose = () => {
    dispatch(removeError());
  };

  useEffect(() => {
    dispatch(getTweets(authStore.user?.id));
  }, [dispatch]);

  return (
    <main>
      <Header />
      <SectionTwo tweets={tweets} editable />
      {error.isError && (
        <ErrorDialog
          showDialog={error.isError}
          message={error.errorMessage}
          handleModalClose={handleErrorModalClose}
        />
      )}
    </main>
  );
}

export default ProfilePage;
