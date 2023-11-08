import { useState } from "react";
import { Comments } from "../../types/FeedType";
import moment from "moment";

type DescriptionProps = {
    comments: Comments[];
    totalcommentsLength: number;
};
const Description = ({
    comments,
    totalcommentsLength,
}: DescriptionProps) => {
  

    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            {/* <div>Liked by <span>user__name and</span> <span>likes</span></div> */}
            <div className="tracking-wide">
                5268 <span>likes</span>
            </div>
            <div className="tracking-wide ">
                {`${comments[comments.length - 1]?.COMMENT?.slice(
                    0,
                    open
                        ? comments[comments.length - 1]?.COMMENT
                                ?.length
                        : 60
                )}...`}
                {!open && (
                    <span
                        onClick={() => setOpen(true)}
                        className=" text-slate-600">
                        more
                    </span>
                )}
            </div>
            {open && (
                <>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>#reels</div>
                    <div>#reels</div>
                    <div>#comedy</div>
                    <div>#funnyvedios</div>
                </>
            )}

            <div className=" text-slate-600">
                View all <span>{totalcommentsLength}</span> comment...
            </div>
            <div className=" text-slate-600">
                {moment(
                    Number(comments[comments.length - 1]?.timestamp)
                ).fromNow()}
            </div>
        </>
    );
};

export default Description;
