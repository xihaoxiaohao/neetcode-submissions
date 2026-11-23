class Twitter {
    constructor() {
        this.time = 0;
        this.tweets = new Map(); // userId -> [[tweetId, time], ...]
        this.following = new Map(); // userId -> set of followees
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        this.tweets.get(userId).push([tweetId, this.time]);
        this.time += 1;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const pq = new PriorityQueue((a, b) => b.time - a.time);
        const res = [];

        const authors = new Set([userId]);
        for (const followee of this.following.get(userId) || []) {
            authors.add(followee);
        }

        for (const author of authors) {
            const list = this.tweets.get(author);
            if (!list || list.length === 0) continue;

            const i = list.length - 1;
            const [tweetId, time] = list[i];
            pq.enqueue({ tweetId, time, author, index: i });
        }

        while (pq.size() > 0 && res.length < 10) {
            const item = pq.dequeue();
            res.push(item.tweetId);

            const list = this.tweets.get(item.author);
            const prevIndex = item.index - 1;
            if (prevIndex >= 0) {
                const [tweetId, time] = list[prevIndex];
                pq.enqueue({ tweetId, time, author: item.author, index: prevIndex });
            }
        }

        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.following.has(followerId)) {
            this.following.set(followerId, new Set());
        }
        this.following.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        this.following.get(followerId)?.delete(followeeId);
    }
}
