import { Store } from "../redux/store";

export interface Storytype {
    id: number; URL: string; USER_NAME: string; FEED_URL: [string]
    comments: {
        COMMENT_USER_NAME: string
        URL: string
        COMMENT: string | number
        TYME_STAMB:number
        replys: {
            REPLY_USER_NAME: string
            REPLY: string | number
            TYME_STAMB:number
        }[]
    }[]
}
export interface UserfeedsType {
    IMG_URL: string
}


export type RootState = ReturnType<typeof Store.getState>