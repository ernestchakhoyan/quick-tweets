import {
    RunTwitter
} from "../../services/twitter/retweet";

export default (req, res) => {
    RunTwitter();
    res.status(200);
}