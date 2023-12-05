import * as React from "react";

import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

// import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from "@mui/material/Skeleton";

const Media = () => {
    return (
        <>
            <>
                <CardHeader
                    avatar={
                        <Skeleton
                            sx={{ bgcolor: "grey.500" }}
                            animation="wave"
                            variant="circular"
                            width={40}
                            height={40}
                        />
                    }
                    title={
                        <Skeleton
                            sx={{ bgcolor: "grey.500" }}
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    }
                    subheader={
                        <Skeleton
                            sx={{ bgcolor: "grey.500" }}
                            animation="wave"
                            height={10}
                            width="40%"
                        />
                    }
                />

                <Skeleton
                    sx={{ bgcolor: "grey.500" }}
                    animation="wave"
                    variant="rectangular"
                    height={300}
                    width="100%"
                />

                <CardContent>
                    <React.Fragment>
                        <Skeleton
                            sx={{ bgcolor: "grey.500" }}
                            animation="wave"
                            height={10}
                            style={{ marginBottom: 6 }}
                        />
                        <Skeleton
                            sx={{ bgcolor: "grey.500" }}
                            animation="wave"
                            height={10}
                            width="80%"
                        />
                    </React.Fragment>
                </CardContent>
            </>
        </>
    );
};

const MYSkeleton = () => {
    return (
        <div>
            <Media />
        </div>
    );
};

export default MYSkeleton;
