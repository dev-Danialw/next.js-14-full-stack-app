import mongoose from "mongoose";

const connection = {};

export const connectTODataBase = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {});
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error("Error while connecting to database: ", error);
  }
};
