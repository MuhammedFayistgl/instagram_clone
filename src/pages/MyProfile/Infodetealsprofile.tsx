import React from "react";
import { user } from "../../types/ProfileType";
type userProps = {
    user: user | undefined;
    postLength: number | undefined;
};
const Infodetealsprofile = ({ user, postLength }: userProps) => {
    return (
        <>
            <div className="flex gap-7 ">
                <span className="text-center">
                    {postLength}
                    <div>Post</div>
                </span>
                <span className="text-center">
                    {user?.Followers}
                    <div>Followers</div>
                </span>
                <span className="text-center">
                    {user?.Following}
                    <div>Following</div>
                </span>
            </div>
        </>
    );
};

export default Infodetealsprofile;
