import { RunTwitter } from "../../services/twitter/retweet";

export default async (req, res) => {
    try {
        const { access_token, access_token_secret } = req.body;
        const a = await RunTwitter({ access_token, access_token_secret });
        console.log(a,"aaa");
        res.status(200).json({ success: true, stream: a });
    } catch (error) {
        res.status(400).json({ success: false });
    }
}

export const config = {
    api: {
        externalResolver: true,
    },
}