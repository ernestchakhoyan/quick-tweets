import { shuffle } from "../../utils/array";
import { TAGS } from "../../constants/tags";
import { initTwit } from "./index";
import { USERNAMES } from "../../constants/sources";
import { isReply } from "../../utils/twitter";

let T;
let stream;

export async function Retweet({ tweetId, tweetUsername }) {
    console.log("RETWEETING -> ", tweetId, " ", tweetUsername);
    const randomTags = shuffle(TAGS);
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

export async function RunTwitter({ access_token, access_token_secret }) {
    T = await initTwit({ access_token, access_token_secret });
    return ProfileStream();
}


const ProfileStream = (users) => {
    const userList = users || USERNAMES;

    stream = T.stream('statuses/filter', { follow: userList });
    stream.on('tweet', function (tweet) {
        // if(isReply(tweet)) {
        //     return;
        // }
        const tweetId = tweet.id_str;
        const tweetUsername = tweet.user.screen_name;
        Retweet({ tweetId, tweetUsername });
    });
    return stream;
}

export const StopProfileStream = () => {
    console.log(stream);
    stream.stop();
}