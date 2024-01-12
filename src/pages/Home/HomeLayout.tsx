import { Container } from "@mui/material";
import Header from "../../components/Header/Header";
import StoryProfile from "../../components/Story/StoryProfile";
import Feed from "../../components/Main/Feed";
import Footer from "../../components/Footer/Footer";
import { RootState } from "../../types/Type";
import { useMemo } from "react";
import { useSelector } from "react-redux";
const HomeLayout = () => {
    const { user } = useSelector((state: RootState) => state.userDataSlice.Details);
    const memoData = useMemo(() => user?.uid, [user?.uid]);
    return (
        <>
            <Container>
                <Header />
                <StoryProfile uid={memoData} storyview Name statusSlide />
            </Container>
            <Feed />
            <Container>
                <Footer />
            </Container>
        </>
    );
};

export default HomeLayout;
