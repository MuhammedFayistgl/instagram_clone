import { Store } from "../redux/store";
import { ReactNode } from 'react';

export interface Storytype {
    id: number; URL: string; USER_NAME: string; FEED_URL: string[];
    STORY: Activestory[],
    comments: {
        COMMENT_USER_NAME: string
        URL: string
        COMMENT: string | number
        TYME_STAMB: number
        replys: {
            REPLY_USER_NAME: string
            REPLY: string | number
            TYME_STAMB: number
        }[]
    }[]
    
}

export type Activestory = {
    url: string
    duration?: number
    seeMore?: string | ReactNode
    header?: {
        heading: string
        subheading: string
        profileImage: string
    }
}
export interface UserfeedsType {
    IMG_URL: string
}



export type RootState = ReturnType<typeof Store.getState>

export type ProfilePropsType = {
    Profil_Url: string
    alt?: string
    Size?: 'sm'| 'md' |'lg'|'xl'
} 