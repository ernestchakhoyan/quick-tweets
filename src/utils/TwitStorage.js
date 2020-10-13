import cache from "memory-cache";

class TweetStorage {
    constructor() {
            this.tweets = {}
    }

    saveTweet(tweet, user_id){
        const data = cache.get(user_id) || {};
        data["tweet"] = tweet;

        cache.put(user_id,  data);
    }

    saveStream(stream, user_id){
        const data = cache.get(user_id) || {};
        data["stream"] = stream;
        cache.put(user_id, data );
    }

    getTweet(user_id){
        return cache.get(user_id).tweet;
    }

    getStream(user_id){
        return cache.get(user_id).stream;
    }

}
const tweetStorage = new TweetStorage();
export default tweetStorage;