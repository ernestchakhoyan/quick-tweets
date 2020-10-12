import { shuffle } from "../../utils/array";
import { TAGS } from "../../constants/tags";
import { initTwit } from "./index";
import { USERNAMES } from "../../constants/sources";
import { isReply } from "../../utils/twitter";
const fs = require('fs');

let T;
let stream;


const writeLog = (data) => {
    data = JSON.stringify(data);
    fs.appendFile('logs.txt', data, (err) => {
        if (err) console.error('Couldn\'t append the data');
        console.log('The data was appended to file!');
    });
}

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
    await writeLog({running: "Runing twitter"});
    T = await initTwit({ access_token, access_token_secret });
    await writeLog({twitInit: T});
    return ProfileStream();
}


export const ProfileStream = async (users) => {
    const userList = users || USERNAMES;
    await writeLog({ProfileStream: "start"});
    stream = await T.stream('statuses/filter', { follow: userList });
    await writeLog({Stream: stream});
    stream.on('tweet', function (tweet) {
        writeLog({OnTweet: "event-ontweet", tweet});
        if(isReply(tweet)) {
            return;
        }
        writeLog({TweetChecking: true});
        const tweetId = tweet.id_str;
        const tweetUsername = tweet.user.screen_name;
        writeLog({tweetId, tweetUsername});
        Retweet({ tweetId, tweetUsername });
    });
    return stream;
}

export const StopProfileStream = () => {
    console.log(stream);
    stream.stop();
}