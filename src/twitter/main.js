import { TwitterApi } from 'twitter-api-v2';
import { GEEKPAUL_TWITTER_ID } from "../constants/user";

// Instantiate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi(process.env.TOKEN);

const list = async () => {
  const likes = await twitterClient.v2.userLikedTweets(GEEKPAUL_TWITTER_ID);
  console.log(JSON.stringify(likes.data, null, 2));
}

list();
