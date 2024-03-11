import mongoose from "mongoose"

/*export default async () => {
  return mongoose.connect("mongodb+srv://shukla:Yash@cluster0.dtieyii.mongodb.net")
};*/
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Yash1:Yash@cluster0.x6ghdgl.mongodb.net/");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;