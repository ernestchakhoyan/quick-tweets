import { RunTwitter } from "../../services/twitter/retweet";

export default async (req, res) => {
    try {
        const { access_token, access_token_secret } = req.body;
        await RunTwitter({ access_token, access_token_secret });
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false });
    }
}

export const config = {
    api: {
        externalResolver: true,
    },
}