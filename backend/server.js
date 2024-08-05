import express from "express";
import router from "./route.js";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 3000

app.use(express.json());

//Route
app.use("/api", router);

app.listen(port, () => console.log(`Server running on port ${port}`));
