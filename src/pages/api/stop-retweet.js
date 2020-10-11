import {
    StopAutoRetweet
} from "../../services/twitter/retweet";

export default (req, res) => {
    StopAutoRetweet();
    return res.status(200);
}