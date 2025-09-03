import { startServer } from "./server";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

startServer(port);