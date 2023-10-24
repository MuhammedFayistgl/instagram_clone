import { Avatar } from "@mui/material";
// Import Swiper React components
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { USER } from "../Data/Data";

import Stories from 'react-insta-stories';
import { useState } from "react";
import { Activestory, Storytype } from "../types/Type";
const Storys = () => {
	const [openStory, setopenStory] = useState<Storytype>()

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
		<div className=" " onBlur={() => setopenStory(undefined)}>
			<Slider {...settings}>
				{USER?.map((story: Storytype, i) => {
					return (
						<div key={i} className=" " onClick={() => setopenStory(story)}>
							<Avatar src="https://avatars.githubusercontent.com/u/23637144" alt="@Sleaf" />
							<span className="">{story?.USER_NAME.slice(0, 7)}</span>
						</div>
					);
				})}
			</Slider>
			{openStory && (

				<div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[9999] ">
					<Stories

						stories={openStory?.STORY.map((itm : Activestory ) => itm)}
						defaultInterval={1500}
						// width={500}
						// height={'100%'}
						onAllStoriesEnd={() => setopenStory(undefined)

						}
						preventDefault={false}

					/>
				</div>

			)}
		</div >
	);
};

export default Storys;
