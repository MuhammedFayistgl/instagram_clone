export type ReelsProps = {
    Src: string
    Size?: 'sm' | 'md' | 'lg'
}
export type ImagelistProps = {
    variants?: 'masonry' | 'quilted' | 'standard' | 'woven' | 'string'
}


export type stateStoryProfileType = {
    open: boolean;
    dataID: string | undefined;
};