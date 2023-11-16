// import { NextFunction, Request, Response } from "express";

// export const getUserToken = (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => {
//     if (req.cookies.token && req.cookies.uid) {
//         req.token = req.cookies.token;
//         req.uid = req.cookies.uid;
//         next()
//     }else{
//         res.status(404).send({message:'unauthorized request'})
//     }
// };
