import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { USER } from "../../../Data/Data";
import { Storytype } from "../../../types/Type";
import StorysProfile from "../../../components/Story/StoreysProfile";

const ChatSlider = () => {
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
                    initialSlide: 0
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                    rows: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    dots: false
                }
            }
            ,
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };
    return (
        <div className="py-4"><Slider {...settings}>
            {USER?.map((story: Storytype, i) => {
                return (
                    <div key={i} className=" ">
                        <StorysProfile storyview Profil_Url={'https://picsum.photos/50/50'}  />
                        <span className="">{story?.USER_NAME.slice(0, 7)}...</span>
                    </div>
                );
            })}
        </Slider></div>
    )
}

export default ChatSlider