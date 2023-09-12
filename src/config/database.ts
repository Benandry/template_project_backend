import mongoose, { ConnectOptions } from "mongoose";

// # MongoDB connection via mongoosengo
const server = "127.0.0.1:27017";
const database = "my_db_express";

const connectDatabase = async () => {
  try {
    await mongoose.connect(`mongodb://${server}/${database}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("Successfully connected to database");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
    process.exit(1);
  }
};

export default connectDatabase;
