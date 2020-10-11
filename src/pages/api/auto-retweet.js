import { RunTwitter } from "../../services/twitter/retweet";

export default (req, res) => {
    try{
        const  {access_token, access_token_secret} = req.body;

        RunTwitter({access_token, access_token_secret});
        res.status(200).json({ success: true })
    }catch (error){
        res.status(400).json({ success: false })
    }
}