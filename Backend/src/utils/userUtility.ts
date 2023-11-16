import { Request } from "express";

export const getcookie = (req: Request) => {
    const cookie = req.headers.cookie;
    // user=someone; session=mySessionID
    return cookie?.split("; ");
};
