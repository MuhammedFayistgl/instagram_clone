import React from "react";
import moment from "moment";
import { User } from "../../types/FeedType";
import UserName from "../newComp/UserName/UserName";

type CommentDataProps = {
    commentData: string;
    commentOwner: User;
    timestamp: string;
};

const Comment: React.FC<CommentDataProps> = ({
    commentData,
    commentOwner,
    timestamp,
}) => {
    return (
        <>
            <div className="flex flex-col">
                <div>
                    <UserName VerifiedIcon userNameIs={commentOwner?.USER_NAME} />
                    <span className="text-gray-400">
                        {moment(Number(timestamp)).fromNow()}
                    </span>
                </div>
                <div>{commentData}</div>
                <div className="text-gray-500 flex  gap-3 ">
                    reply <span>copy</span>{" "}
                    <span>see translation</span>
                </div>
            </div>
        </>
    );
};

export default Comment;
