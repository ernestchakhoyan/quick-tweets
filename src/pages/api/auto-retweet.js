import { RunTwitter } from "../../socials/twitter/retweet";

export default async (req, res) => {
    try {
        const { access_token, access_token_secret } = req.body;
        const stream = await RunTwitter({ access_token, access_token_secret });
        res.status(200).json({ success: true, stream, date: new Date() });
    } catch (error) {
        res.status(400).json({ success: false });
    }
}

export const config = {
    api: {
        externalResolver: true,
    },
}