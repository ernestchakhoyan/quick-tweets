import { shuffle } from "../../utils/array";
import { TAGS } from "../../constants/tags";
import { initTwit } from "./index";
import { USERNAMES } from "../../constants/sources";
import { isReply } from "../../utils/twitter";
import tweetStorage from "../../utils/TwitStorage";


export async function Retweet({ tweetId, tweetUsername, user_id }) {
    console.log("RETWEETING -> ", tweetId, " ", tweetUsername);
    const randomTags = shuffle(TAGS);

    const T = tweetStorage.getTweet(user_id);
    try {
        await T.post("statuses/update", {
            status: randomTags,
            attachment_url: `https://twitter.com/${tweetUsername}/status/${tweetId}`
        });
    } catch (e) {
        console.log("FAILED To RETWEET -> ", e.message);
    }
    console.log("DONE RETWEETING -> ", tweetId, " ", tweetUsername, "!!");
}

export async function RunTwitter({ access_token, access_token_secret, user_id }) {
    const T = await initTwit({ access_token, access_token_secret, user_id });
    tweetStorage.saveTweet(T, user_id);
    return ProfileStream(user_id);
}


export const ProfileStream = async (user_id, users) => {
    const userList = users || USERNAMES;
    const T = tweetStorage.getTweet(user_id);
    const stream = await T.stream('statuses/filter', { follow: userList });

    stream.on('tweet', function (tweet) {
        if(isReply(tweet)) {
            return;
        }
        const tweetId = tweet.id_str;
        const tweetUsername = tweet.user.screen_name;
        Retweet({ tweetId, tweetUsername, user_id });
    });

    tweetStorage.saveStream(stream, user_id);
    return stream;
}

export const StopProfileStream = (user_id) => {
    const stream = tweetStorage.getStream(user_id);

    console.log(stream);

    stream.stop();
}