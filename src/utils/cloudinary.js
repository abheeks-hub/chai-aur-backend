import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadonCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // Now we will upload the file
    const response = await cloudinary.uploader.upload(localFilePath, {
      public_id: "shoe",
      resource_type: "auto",
    });
    // File has been uploaded successfully
    console.log("File has been uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file
    // as the upload operation got failed
    console.log("Error", error);
    return null;
  }
};

export { uploadonCloudinary };
