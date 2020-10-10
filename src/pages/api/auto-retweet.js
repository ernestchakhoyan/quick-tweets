import { RunTwitter } from "../../services/twitter/retweet";

export default (req, res) => {
    const access_token = "1000695336497811457-ARYAeMACCEhvoL7plUWqCl5j6VdSmH";
    const access_token_secret = "YWhILwsCs2rSOHvUwpCzt3Z32nFbYW2DYvR4cIWxB7ZTM";
    RunTwitter({access_token, access_token_secret});
    res.status(200);
}