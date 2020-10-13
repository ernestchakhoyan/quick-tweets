import { StopProfileStream } from "../../socials/twitter/retweet";

export default (req, res) => {
    const {user_id} = req;
    try{
        StopProfileStream(user_id);
        res.status(200).json({ success: true })
    }catch (error){
        res.status(400).json({ success: false })
    }
}

export const config = {
    api: {
        externalResolver: true,
    },
}