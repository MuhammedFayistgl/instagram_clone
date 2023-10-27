import { USER } from "../../Data/Data";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { ButtonToolbar, Panel, Stack } from 'rsuite';
import Like from "./Feed_Fun/ThumbButton";
import CommentsContainer from "../Comments/CommentsContainer";
import { useState } from "react";



const Feed = () => {
	const [commentToggler, setcommentToggler] = useState<boolean>(false)


	return (
		<div className="flex flex-col items-center pt-5">
			{USER.flatMap(o => o.FEED_URL.map((itm, i) => {
				return (
					<Panel className="mb-2" style={{ width: '95%' }}>
						<img
							key={i}
							width="100%"
							src={itm}
							alt="Paella dish"
						/>
						<Stack className="">
							<div className="">
								<Like />
							</div>
							<ButtonToolbar className="pt-3">
								<span className="text-lg"><FiSend /></span>
								<span className="text-lg">	<FaRegCommentDots onClick={() => setcommentToggler(!commentToggler)} /></span>
								<span className="text-lg"><BsBookmark /></span>
							</ButtonToolbar>
							{/* Comments */}
						</Stack>
						{commentToggler && <CommentsContainer />}

					</Panel>
				)
			}))}
		

		</div>
	);
};

export default Feed;
