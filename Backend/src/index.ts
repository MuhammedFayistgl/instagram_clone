import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/server";
import { Route } from "./router/userRoute";
const app = express();
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

//  Routs
app.use("/v1", Route);
connectDB();

app.listen(1010, () => {
  console.log("Server started");
});
