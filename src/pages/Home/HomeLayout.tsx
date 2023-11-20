import { Container } from "@mui/material";
import Header from "../../components/Header/Header";
import StorysProfile from "../../components/Story/StoreysProfile";
import Feed from "../../components/Main/Feed";
import Footer from "../../components/Footer/Footer";
import { getData } from "../../utils/getData";
import { useEffect, useState } from "react";
import { FeedData } from "../../types/FeedType";

const HomeLayout = () => {
    const [Data, setData] = useState<FeedData | undefined>();
    useEffect(() => {
        !Data &&
            getData("/instagram-random-feed").then((data) =>
                setData(data.data[0])
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log("data", Data?.user);

    return (
        <>
            <Container>
                <Header />
                <StorysProfile
                    Profil_Url="https://picsum.photos/500/700"
                    storyview
                    Name
                />
            </Container>
            <Feed FeedDataProps={  Data?.feeds} user={Data?.user} />
            <Container>
                <Footer />
            </Container>
        </>
    );
};

export default HomeLayout;
