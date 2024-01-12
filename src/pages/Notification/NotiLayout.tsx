import { Container } from "@mui/material";
import StorysProfile from "../../components/Story/StoryProfile";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../types/Type";

const NotiLayout = () => {
    const { user } = useSelector((state: RootState) => state.userDataSlice.Details);
    return (
        <>
            <Container>
                <div className="text-2xl font-mono mt-3">Notifications</div>
                <div className="text-sm pt-2 mb-10">Last 7 Days</div>

                <div>
                    <div className="flex justify-around pb-5">
                        <span className="flex">
                            <span className="pr-3">
                                <StorysProfile storyview uid={user?.uid} Size="md" />
                            </span>
                            <span>
                                <div>
                                    custom_user_name_here
                                    {/* <UserName /> */}
                                </div>
                                <div>
                                    <span>4+ new message </span> <span className="">16 h</span>
                                </div>
                            </span>
                        </span>

                        <span className="text-2xl">?</span>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default NotiLayout;
