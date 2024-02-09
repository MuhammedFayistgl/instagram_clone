import { useLocation, useParams } from "react-router-dom";
import { getAxiosinstance } from "../../utils/getAxiosinstance";
import HeaderIndividualChat from "./HeaderIndividualChat";
import { useSelector } from "react-redux";
import { RootState } from "../../types/Type";
import { useEffect } from "react";

const IndividualChatLayout = () => {
    const { user } = useSelector((state: RootState) => state.user);
    const location = useLocation();
    const { state } = location;
    const params = useParams();
    useEffect(() => {
        getAxiosinstance.post("/create-single-chat", { senderId: user, receiverId: state?.uid, roomId: params?.user_id });
    }, [params?.user_id, state?.uid, user]);

    return (
        <div>
            <HeaderIndividualChat />
        </div>
    );
};

export default IndividualChatLayout;
