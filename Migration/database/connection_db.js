import mongoose from "mongoose";

export const connect = async () => {
    const DB_URI = process.env.DB_URI;
 try {
//la conexión es básicamente una línea👇
 await mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 });
 console.log("data base connected🪐");
 } catch (error) {
 console.error(error);
 console.log("data base connection failed🚫");
 }
};
export default connect;
