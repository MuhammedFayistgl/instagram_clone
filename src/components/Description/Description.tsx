import { useState } from "react";
import moment from "moment";

type DescriptionProps = {
    timeStamp: string;
    latestComment: [string];
    totalcommentsLength: number;
};
const Description = ({
    timeStamp,
    latestComment,
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
                {`${latestComment[0]?.slice(
                    0,
                    open ? latestComment[0]?.length : 60
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
                {moment(Number(timeStamp)).fromNow()}
            </div>
        </>
    );
};

export default Description;
