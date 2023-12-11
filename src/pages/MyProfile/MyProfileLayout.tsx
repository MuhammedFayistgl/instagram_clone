import { Container } from "@mui/material";
import Headerprofile from "./Headerprofile";
import Infoprofile from "./Infoprofile";
import Custombutton from "../../components/Button/Custombutton";
import Storeys from "../../components/Story/StoryProfile";
import Infodetealsprofile from "./Infodetealsprofile";
import TabProfile from "./Tab/TabProfile";
import { useEffect, useState } from "react";
import { getAxiosinstance } from "../../utils/getAxiosinstance";
import { ProfileDataType } from "../../types/ProfileType";
import ImagelistProfile from "./IMGlist/ImagelistProfile";

const MyProfileLayout = () => {
    const [profileData, setProfileData] =
        useState<ProfileDataType[]>();
    // const {USER_NAME,uid,url,feeds} = profileData[0]
    console.log("p", profileData);

    useEffect(() => {
        if (!profileData) {
            getAxiosinstance
                .get("/instagram-user-profile-details")
                .then((data) => {
                    setProfileData(data.data);
                });
        }

        // return () => {};
    }, []);

    return (
        <>
            <Container>
                <Headerprofile
                    
                />
                <div className="flex justify-between pt-8 items-center">
                    <Infoprofile
                        description={
                            profileData?.[0]?.user.description
                        }
                    />
                    <Infodetealsprofile
                        postLength={profileData?.[0]?.feeds?.length}
                        user={profileData?.[0]?.user}
                    />
                </div>
                <div className="flex  gap-3 mt-2 mb-2">
                    <Custombutton
                        width={"48%"}
                        value="Edit Profile"
                    />
                    <Custombutton
                        width={"48%"}
                        value="Share Profile"
                    />
                </div>
                <Storeys
                    storyview
                    Name
                  
                />
            </Container>
            <div className="mt-3">
                <TabProfile />
                <ImagelistProfile
                    imageList={profileData?.[0]?.feeds}
                />
            </div>
        </>
    );
};

export default MyProfileLayout;
// const dataprofle = [
//     {
//         user: {
//             USER_NAME: "ff",
//             uid: "gfdl",
//             url: "dkjslfdksjfjkds",
//             description: "fullstack developer",
//             Followers: 500,
//             Following: 600,
//         },
//         feeds: [
//             {
//                 img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//                 title: "Breakfast",
//             },
//             {
//                 img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//                 title: "Burger",
//             },
//             {
//                 img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//                 title: "Camera",
//             },
//             {
//                 img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//                 title: "Coffee",
//             },
//             {
//                 img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//                 title: "Hats",
//             },
//             {
//                 img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//                 title: "Honey",
//             },
//             {
//                 img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//                 title: "Basketball",
//             },
//             {
//                 img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//                 title: "Fern",
//             },
//             {
//                 img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//                 title: "Mushrooms",
//             },
//             {
//                 img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//                 title: "Tomato basil",
//             },
//             {
//                 img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//                 title: "Sea star",
//             },
//             {
//                 img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//                 title: "Bike",
//             },
//         ],
//     },
// ];
