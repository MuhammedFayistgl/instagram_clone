import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { ButtonToolbar, Panel, Stack } from "rsuite";
import ThumbButton from "./Feed_Fun/ThumbButton";
import CommentsContainer from "../Comments/CommentsContainer";
import React, { useState } from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";

import { FeedData, feeds } from "../../types/FeedType";
import Description from "../Description/Description";
import ImgLazyloading from "../IMG-component/ImgLazyloading";
import UserNameLayout from "../UserNameLayout/UserNameLayout";



type PropsType = {
    FeedDataProps: FeedData| undefined;
};

const Feed: React.FC<PropsType> = ({ FeedDataProps}) => {
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
    console.log("FeedDataProps", FeedDataProps);

    return (
        <div className="flex flex-col items-center pt-5">
            
            {FeedDataProps?.feeds?.map((itm: feeds) => {
                const { FEED_URL, _id, comments } = itm;
                return (
                    <>
                        <UserNameLayout User={FeedDataProps?.user} key={_id}/>
                        <Panel
                            key={_id}
                            className="mb-2 customStylerspanelbody"
                            style={{ width: "100%", padding: 0 }}>
                            <Slider {...settings}>
                                <ImgLazyloading
                                    width={"100%"}
                                    height={""}
                                    src={FEED_URL}
                                    alt={"image-placeholder"}
                                />
                            </Slider>
                            <Container>
                                <Stack className="">
                                    <ButtonToolbar className="pt-3">
                                        <span className="text-lg ">
                                            <ThumbButton
                                                targetID={_id}
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
                                                            _id
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
                                    timeStamp={
                                        comments[comments?.length - 1]
                                            .timestamp
                                    }
                                    latestComment={[
                                        comments[comments?.length - 1]
                                            .COMMENT,
                                    ]}
                                    totalcommentsLength={
                                        FeedDataProps?.feeds?.length
                                    }
                                />
                                {commentToggler &&
                                    itm._id === selectedItem && (
                                        <CommentsContainer
                                            comments={comments}
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

