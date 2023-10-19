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
		slidesToShow: 10,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows:false,
	
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
					rows:1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1,
					dots: false
				}
			}
			,
			{
				breakpoint: 300,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	};
	return (
		<div className=" ">
			<Slider {...settings}>
				{USER?.map((story,i) => {
					return (
						<div key={i} className=" ">
							<Avatar  src="https://avatars.githubusercontent.com/u/23637144" alt="@Sleaf" />
							<span className="">{story?.USER_NAME.slice(0, 7)}</span>
						</div>
					);
				})}
			</Slider>


		</div>
	);
};

export default Storys;
