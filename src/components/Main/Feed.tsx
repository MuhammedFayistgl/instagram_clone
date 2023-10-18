import { Card, CardActions, IconButton } from "@mui/material";
import { USER } from "../../Data/Data";
import CardMedia from "@mui/material/CardMedia";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";

import Like from "./Feed_Fun/ThumbButton";
import CommentsContainer from "../Comments/CommentsContainer";
import { useState } from "react";
const Feed = () => {
	const [commentToggler, setcommentToggler] = useState<boolean>(false)
	return (
		<div className="flex flex-col items-center pt-5">
			{USER.flatMap(o => o.FEED_URL.map((itm, i) => {
				return (
					<Card className="mb-2" sx={{ width: '75%' }}>
						<CardMedia
							key={i}
							component="img"
							// height="194"
							image={itm}
							alt="Paella dish"
						/>
						<CardActions disableSpacing>
							<div className="mb-3">
								<Like />
							</div>

							<IconButton aria-label="share">
								<FiSend />
							</IconButton>
							<IconButton onClick={() => setcommentToggler(!commentToggler)}>
								<FaRegCommentDots />
							</IconButton>
							<IconButton>
								<BsBookmark />
							</IconButton>
							{/* Comments */}
						</CardActions>
						{commentToggler && <CommentsContainer />}

					</Card>
				)
			}))}


		</div>
	);
};

export default Feed;
