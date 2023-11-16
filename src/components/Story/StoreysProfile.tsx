
// Import Swiper React components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { USER } from "../../Data/Data";

import Stories from 'react-insta-stories';
import { useState } from "react";
import { Activestory, ProfilePropsType, Storytype } from "../../types/Type";
import { Avatar, Dialog } from "@mui/material";


const StoreysProfile = ({ Profil_Url, alt, Size, storyview, Name }: ProfilePropsType) => {
	const [openStory, setopenStory] = useState<Storytype>()
	const [open, setopen] = useState(false)
	const size = {
		width: Size === 'sm' ? 24 : Size === 'md' ? 40 : Size === 'lg' ? 56 : Size === 'xl' ? 70 : 56,
		height: Size === 'sm' ? 24 : Size === 'md' ? 40 : Size === 'lg' ? 56 : Size === 'xl' ? 70 : 56,
	}
	const activeStory = USER.flatMap((i) => i.STORY.map((itm: Activestory) => itm))
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
		<div className=" " onBlur={() => setopen(false)}>
			<Slider {...settings}>
			</Slider>

			<div onClick={() => {
				storyview &&
					setopen(true)
			}}>

				<Avatar alt={alt} src={Profil_Url} sx={size} />

				{Name && <span className="">anil__a__k</span>}

			</div>



			<div >
				<Dialog
					open={open}
					fullScreen
				>
					<div className="relative">

						<Stories

							stories={activeStory}
							defaultInterval={1500}
							width={'100%'}
							height={'100vh'}
							onAllStoriesEnd={() => setopenStory(undefined)

							}
							preventDefault={false}

						/>
					</div>
				</Dialog>
			</div>


		</div >
	);
};

export default StoreysProfile;
