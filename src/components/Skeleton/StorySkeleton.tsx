import { Skeleton } from "@mui/material";

const StorySkeleton = () => {
    return (
        <div className=" flex ">
            <Skeleton
                sx={{ bgcolor: "grey.500" }}
                animation="wave"
                variant="circular"
                width={56}
                height={56}
            />
            <Skeleton
                sx={{ bgcolor: "grey.500" }}
                animation="wave"
                variant="circular"
                width={56}
                height={56}
            />
                <Skeleton
                sx={{ bgcolor: "grey.500" }}
                animation="wave"
                variant="circular"
                width={56}
                height={56}
            />
                <Skeleton
                sx={{ bgcolor: "grey.500" }}
                animation="wave"
                variant="circular"
                width={56}
                height={56}
            />
                <Skeleton
                sx={{ bgcolor: "grey.500" }}
                animation="wave"
                variant="circular"
                width={56}
                height={56}
            />
        </div>
    );
};

export default StorySkeleton;
