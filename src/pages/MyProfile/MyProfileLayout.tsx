import { Container } from "@mui/material";
import Headerprofile from "./Headerprofile";
import Infoprofile from "./Infoprofile";
import Custombutton from "../../components/Button/Custombutton";
import Storeys from "../../components/Story/StoryProfile";
import Infodetealsprofile from "./Infodetealsprofile";
import TabProfile from "./Tab/TabProfile";
import ImagelistProfile from "./IMGlist/ImagelistProfile";
import { useSelector } from "react-redux";
import { RootState } from "../../types/Type";

const MyProfileLayout = () => {
    const { user } = useSelector((state: RootState) => state.userDataSlice.Details);

    return (
        <>
            <Container>
                <Headerprofile />
                <div className="flex justify-between pt-8 items-center">
                    <Infoprofile />
                    <Infodetealsprofile />
                </div>
                <div className="flex  gap-3 mt-2 mb-2">
                    <Custombutton width={"48%"} value="Edit Profile" />
                    <Custombutton width={"48%"} value="Share Profile" />
                </div>
                <Storeys storyview Name uid={user?.uid} />
            </Container>
            <div className="mt-3">
                <TabProfile />
                <ImagelistProfile />
            </div>
        </>
    );
};

export default MyProfileLayout;
