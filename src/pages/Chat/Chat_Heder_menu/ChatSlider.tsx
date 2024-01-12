import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RootState } from "../../../types/Type";
import StorysProfile from "../../../components/Story/StoryProfile";
import { useSelector } from "react-redux";

const ChatSlider = () => {
    const { user } = useSelector((state: RootState) => state.userDataSlice.Details);
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
    return (
        <div className="py-4">
            <Slider {...settings}>
                <div>
                    <StorysProfile uid={user?.uid} storyview Profil_Url={user?.url} />
                    <span className="">{user?.USER_NAME.slice(0, 7)}...</span>
                </div>
            </Slider>
        </div>
    );
};

export default ChatSlider;
