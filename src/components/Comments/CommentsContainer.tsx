import { Divider } from "@mui/material";
import { CgLoadbar } from "react-icons/cg";
import Comment from "./Comment";
import Like from "../Like/Like";
import Reply from "../Replys/Reply";
import StoryProfile from "../Story/StoryProfile";
import { Comments } from "../../types/FeedType";

type CommentProps = {
    comments: Comments[];
};

const CommentsContainer = ({ comments }: CommentProps) => {
    console.log('comments',comments);
    
    return (
        <div>
            <div className=" ">
                <div className=" flex justify-center  flex-col items-center overflow-y-scroll">
                    <CgLoadbar className={"text-lg  "} />
                    <div className="">Comments</div>
                    <Divider />
                    {comments?.map((itm, i) => {
                        return (
                            <div
                                key={i}
                                className="flex  w-[100%] justify-between px-2">
                                <span className="flex flex-row gap-2 ">
                                    <StoryProfile
                                        Profil_Url={itm?.user?.url}
                                        Size="sm"
                                        storyview
                                        uid={itm?.user?.uid}
                                    />

                                    <div>
                                        <Comment
                                            commentData={itm?.COMMENT}
                                            commentOwner={itm?.user}
                                            timestamp={itm?.timestamp}
                                        />
                                        <Reply
                                            replayData={itm?.replays}
                                        />
                                    </div>
                                </span>
                                <Like />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CommentsContainer;
