import $api from '@/api';

import type { ITweet } from '@/interfaces';

export default class TweetService {
  static async getTweets() {
    const res = await $api.get('/tweets');

    if (!res.status) {
      throw new Error('Something went wrong');
    }

    return res.data;
  }

  static async addTweet(tweet: ITweet) {
    const res = await $api.post('/tweets', { ...tweet });

    if (!res.status) {
      throw new Error('Something went wrong');
    }

    return res.data;
  }

  static async deleteTweet(userId: string, tweetId: string) {
    const res = await $api.get(`/tweets/${tweetId}`);
    const tweet = res.data;

    if (!res.status) {
      throw new Error('Something went wrong');
    }

    if (tweet.author_id !== userId) {
      throw new Error('Unauthorized');
    }

    return $api.delete(`/tweets/${tweetId}`);
  }
}
