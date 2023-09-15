import mongoose, { ConnectOptions } from "mongoose";

// # MongoDB connection via mongoosengo
const connectDatabase = async () => {
  try {
    // Vérifier si DATABASE_URL est défini
    if (!process.env.DATABASE_URL) {
      console.error("The key DATABASE_URL  is not exist in  .env");
      process.exit(1);
    }

    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("Successfully connected to database");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // throw error;
    process.exit(1);
  }
};

export default connectDatabase;
