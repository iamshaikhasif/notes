import app from "./app";
import env from "./utils/validationEnv"
import mongoose from "mongoose";
const port = env.PORT;




mongoose.connect(env.MONGO_CONECCTION_STRING).then(() => {
    console.log("connection success");
    app.listen(port, () => {
        console.log("Server running on port:" + port);
    });
}).catch(console.error);

