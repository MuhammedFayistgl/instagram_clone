import { Schema, model } from "mongoose";

const storeiModel = new Schema(
    {
        STORY: [
            {
                url: String,
                duration: Number,
                seeMore: String,
                _id: Schema.ObjectId,
                header: {
                    heading: String,
                    subheading: String,
                    profileImage: String,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

export default model("Stories",storeiModel);
