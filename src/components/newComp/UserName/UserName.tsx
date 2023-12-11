import { useEffect, useState } from "react";
import { getAxiosinstance } from "../../../utils/getAxiosinstance";

import ApprovalIcon from "../../ApprovalIcon/ApprovalIcon";
type PropsType = {
    userNameIs?: string;
    VerifiedIcon?: boolean;
};
const UserName = ({ userNameIs, VerifiedIcon }: PropsType) => {
    const [user, setUser] = useState();

    useEffect(() => {
        if (!userNameIs && !user) {
            getAxiosinstance
                .get("/get-my-username")
                .then((data) => setUser(data?.data));
        }
    }, []);

    return (
        <span className="flex">
            {userNameIs ? userNameIs : user}
            {VerifiedIcon && <ApprovalIcon />}
        </span>
    );
};

export default UserName;
