import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Stories from "react-insta-stories";
import { useEffect, useState } from "react";
import {
    // Activestory,
    ProfilePropsType,
    // Storytype,
} from "../../types/Type";
import { Avatar, Dialog } from "@mui/material";
import { getAxiosinstance } from "../../utils/getAxiosinstance";
import { AllStoryDataTypeClient } from "../../types/Story/StoryType";
import { useSelector } from "react-redux";
import StorySkeleton from "../Skeleton/StorySkeleton";
import { user } from "../../types/ProfileType";

const StoryProfile = ({
    Profil_Url,
    alt,
    Size,
    storyview,
    Name,
    statusSlide,
}: ProfilePropsType) => {
    const ReduxState = useSelector((data) => data);
    console.log("ReduxState", ReduxState);

    // const [openStory, setOpenStory] = useState<Storytype>();
    const [open, setOpen] = useState(false);
    const [story, setStory] = useState<AllStoryDataTypeClient[]>();
    const [user, setUser] = useState<user>();

    console.log("story", story);
    console.log("user", user);

    useEffect(() => {
        try {
            getAxiosinstance("/instagram-user").then((data) => {
                setUser(data.data[0].user);
            });
        } catch (error) {
            throw new Error("Something wrong!!");
        }

        if (!story) {
            getAxiosinstance("/instagram-random-story").then((data) =>
                setStory(data.data)
            );
        }
    }, []);

    const size = {
        width:
            Size === "sm"
                ? 24
                : Size === "md"
                ? 40
                : Size === "lg"
                ? 56
                : Size === "xl"
                ? 70
                : 56,
        height:
            Size === "sm"
                ? 24
                : Size === "md"
                ? 40
                : Size === "lg"
                ? 56
                : Size === "xl"
                ? 70
                : 56,
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        // slidesToShow: 10,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 10,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                    rows: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    const activeData = story?.map((data) =>
        data.STORY.map((data) => data)
    );
    console.log("activeData", activeData);
    return (
        <div className=" ">
            {}
            {story ? (
                <Slider {...settings}>
                    {statusSlide &&
                        story?.map((itm) => {
                            return (
                                <>
                                    <span
                                        key={itm?.user}
                                        onClick={() => {
                                            // setActiveStory(itm?.STORY[0]);
                                            setOpen(true);
                                        }}>
                                        <Avatar
                                            key={itm?.user}
                                            alt={alt}
                                            src={itm?.STORY[0].url}
                                            sx={size}
                                        />
                                    </span>
                                    {Name && (
                                        <span className="">
                                            {
                                                itm.STORY[0]?.header
                                                    ?.heading
                                            }
                                        </span>
                                    )}
                                </>
                            );
                        })}
                </Slider>
            ) : (
                <>{statusSlide && <StorySkeleton />}</>
            )}

            <div
                onClick={() => {
                    if (activeData && storyview) {
                        setOpen(true);
                    }
                }}>
                {!statusSlide && (
                    <Avatar
                        alt={alt}
                        src={Profil_Url ? Profil_Url : user?.url}
                        sx={size}
                    />
                )}
            </div>

            <div>
                <Dialog
                    open={open}
                    fullScreen
                    onBlur={() => setOpen(false)}>
                    <div className="relative">
                        <Stories
                            stories={activeData && activeData[0]}
                            defaultInterval={1500}
                            width={"100%"}
                            height={"100vh"}
                            // onAllStoriesEnd={() =>
                            //     setOpenStory(undefined)
                            // }
                            onStoryEnd={() => setOpen(false)}
                            preventDefault={false}
                        />
                    </div>
                </Dialog>
            </div>
        </div>
    );
};

export default StoryProfile;
