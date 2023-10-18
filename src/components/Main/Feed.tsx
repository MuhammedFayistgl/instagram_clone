import { Card, CardActions, IconButton } from "@mui/material";
import { USER } from "../../Data/Data";
import CardMedia from "@mui/material/CardMedia";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import Like from "./Feed_Fun/ThumbButton";
import CommentsContainer from "../Comments/CommentsContainer";
const Feed = () => {
	return (
		<div className="flex flex-col items-center pt-5">
			{USER?.map((img, i) => {
				return (
					<Card className="mb-2" sx={{ width: '75%' }}>
						<CardMedia
							key={i}
							component="img"
							// height="194"
							image={img?.IMG_URL}
							alt="Paella dish"
						/>
						<CardActions disableSpacing>
							<div className="mb-3">
								<Like />
							</div>
							
							<IconButton aria-label="share">
								<FiSend />
							</IconButton>
							<IconButton>
								<BsBookmark />
							</IconButton>
							{/* Comments */}
						</CardActions>
							<CommentsContainer/>
					</Card>
				);
			})}
		</div>
	);
};

export default Feed;
