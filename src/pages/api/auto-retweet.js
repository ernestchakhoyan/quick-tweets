import { RunTwitter } from "../../services/twitter/retweet";

export default (req, res) => {
    try {
        const { ok } = req.body;
        let access_token, access_token_secret;

        if (ok) {
            access_token = "1000695336497811457-ARYAeMACCEhvoL7plUWqCl5j6VdSmH";
            access_token_secret = "YWhILwsCs2rSOHvUwpCzt3Z32nFbYW2DYvR4cIWxB7ZTM";
        } else {
            access_token = "4704711200-TMUbi84K17bG91skhlJs4rDSy5f3nqNy6uINnpP";
            access_token_secret = "9Q33eO1LsF5ktLOc9Q0zwlqt1eenY6L2yOeyYsNDS8Vg6";
        }
        RunTwitter({ access_token, access_token_secret });
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false });
    }
}