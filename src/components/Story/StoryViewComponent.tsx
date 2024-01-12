import { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@mui/material";
import { getAxiosinstance } from "../../utils/getAxiosinstance";
import StorySkeleton from "../Skeleton/StorySkeleton";
import { useDispatch } from "react-redux";
import { setShowStory } from "../../redux/StorySlice";

type DataType = {
    _id: string;
    url: string;
    name: string;
    uid: string;
}[];

type PropsType = {
    Name?: boolean | undefined;
    size?: object | undefined;
};
const StoryViewComponent = ({ Name, size }: PropsType) => {
    const Dispatch = useDispatch();
    const [data, setData] = useState<DataType[]>();
    const [loadingID, setLoadingID] = useState<string>();

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
                getAxiosinstance("/instagram-random-story-only-status-view").then((data) => {
                    setData(data.data);
                });
            } catch (error) {
                console.error(error);
            }
        }
    }, [data]);
    const activeStoryFetch = async () => {
        if (loadingID) {
            try {
                getAxiosinstance
                    .post("/instagram-random-story-only-status-with-id", { id: loadingID })
                    .then((data) => {
                        console.log('data==',data.data);
                        
                        Dispatch(setShowStory([data?.data[0]]));
                    })
                    .catch((err) => console.log(err));
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <div className="">
            {data ? (
                <Slider {...settings}>
                    {data?.flat(1).map((itm) => {
                        return (
                            <div className="  pl-3 py-3" key={itm?._id}>
                                <span
                                    onClick={() => {
                                        if (itm.uid) {
                                            setLoadingID(itm?.uid), activeStoryFetch();
                                        }
                                    }}>
                                    <div className="stories-animation-container">
                                        <div
                                            className={` stories-animation ${
                                                loadingID === itm?._id && `stories-animation-toggle`
                                            }  `}></div>
                                        <span className="  stories-animation-image">
                                            <Avatar src={itm?.url} sx={size} />
                                        </span>
                                    </div>
                                    {Name && <span className="">{itm?.name?.slice(0, 6)}</span>}
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
