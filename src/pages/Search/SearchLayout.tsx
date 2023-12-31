import Search from "./Search";
import { Container } from "@mui/material";

import Footer from "../../components/Footer/Footer";
import ImagelistProfile from "../MyProfile/IMGlist/ImagelistProfile";
import { useEffect, useState } from "react";
import { ProfileDataType } from "../../types/ProfileType";
import { getAxiosinstance } from "../../utils/getAxiosinstance";

const SearchLayout = () => {
    const [profileData, setProfileData] =
        useState<ProfileDataType[]>();
    // const {USER_NAME,uid,url,feeds} = profileData[0]
    console.log("p", profileData);

    useEffect(() => {
        getAxiosinstance
            .get("/instagram-user-profile-details")
            .then((data) => {
                setProfileData(data.data);
            });
        // return () => {};
    }, []);

    return (
        <>
            <Container>
                <span className="px-2">
                    <Search />
                </span>
            </Container>
            <ImagelistProfile imageList={profileData?.[0]?.feeds} />
            <Footer />
        </>
    );
};

export default SearchLayout;
