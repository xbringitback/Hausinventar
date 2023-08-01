// import dotenv from "dotenv";

// dotenv.config({path:new URL ("../../.env", import.meta.url).pathname})


dotenv.config({path:new URL ("../../.env", import.meta.url).pathname})
import dotenv from "dotenv";
import mongoose from "mongoose"; 
import path from "path";

dotenv.config({
  path: path.join(path.resolve(), "..", ".env"),
});

await mongoose.connect(process.env.MONGO_URI);