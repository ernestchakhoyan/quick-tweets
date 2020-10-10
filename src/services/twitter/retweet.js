import { shuffle } from "../../utils/array";
import { TAGS } from "../../constants/tags";
import { TIME } from "../../constants/times";
import { Delay } from "../../utils/delay";
import { USERNAMES } from "../../constants/sources";
import { initTwit } from "./index";

let T;

export const getTweets = async (username) => {
    try {
        const result = await T.get(`statuses/user_timeline`, { screen_name: username, count: 1 });
        if (!result.data || !(result.data instanceof Array)) {
            console.log("WRONG RESPONSE: ", result.data);
            return [];
        }

        console.log("GOT  -> ", result.data.length, " TWEETS FROM USER ->", username);
        return result.data.filter(tweet => !tweet.retweeted).map(tweet => ({ id: tweet.id_str, username }));
    }
    catch (error){
        console.log(error, "Error on getting tweets")
    }
};

export async function Retweet(tweet) {
    console.log("RETWEETING -> ", tweet.id, " ", tweet.username);
    const randomTags = shuffle(TAGS);
    try {
        await T.post("statuses/update", {
            status: randomTags,
            attachment_url: `https://twitter.com/${tweet.username}/status/${tweet.id}`
        });
    } catch (e) {
        console.log("FAILED To RETWEET -> ", e.message);
    }
    console.log("DONE RETWEETING -> ", tweet.id, " ", tweet.username, "!!");
}

export async function RetweetWithDelay(tweets) {
    for (const tweet of tweets) {
        const delayTime = shuffle(TIME)[ 0 ];
        await Delay(3 * 1000);
        await Retweet(tweet);
    }
}

export async function RunTwitter({access_token, access_token_secret}) {
    console.log("Running twitter!!!");
    T = initTwit({access_token, access_token_secret});
    const randomizedUsernames = shuffle(USERNAMES);
    for (const username of randomizedUsernames) {
        await Delay(15000);
        try {
            await RetweetWithDelay(await getTweets(username));
        } catch (e) {
            console.log("FAILED TO GET TWEETS AND RETWEET!!", e);
        }
    }
}