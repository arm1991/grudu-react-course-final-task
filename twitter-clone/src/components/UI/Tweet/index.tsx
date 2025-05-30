import { useDispatch } from 'react-redux';
import { getInitialsFromFullName } from '@/helpers';
import { deleteTweet } from '@/store/thunks';
import { UserIcon, RenderHTML } from '@/components/UI';

import type { ITweet } from '@/interfaces';
import type { AppDispatch } from '@/store/types';

import './styles.scss';

interface TweetProps {
  tweet: ITweet;
  editable: boolean;
}

function Tweet({ tweet, editable }: TweetProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteTweet = () => {
    dispatch(deleteTweet(tweet.author_id, tweet.id));
  };

  return (
    <li className="tweet">
      <div className="tweet-logo">
        <UserIcon initials={getInitialsFromFullName(tweet.author_name)} />
      </div>
      <div className="tweet-content">
        <p className="tweet-content__author">
          <strong>{tweet.author_name}</strong>
        </p>
        <RenderHTML className="tweet-content__text" htmlContent={tweet.text} />
      </div>
      {editable && (
        <div className="tweet-buttons">
          <button type="button" onClick={handleDeleteTweet}>
            <img src="./assets/delete.svg" alt="delete" />
          </button>
        </div>
      )}
    </li>
  );
}

export default Tweet;
