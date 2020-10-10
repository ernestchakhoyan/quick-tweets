import {
    RunTwitter
} from "../../services/twitter/retweet";

export default (req, res) => {
    RunTwitter({access_token_secret: null, access_token: null});
    res.status(200);
}