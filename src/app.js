import { PORT } from "./config.js";
import express from "express";
import indexRoutes from "./routes/indexRoutes.js";

// init
const app = express();
app.set("port", PORT);

// routes
app.use(indexRoutes);


export default app;