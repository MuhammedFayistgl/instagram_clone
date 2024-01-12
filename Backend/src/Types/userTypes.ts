export type FeedServerDataType = {
    FEED_URL?: string;
    COMMENT?: string;
    COMMENT_USER_NAME?: string;
    URL?: string;
    replays?: [
        {
            REPLY_USER_NAME: string;
            REPLY: string;
        }
    ];
};
// User
export type userServerData = {
    url: string;
    USER_NAME: string;
    uid: string;
};
// Feeds
export type FeedServerData = {
    FEED: {
        FEED_URL: string;
        timestamp: string;
        comments: {
            user: userServerData;
            COMMENT: string;
            timestamp: string;
            replays: [
                {
                    user: userServerData;
                    REPLY: string;
                    timestamp: string;
                }
            ];
        }[];
    }[];
};



export interface AllStoryDataType {
    user: string;
    STORY: STORY[];
  }
 export interface STORY {
    header: Header;
    url: string;
    duration: number;
    seeMore: string;
    _id: string;
  }
  interface Header {
    heading: string;
    subheading: string;
    profileImage: string;
  }