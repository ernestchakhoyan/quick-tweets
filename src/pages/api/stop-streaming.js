import { StopProfileStream } from "../../services/twitter/retweet";

export default (req, res) => {
    try{
        StopProfileStream();
        res.status(200).json({ success: true })
    }catch (error){
        res.status(400).json({ success: false })
    }
}