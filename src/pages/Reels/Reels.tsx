
import Vedio from '../../components/Vedios/Vedio'
import Slider from "react-slick";
import { videos } from '../../Data/Data';
const Reels = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        // beforeChange: function (currentSlide, nextSlide) {
        //     console.log("before change", currentSlide, nextSlide);
        // },
        // afterChange: function (currentSlide) {
        //     console.log("after change", currentSlide);
        // }
    }
    return (
        <div>
            <Slider {...settings}>

                {videos?.map((itm) => <Vedio Size='md' Src={itm} />)}

            </Slider>

        </div>
    )
}

export default Reels