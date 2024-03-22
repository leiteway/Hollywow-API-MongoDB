import 'dotenv/config';
import {PORT} from "./config.js";
import express from  "express";
import cors from "cors";
import {connect} from "./database/connection_db.js";
import PosterRouter from "./routes/PosterRouter.js";

export const app = express();

app.use(express.json());
app.use('/api' , PosterRouter);
app.use(cors());

connect();

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
  })
