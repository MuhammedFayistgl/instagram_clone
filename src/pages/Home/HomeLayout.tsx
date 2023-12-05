import { Container } from "@mui/material";
import Header from "../../components/Header/Header";
import StoryProfile from "../../components/Story/StoryProfile";
import Feed from "../../components/Main/Feed";
import Footer from "../../components/Footer/Footer";
import { getData } from "../../utils/getData";
import { useEffect, useState } from "react";
import { FeedData } from "../../types/FeedType";
import MYSkeleton from "../../components/Skeleton/MYSkeleton";

const HomeLayout = () => {
    const [Data, setData] = useState<FeedData>();
    useEffect(() => {
        !Data &&
            getData("/instagram-random-feed").then((data) =>
                setData(data.data[0])
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log("data", Data);

    return (
        <>
            <Container>
                <Header />
                <StoryProfile
                    Profil_Url="https://picsum.photos/500/700"
                    storyview
                    Name
                    statusSlide
                />
            </Container>
            {Data ? <Feed FeedDataProps={Data} /> : <MYSkeleton />}

            <Container>
                <Footer />
            </Container>
        </>
    );
};

export default HomeLayout;
