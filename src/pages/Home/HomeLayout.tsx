import { Container } from "@mui/material";
import Header from "../../components/Header/Header";
import StoryProfile from "../../components/Story/StoryProfile";
import Feed from "../../components/Main/Feed";
import Footer from "../../components/Footer/Footer";
import { getData } from "../../utils/getData";
import { useState } from "react";
import { FeedData } from "../../types/FeedType";
import MYSkeleton from "../../components/Skeleton/MYSkeleton";
import { useQuery } from "react-query";

const HomeLayout = () => {
    const [Data, setData] = useState<FeedData[]>();

    const { isLoading, error } = useQuery("repoData", () =>
        getData("/instagram-random-feed").then((res) =>
            setData(res.data)
        )
    );
    console.log(" isLoading, error, data", isLoading, error, Data);
    return (
        <>
            <Container>
                <Header />
                <StoryProfile storyview Name statusSlide />
            </Container>

            {Data ? <Feed FeedDataProps={Data} /> : <MYSkeleton />}

            <Container>
                <Footer />
            </Container>
        </>
    );
};

export default HomeLayout;
