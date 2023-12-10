import express from 'express'
import "dotenv/config";
import cors from "cors";
//import mongoose from "mongoose";
import PlayerRoutes from "./Players/routes"
import UserRoutes from "./Users/routes"
//mongoose.connect("mongodb://127.0.0.1:27017/kanbas")
const app = express();
app.use(cors());
app.use(express.json());
PlayerRoutes(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);