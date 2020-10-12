import { RunTwitter } from "../../socials/twitter/retweet";

export default async (req, res) => {
    try {
        // const { access_token, access_token_secret } = req.body;
        const access_token = "1000695336497811457-ARYAeMACCEhvoL7plUWqCl5j6VdSmH";
        const access_token_secret =  "YWhILwsCs2rSOHvUwpCzt3Z32nFbYW2DYvR4cIWxB7ZTM";
        const a = await RunTwitter({ access_token, access_token_secret });
        console.log(a,"aaa");
        res.status(200).json({ success: true, stream: a, date: new Date() });
    } catch (error) {
        res.status(400).json({ success: false });
    }
}

export const config = {
    api: {
        externalResolver: true,
    },
}