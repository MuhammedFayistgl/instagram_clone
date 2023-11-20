import { Container } from "@mui/material";

import StoreysProfile from "../Story/StoreysProfile";
import { BsThreeDotsVertical } from "react-icons/bs";

import { user } from "../../types/ProfileType";
import DropdownComponent from "../Dropdown/DropdownComponent";
type UserNameLayout = {
    User: user;
};
const UserNameLayout = ({ User }: UserNameLayout) => {
    console.log("user?.url", User);

    return (
        <Container>
            <div className="flex justify-between my-2">
                <span>
                    <StoreysProfile
                        storyview
                        Size="sm"
                        Profil_Url={User?.url}
                    />
                </span>
                <span className="text-lg">
                    <DropdownComponent
                        renderToggleContent={<BsThreeDotsVertical />}
                    />{" "}
                </span>
            </div>
        </Container>
    );
};

export default UserNameLayout;
