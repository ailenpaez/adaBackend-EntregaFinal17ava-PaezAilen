import express, { json } from "express"
import indexRouter from "./routes"
import morganMiddleware from "./middlewares/morgan";

const app = express()

app.use(json());
app.use(morganMiddleware); 
app.use("/", indexRouter)



export default app