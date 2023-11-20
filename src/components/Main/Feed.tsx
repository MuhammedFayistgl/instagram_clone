import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { ButtonToolbar, Panel, Stack } from "rsuite";
import Like from "./Feed_Fun/ThumbButton";
import CommentsContainer from "../Comments/CommentsContainer";
import React, { useState } from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";

import { FeedData } from "../../types/FeedType";
import Description from "../Description/Description";
import ImgLazyloading from "../IMG-component/ImgLazyloading";
import UserNameLayout from "../UserNameLayout/UserNameLayout";
import { user } from "../../types/ProfileType";

type PropsType = {
    FeedDataProps: FeedData[] | undefined;
    user: user;
};

const Feed: React.FC<PropsType> = ({ FeedDataProps,user }) => {
    const [commentToggler, setcommentToggler] =
        useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState("");
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        appendDots: (dots: JSX.Element) => (
            <div
                style={{
                    position: "absolute",
                    bottom: 2,
                    borderRadius: "10px",
                    padding: "10px",
                }}>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
    };
    console.log("Feeduser", user);

    return (
        <div className="flex flex-col items-center pt-5">
            {FeedDataProps?.map((itm: FeedData) => {
                return (
                    <>
                        <UserNameLayout User={user} />
                        <Panel
                            key={itm?._id}
                            className="mb-2 customStylerspanelbody"
                            style={{ width: "100%", padding: 0 }}>
                            <Slider {...settings}>
                                <ImgLazyloading
                                    width={"100%"}
                                    height={""}
                                    src={itm?.FEED_URL}
                                    alt={"image-placeholder"}
                                />
                            </Slider>
                            <Container>
                                <Stack className="">
                                    <ButtonToolbar className="pt-3">
                                        <span className="text-lg ">
                                            <Like
                                                targetID={itm?._id}
                                            />
                                        </span>
                                        <span className="text-lg">
                                            <FiSend />
                                        </span>
                                        <span className="text-lg">
                                            {" "}
                                            <FaRegCommentDots
                                                onClick={() => {
                                                    setcommentToggler(
                                                        !commentToggler
                                                    ),
                                                        setSelectedItem(
                                                            itm?._id
                                                        );
                                                }}
                                            />
                                        </span>
                                        <span className="text-lg">
                                            <BsBookmark />
                                        </span>
                                    </ButtonToolbar>
                                    {/* Comments */}
                                </Stack>
                                <Description
                                    comments={itm?.comments}
                                    totalcommentsLength={
                                        FeedDataProps.length
                                    }
                                />
                                {commentToggler &&
                                    itm._id === selectedItem && (
                                        <CommentsContainer
                                            comments={itm?.comments}
                                        />
                                    )}
                            </Container>
                        </Panel>
                    </>
                );
            })}
        </div>
    );
};

export default Feed;
