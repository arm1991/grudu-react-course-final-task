import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authSelector, isAuth } from '@/store/slices';
import { addTweet } from '@/store/thunks/tweetsThunks';
import { getRandomId } from '@/helpers';
import { AuthDialogContext } from '@/contexts';
import { PrimaryButton } from '@/components/UI';

import type { AppDispatch } from '@/store/types';

import './styles.scss';

function SectionOne() {
  const authStore = useSelector(authSelector);
  const authDialogContext = useContext(AuthDialogContext);
  const [input, setInput] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const handleCreateTweet = () => {
    if (!isAuth(authStore)) {
      authDialogContext.toggleIsOpen();
      return;
    }
    if (input.trim() === '') return;
    const authorId = authStore.user.id;
    const authorName = authStore.user.fullname;
    const newTweet = {
      text: input,
      id: getRandomId(),
      author_id: authorId,
      author_name: authorName,
    };
    dispatch(addTweet(newTweet));
    setInput(() => '');
  };

  return (
    <section className="section-one">
      <input
        type="text"
        placeholder="What's happening?"
        id="tweet-input"
        value={input}
        onChange={(e) => setInput(() => e.target.value)}
        className="tweet-input input"
      />
      <PrimaryButton onClick={handleCreateTweet} className="text tweet-button">
        tweet
      </PrimaryButton>
    </section>
  );
}

export default SectionOne;
