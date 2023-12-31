import Like from "../Like/Like";
import React, { useState } from "react";
import moment from "moment";
import StoryProfile from "../Story/StoryProfile";
import { ReplaysEntity } from "../../types/FeedType";
import UserName from "../newComp/UserName/UserName";

type ReplaysDataProps = {
    replayData: ReplaysEntity[] | undefined | null;
};

const Reply: React.FC<ReplaysDataProps> = ({ replayData }) => {
    const [Toggle, setToggle] = useState<boolean>(false);
    return (
        <>
            <div
                className="text-center font-serif text-xs text-gray-400 cursor-pointer "
                onClick={() => setToggle(!Toggle)}>
                {Toggle ? "Hide replies" : "view reply"}{" "}
            </div>
            {Toggle &&
                replayData?.map((itm) => {
                    return (
                        <div
                            key={itm?._id}
                            className="flex  w-[100%] justify-between px-2 ">
                            <span className="flex flex-row gap-2 ">
                                <StoryProfile
                                    storyview
                                    Profil_Url={itm?.user?.url}
                                    Size="sm"
                                />
                                <div className="flex flex-col">
                                    <div>
                                        <UserName VerifiedIcon userNameIs={itm?.user?.USER_NAME}/>
                                        <span className="text-gray-400">
                                            {moment(
                                                Number(itm?.timestamp)
                                            ).fromNow()}
                                        </span>
                                    </div>
                                    <div>{itm?.REPLY} </div>
                                    <div className="text-gray-500 flex  gap-3 ">
                                        {" "}
                                        reply <span>copy</span>{" "}
                                        <span>see translation</span>
                                    </div>
                                </div>
                            </span>
                            <Like />
                        </div>
                    );
                })}
        </>
    );
};

export default Reply;
