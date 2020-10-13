import Twit from "twit";
import { keys } from "./config";

export const initTwit = ({access_token, access_token_secret}) => {
    return new Twit({
        consumer_key: keys.consumer_key,
        consumer_secret: keys.consumer_secret,
        access_token,
        access_token_secret,
        timeout_ms: 60 * 1000,
        strictSSL: true,
        _twitter_time_minus_local_time_ms: 4
    })
}
