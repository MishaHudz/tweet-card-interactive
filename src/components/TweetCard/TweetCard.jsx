import {
  Elipse,
  FollowBtn,
  HorizontalLine,
  ItemTopTweetImg,
  StatisticsList,
  TweetListItem,
  TweetLogoImg,
} from './TweetCard.styked';
import TopTweetImg from '../../images/top-tweet-card-img.png';
import GoItLogo from '../../images/GoIt-Logo.png';
import { putTweet } from 'services/tweetsAPI';
import { useState } from 'react';

function TweetCard({
  Tweet: { id, avatar, followers, tweets, user },
  Following,
  SetFollowing,
}) {
  const [followersAmount, setFollowersAmount] = useState(followers);

  const onSubscribeBtnClick = () => {
    if (Following.includes(id)) {
      SetFollowing(prevstate => prevstate.filter(el => el !== id));

      putTweet(id, {
        id,
        avatar,
        user,
        tweets,
        followers: +followersAmount - 1,
      });
      setFollowersAmount(prev => +prev - 1);
      return;
    }

    SetFollowing(prevstate => [...prevstate, id]);

    putTweet(id, {
      id,
      avatar,
      user,
      tweets,
      followers: +followersAmount + 1,
    });
    setFollowersAmount(prev => +prev + 1);
  };

  return (
    <TweetListItem>
      <TweetLogoImg src={GoItLogo} alt="Go It Logo" />
      <HorizontalLine />
      <Elipse>
        <img width="62px" height="62px" src={avatar} alt="" />
      </Elipse>
      <ItemTopTweetImg src={TopTweetImg} alt="question mark and check mark" />

      <StatisticsList>
        <li>
          <p>
            <span>{tweets}</span> tweets
          </p>
        </li>
        <li>
          <p>
            <span>{followersAmount}</span> followers
          </p>
        </li>
      </StatisticsList>
      <FollowBtn onClick={onSubscribeBtnClick}>
        {Following.includes(id) ? 'following' : 'follow'}
      </FollowBtn>
    </TweetListItem>
  );
}

export default TweetCard;