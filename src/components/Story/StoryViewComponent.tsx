import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@mui/material";
import { getAxiosinstance } from "../../utils/getAxiosinstance";
import StorySkeleton from "../Skeleton/StorySkeleton";
import { stateStoryProfileType } from "../../types/UtilsTypes";
type DataType = {
    _id: string;
    url: string;
    name: string;
}[];

type PropsType = {
    setOpen: React.Dispatch<React.SetStateAction<stateStoryProfileType>>;
    Name?: boolean | undefined;
    size?: object | undefined;
};
const StoryViewComponent = ({
    setOpen,
    Name,
    size,
}: PropsType) => {
    const [data, setData] = useState<DataType[]>();
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        centerMode: false,
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

    useEffect(() => {
        if (!data) {
            try {
                getAxiosinstance(
                    "/instagram-random-story-only-status-view"
                ).then((data) => {
                    setData(data.data);
                });
            } catch (error) {
                console.error(error);
            }
        }
    }, [data]);
    // const activeStoryFetch = async (id: string) => {
    //     await getAxiosinstance
    //         .get("/instagram-random-story-only-status-with-id", id)
    //         .then((data) => {
    //             return data.data;
    //         });
    // };
    // console.log("=------------------", activeStoryFetch);


    return (
        <div className="">
            {data ? (
                <Slider {...settings}>
                    {data?.flat(1).map((itm) => {
                        return (
                            <div className="  pl-3" key={itm?.url}>
                                <span
                                    onClick={() => {
                                        setOpen({open:true,dataID:itm?._id});
                                    }}>
                                    <Avatar
                                        src={itm?.url}
                                        sx={size}
                                    />
                                    {Name && (
                                        <span className="">
                                            {itm?.name.slice(0, 6)}
                                        </span>
                                    )}
                                </span>
                            </div>
                        );
                    })}
                </Slider>
            ) : (
                <StorySkeleton />
            )}
        </div>
    );
};

export default StoryViewComponent;
