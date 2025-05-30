import { Tweet } from '@/components/UI';

import type { ITweet } from '@/interfaces';

import './styles.scss';

type SectionTwoProps = { tweets: ITweet[]; editable: boolean };

function SectionTwo({ tweets, editable }: SectionTwoProps) {
  const showData = tweets && tweets.length;

  if (!showData) {
    return null;
  }

  return (
    <section className="section-two">
      <ul className="tweets-list">
        {tweets.map((tweet) => (
          <Tweet tweet={tweet} editable={editable} key={tweet.id} />
        ))}
      </ul>
    </section>
  );
}

export default SectionTwo;
