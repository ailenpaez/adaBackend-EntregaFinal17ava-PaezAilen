import { config } from "dotenv";
config()
import app from "./app";

const PORT = process.env.PORT


app.listen(PORT, () => console.log("SERVER_RUNNING_ON_PORT ->", PORT))