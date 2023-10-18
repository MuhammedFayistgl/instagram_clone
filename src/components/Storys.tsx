import { Avatar } from "@mui/material";
// Import Swiper React components
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { USER } from "../Data/Data";
const Storys = () => {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 8,
		initialSlide: 0,
	
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 2,
					initialSlide: 2,
					dots: false
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
		]
	};
	return (
		<div className=" ">
			<Slider {...settings}>
				{USER?.map((story) => {
					return (
						<div className=" ">
							<Avatar  src="https://avatars.githubusercontent.com/u/23637144" alt="@Sleaf" />
							<span className="pl-1">{story?.USER_NAME.slice(0, 7)}</span>
						</div>
					);
				})}
			</Slider>


		</div>
	);
};

export default Storys;
